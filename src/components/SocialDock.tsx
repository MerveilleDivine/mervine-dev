
import { Github, Linkedin, Mail } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

const socialLinks = [
  {
    title: 'GitHub',
    icon: <Github className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: 'https://github.com/',
  },
  {
    title: 'LinkedIn',
    icon: <Linkedin className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: 'https://linkedin.com/',
  },
  {
    title: 'Email',
    icon: <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: 'mailto:mervinemuganguzi1@outlook.com',
  }
];

export function SocialDock() {
  return (
    <div className='mx-auto max-w-fit'>
      <div className='flex gap-4'>
        {socialLinks.map((item, idx) => (
          <a 
            key={idx} 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 dark:bg-neutral-800"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
