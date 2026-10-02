import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  company: z.string().max(200).optional().default(""),
  service: z.string().min(1).max(120),
  description: z.string().min(1).max(5000),
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const Route = createFileRoute("/api/contact")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ success: false, error: "Invalid JSON body." }, { status: 400 });
        }

        const parsed = bodySchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json({ success: false, error: "Missing or invalid fields." }, { status: 400 });
        }

        const apiKey = process.env["RESEND_API_KEY"];
        if (!apiKey) {
          return Response.json(
            { success: false, error: "Email service is not configured." },
            { status: 500 },
          );
        }

        const { name, email, company, service, description } = parsed.data;

        const row = (label: string, value: string) => `
          <tr>
            <td style="padding: 10px 24px; border-bottom: 1px solid #f1f5f9; width: 110px; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; color: #64748b;">${label}</td>
            <td style="padding: 10px 24px; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;">${value}</td>
          </tr>`;

        const html = `
          <div style="font-family: Arial, Helvetica, sans-serif; max-width: 560px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
            <div style="background: #0f172a; padding: 20px 24px;">
              <h1 style="margin: 0; font-size: 18px; color: #ffffff;">New Project Enquiry</h1>
              <p style="margin: 4px 0 0; font-size: 13px; color: #94a3b8;">DEVGRONIX &mdash; website contact form</p>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              ${row("Name", escapeHtml(name))}
              ${row("Email", `<a href="mailto:${escapeHtml(email)}" style="color: #0f172a;">${escapeHtml(email)}</a>`)}
              ${row("Company", company ? escapeHtml(company) : "&mdash;")}
              ${row("Service", escapeHtml(service))}
            </table>
            <div style="padding: 16px 24px 24px;">
              <p style="margin: 0 0 6px; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; color: #64748b;">Details</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #0f172a; white-space: pre-wrap;">${escapeHtml(description)}</p>
            </div>
          </div>`;

        try {
          const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "DEVGRONIX <admin@devgronix.in>",
              to: ["admin@devgronix.in", "tahsinraza933400@gmail.com"],
              reply_to: email,
              subject: `New Project Enquiry: ${name} (${service})`,
              html,
            }),
          });

          if (!response.ok) {
            const errorBody = await response.text();
            console.error(`Resend request failed [${response.status}]: ${errorBody}`);
            return Response.json(
              { success: false, error: "Email provider rejected the request." },
              { status: 502 },
            );
          }

          return Response.json({ success: true });
        } catch (error) {
          console.error("Resend request error:", error);
          return Response.json(
            { success: false, error: "Failed to reach the email service." },
            { status: 502 },
          );
        }
      },
    },
  },
});
