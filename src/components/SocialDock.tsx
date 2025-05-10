
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
    href: 'mailto:mervine@example.com',
  }
];

export function SocialDock() {
  return (
    <div className='mx-auto max-w-fit mb-8'>
      <Dock className='items-end pb-3'>
        {socialLinks.map((item, idx) => (
          <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer">
            <DockItem
              className='aspect-square rounded-full bg-primary/10 hover:bg-primary/20 dark:bg-neutral-800'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </a>
        ))}
      </Dock>
    </div>
  );
}
