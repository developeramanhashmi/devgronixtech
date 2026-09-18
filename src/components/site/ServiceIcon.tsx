import {
  Boxes,
  Cloud,
  Code2,
  Layers,
  PenTool,
  Smartphone,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Code2,
  Smartphone,
  Layers,
  Boxes,
  Sparkles,
  PenTool,
  TrendingUp,
  Cloud,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Boxes;
  return <Icon aria-hidden="true" className={className} />;
}
