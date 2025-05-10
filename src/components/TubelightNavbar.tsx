
import { Home, User, Briefcase, FileText, Mail } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'About', url: '#about', icon: User },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'Resume', url: '#teaching', icon: FileText },
  { name: 'Contact', url: '#contact', icon: Mail }
];

export function TubelightNavbar() {
  return <NavBar items={navItems} />;
}
