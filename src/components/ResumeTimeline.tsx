
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FileDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ResumeTimeline() {
  const { t } = useTranslation();
  
  const timelineData = [
    {
      title: "2025-" + t('timeline.present'),
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">{t('timeline.bcu.title')}</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('timeline.bcu.role')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.bcu.task1')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.bcu.task2')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">{t('timeline.neu.title')}</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('timeline.neu.role')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.neu.task1')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.neu.task2')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">{t('timeline.cyprus_codes.title')}</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('timeline.cyprus_codes.role')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.cyprus_codes.task1')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.cyprus_codes.task2')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020-2025",
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">{t('timeline.ciu.title')}</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('timeline.ciu.degree')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.ciu.task1')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.ciu.task2')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">{t('timeline.geneza.title')}</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('timeline.geneza.certificate')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('timeline.geneza.task1')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: t('timeline.resume.title'),
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
            <span>{t('timeline.resume.download')}</span>
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
