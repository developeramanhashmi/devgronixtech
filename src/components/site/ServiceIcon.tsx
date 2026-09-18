import {
  BarChart3,
  Boxes,
  Cloud,
  Code2,
  Film,
  Layers,
  LayoutTemplate,
  MessageCircle,
  PenTool,
  Search,
  Shapes,
  Smartphone,
  Sparkles,
  TrendingUp,
  Type,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Code2,
  Smartphone,
  Boxes,
  LayoutTemplate,
  Sparkles,
  Cloud,
  BarChart3,
  Layers,
  Shapes,
  PenTool,
  Film,
  TrendingUp,
  MessageCircle,
  Search,
  Type,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Boxes;
  return <Icon aria-hidden="true" className={className} />;
}
