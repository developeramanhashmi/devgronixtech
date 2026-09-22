import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  country?: string;
  service?: string;
  budget?: string;
  description?: string;
  timeline?: string;
  additional?: string;
};

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const apiKey = process.env["RESEND_API_KEY"];
          const contactToEmail =
            process.env["CONTACT_TO_EMAIL"] || "career@jobsscope.in";

          if (!apiKey || !contactToEmail) {
            console.error("Missing email configuration.");

            return Response.json(
              {
                success: false,
                message: "Email service is not configured.",
              },
              { status: 500 },
            );
          }

          const resend = new Resend(apiKey);

          const body = (await request.json()) as ContactPayload;

          const name = String(body.name ?? "").trim();
          const email = String(body.email ?? "").trim();
          const company = String(body.company ?? "").trim();
          const country = String(body.country ?? "").trim();
          const service = String(body.service ?? "").trim();
          const budget = String(body.budget ?? "").trim();
          const description = String(body.description ?? "").trim();
          const timeline = String(body.timeline ?? "").trim();
          const additional = String(body.additional ?? "").trim();

          if (name.length < 2) {
            return Response.json(
              {
                success: false,
                message: "Please enter a valid name.",
              },
              { status: 400 },
            );
          }

          if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
            return Response.json(
              {
                success: false,
                message: "Please enter a valid email address.",
              },
              { status: 400 },
            );
          }

          if (!service) {
            return Response.json(
              {
                success: false,
                message: "Please choose a service.",
              },
              { status: 400 },
            );
          }

          if (description.length < 20) {
            return Response.json(
              {
                success: false,
                message:
                  "Please describe the project in at least 20 characters.",
              },
              { status: 400 },
            );
          }

          const { data, error } = await resend.emails.send({
            from: "DEVGRONIX <hello@devgronix.com>",
            to: [contactToEmail],
            replyTo: email,
            subject: `New Project Enquiry � ${name}${company ? ` | ${company}` : ""}`,
            html: `
              <div style="font-family: Arial, Helvetica, sans-serif; max-width: 700px; margin: 0 auto; color: #111827; line-height: 1.6;">

                <div style="padding: 24px 0; border-bottom: 1px solid #e5e7eb;">
                  <h1 style="margin: 0; font-size: 24px;">
                    New Project Enquiry
                  </h1>
                  <p style="margin: 6px 0 0; color: #6b7280;">
                    Submitted through the DEVGRONIX website
                  </p>
                </div>

                <div style="padding: 24px 0;">

                  <h2 style="font-size: 18px; margin: 0 0 16px;">
                    Contact Details
                  </h2>

                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; font-weight: 600; width: 160px;">
                        Name
                      </td>
                      <td style="padding: 8px 0;">
                        ${escapeHtml(name)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 8px 0; font-weight: 600;">
                        Email
                      </td>
                      <td style="padding: 8px 0;">
                        ${escapeHtml(email)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 8px 0; font-weight: 600;">
                        Company
                      </td>
                      <td style="padding: 8px 0;">
                        ${escapeHtml(company || "Not provided")}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 8px 0; font-weight: 600;">
                        Country
                      </td>
                      <td style="padding: 8px 0;">
                        ${escapeHtml(country || "Not provided")}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 8px 0; font-weight: 600;">
                        Service
                      </td>
                      <td style="padding: 8px 0;">
                        ${escapeHtml(service)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 8px 0; font-weight: 600;">
                        Budget
                      </td>
                      <td style="padding: 8px 0;">
                        ${escapeHtml(budget || "Not provided")}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 8px 0; font-weight: 600;">
                        Timeline
                      </td>
                      <td style="padding: 8px 0;">
                        ${escapeHtml(timeline || "Not provided")}
                      </td>
                    </tr>
                  </table>

                  <h2 style="font-size: 18px; margin: 28px 0 12px;">
                    Project Description
                  </h2>

                  <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px; white-space: pre-wrap;">
                    ${escapeHtml(description)}
                  </div>

                  ${
                    additional
                      ? `
                    <h2 style="font-size: 18px; margin: 28px 0 12px;">
                      Additional Information
                    </h2>

                    <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px; white-space: pre-wrap;">
                      ${escapeHtml(additional)}
                    </div>
                  `
                      : ""
                  }

                </div>

                <div style="padding: 20px 0; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">
                  This enquiry was submitted from devgronix.com.
                </div>

              </div>
            `,
          });

          if (error) {
            console.error("Resend error:", error);

            return Response.json(
              {
                success: false,
                message: "Unable to send your enquiry right now.",
              },
              { status: 500 },
            );
          }

          console.log("DEVGRONIX contact enquiry sent:", {
            emailId: data?.id,
            name,
            email,
            service,
            receivedAt: new Date().toISOString(),
          });

          return Response.json({
            success: true,
            message: "Your enquiry has been sent successfully.",
          });
        } catch (error) {
          console.error("Contact submission error:", error);

          return Response.json(
            {
              success: false,
              message: "Unable to process your enquiry right now.",
            },
            { status: 500 },
          );
        }
      },
    },
  },
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
