
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const sections = items.map(item => ({
        id: item.url.substring(1),
        name: item.name,
        element: document.getElementById(item.url.substring(1))
      })).filter(section => section.element);

      const scrollPosition = window.scrollY + 120;
      
      let currentSection = sections[0]?.name || items[0].name;
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (!section.element) continue;
        
        const sectionTop = section.element.offsetTop;
        const sectionHeight = section.element.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.name;
          break;
        }
      }
      
      setActiveTab(currentSection);
    };

    handleResize();
    handleScroll();
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab(item.name);
    
    const targetId = item.url.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40",
        className,
      )}
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-1 bg-white/95 dark:bg-zinc-900/95 border border-gray-200 dark:border-zinc-700 backdrop-blur-xl py-2 px-2 rounded-full shadow-2xl"
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <motion.button
              key={item.name}
              onClick={(e) => handleNavClick(item, e)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-500",
                "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary",
                isActive && "text-white dark:text-white",
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="hidden sm:inline relative z-10">{item.name}</span>
              <span className="sm:hidden relative z-10">
                <Icon size={16} strokeWidth={2.5} />
              </span>
              
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 40,
                  }}
                >
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-60 animate-pulse" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
