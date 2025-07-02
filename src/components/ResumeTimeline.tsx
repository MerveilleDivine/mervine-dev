
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FileDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ResumeTimeline() {
  const { t } = useTranslation();
  
  const timelineData = [
    {
      title: "2025-Present",
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">Bahçeşehir Cyprus University</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('timeline.position.teaching_assistant')} & {t('timeline.position.masters')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.desc.supporting_students')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.desc.pursuing_studies')}
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
            {t('timeline.position.ai_engineer')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.desc.ml_techniques')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.desc.ai_technologies')}
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
            {t('timeline.position.junior_developer')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.desc.web_development')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.desc.team_collaboration')}
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
            {t('timeline.position.bachelor')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.desc.computer_systems')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ Google Developer Student Club, CIU - {t('timeline.position.gdsc_designer')} (2023-2024)
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
            {t('timeline.position.graphic_design')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.desc.design_software')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Resume",
      content: (
        <div className="flex justify-start items-center pt-4">
          <button 
            onClick={() => {
              // Create a temporary anchor element to trigger download
              const link = document.createElement('a');
              link.href = '/mervine_muganguzi_resume.pdf';
              link.download = 'Mervine_Muganguzi_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer bg-transparent border-none p-0 font-medium text-lg hover:underline"
          >
            <FileDown size={18} />
            <span>{t('resume.download')}</span>
          </button>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full mt-16 container mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary">{t('timeline.title')}</h3>
      <Timeline data={timelineData} />
    </div>
  );
}
