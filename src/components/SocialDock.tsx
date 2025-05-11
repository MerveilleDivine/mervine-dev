
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    title: 'GitHub',
    icon: <Github className='h-5 w-5 text-neutral-600 dark:text-neutral-300' />,
    href: 'https://github.com/',
  },
  {
    title: 'LinkedIn',
    icon: <Linkedin className='h-5 w-5 text-neutral-600 dark:text-neutral-300' />,
    href: 'https://www.linkedin.com/in/mervine-muganguzi-981568236/',
  },
  {
    title: 'Email',
    icon: <Mail className='h-5 w-5 text-neutral-600 dark:text-neutral-300' />,
    href: 'mailto:mervinemuganguzi1@outlook.com',
  }
];

export function SocialDock() {
  return (
    <div className='max-w-fit'>
      <div className='flex items-center gap-4'>
        {socialLinks.map((item, idx) => (
          <a 
            key={idx} 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 dark:bg-neutral-800"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
