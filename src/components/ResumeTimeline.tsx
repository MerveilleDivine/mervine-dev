
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FileDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const timelineData = [
  {
    title: "2025-Present",
    content: (
      <div>
        <h4 className="font-semibold text-xl mb-3 text-primary">Bahçeşehir Cyprus University</h4>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          Teaching Assistant & Masters in Computer Engineering
        </p>
        <div className="mb-6">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Supporting students in programming courses
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Pursuing advanced studies in Computer Engineering
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <h4 className="font-semibold text-xl mb-3 text-primary">Near East University AI Research Center</h4>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          AI Engineer (Internship)
        </p>
        <div className="mb-6">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Applied machine learning techniques to real-world problems
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Worked with advanced AI technologies and frameworks
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <h4 className="font-semibold text-xl mb-3 text-primary">Cyprus Codes</h4>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          Junior Software Developer (Internship)
        </p>
        <div className="mb-6">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Developed web applications using modern frameworks
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Collaborated with development team on client projects
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2020-2025",
    content: (
      <div>
        <h4 className="font-semibold text-xl mb-3 text-primary">Cyprus International University</h4>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          Bachelor in Computer Engineering
        </p>
        <div className="mb-6">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Studied computer systems architecture and programming
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Google Developer Student Club, CIU - Graphic Designer (2023-2024)
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <h4 className="font-semibold text-xl mb-3 text-primary">Geneza School of Design</h4>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          Graphic Design Certificate
        </p>
        <div className="mb-6">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Mastered design software including Canva and Adobe Photoshop
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Resume",
    content: (
      <div className="flex justify-start items-center pt-4">
        <a 
          href="/mervine_muganguzi_resume.pdf"
          download="Mervine_Muganguzi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer bg-transparent border-none p-0 font-medium text-lg hover:underline"
        >
          <FileDown size={18} />
          <span>Download Resume</span>
        </a>
      </div>
    ),
  },
];

export function ResumeTimeline() {
  const { t } = useTranslation();
  
  return (
    <div className="w-full mt-16 container mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary">My Experience Timeline</h3>
      <Timeline data={timelineData} />
    </div>
  );
}
