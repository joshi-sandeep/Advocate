import siteData from "../data/content.json";
import { Scale, Users, Building2, Briefcase, Home, FileText } from "lucide-react";

const iconMap = {
  Scale,
  Users,
  Building2,
  Briefcase,
  Home,
  FileText,
};

export function getIcon(iconName: keyof typeof iconMap) {
  return iconMap[iconName];
}

export const data = siteData;
