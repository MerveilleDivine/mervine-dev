
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FileDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ResumeTimeline() {
  const { t, i18n } = useTranslation();
  
  const timelineData = [
    {
      title: t('timeline.2025_present'),
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">{t('timeline.bau_title')}</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('timeline.bau_role')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.bau_task1')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.bau_task2')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: t('timeline.2024'),
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">{t('timeline.neu_title')}</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('timeline.neu_role')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.neu_task1')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.neu_task2')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: t('timeline.2023'),
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">{t('timeline.cyprus_codes_title')}</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('timeline.cyprus_codes_role')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.cyprus_codes_task1')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.cyprus_codes_task2')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: t('timeline.2020_2025'),
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">{t('timeline.ciu_title')}</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('timeline.ciu_role')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.ciu_task1')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.ciu_task2')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: t('timeline.2022'),
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">{t('timeline.geneza_title')}</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('timeline.geneza_role')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.geneza_task1')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: t('timeline.resume_title'),
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
            <span>{t('timeline.download_resume')}</span>
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
