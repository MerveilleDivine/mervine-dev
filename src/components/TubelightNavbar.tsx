
import { Home, User, Briefcase, FileText, Mail } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

export function TubelightNavbar() {
  const { t } = useTranslation();
  
  const navItems = [
    { name: t('nav.home'), url: '#home', icon: Home },
    { name: t('nav.about'), url: '#about', icon: User },
    { name: t('nav.projects'), url: '#projects', icon: Briefcase },
    { name: t('nav.resume'), url: '#teaching', icon: FileText },
    { name: t('nav.contact'), url: '#contact', icon: Mail }
  ];

  return (
    <>
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
      <NavBar items={navItems} />
    </>
  );
}
