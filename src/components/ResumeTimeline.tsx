
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FileDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import jsPDF from 'jspdf';

interface ResumeTimelineProps {
  onDownloadError?: () => void;
}

export function ResumeTimeline({ onDownloadError }: ResumeTimelineProps) {
  const { t } = useTranslation();
  
  const handleDownloadResume = async () => {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        try {
          // Create PDF with A4 dimensions
          const pdf = new jsPDF('portrait', 'mm', 'a4');
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          
          // Calculate image dimensions to fit the page while maintaining aspect ratio
          const imgAspectRatio = img.width / img.height;
          const pdfAspectRatio = pdfWidth / pdfHeight;
          
          let imgWidth, imgHeight;
          
          if (imgAspectRatio > pdfAspectRatio) {
            // Image is wider than PDF page
            imgWidth = pdfWidth;
            imgHeight = pdfWidth / imgAspectRatio;
          } else {
            // Image is taller than PDF page
            imgHeight = pdfHeight;
            imgWidth = pdfHeight * imgAspectRatio;
          }
          
          // Center the image on the page
          const x = (pdfWidth - imgWidth) / 2;
          const y = (pdfHeight - imgHeight) / 2;
          
          // Add the image to PDF
          pdf.addImage(img, 'PNG', x, y, imgWidth, imgHeight);
          
          // Save the PDF
          pdf.save('Mervine_Muganguzi_Resume.pdf');
        } catch (error) {
          console.error('Error creating PDF:', error);
          if (onDownloadError) {
            onDownloadError();
          }
        }
      };
      
      img.onerror = () => {
        console.error('Error loading resume image');
        if (onDownloadError) {
          onDownloadError();
        }
      };
      
      img.src = '/lovable-uploads/a7fdb425-27e7-44a7-b644-4e8fc68ab4a2.png';
    } catch (error) {
      console.error('Error downloading resume:', error);
      if (onDownloadError) {
        onDownloadError();
      }
    }
  };
  
  const timelineData = [
    {
      title: `2025-${t('resume.present')}`,
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">{t('resume.bcu.title')}</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('resume.bcu.role')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('resume.bcu.desc1')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('resume.bcu.desc2')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">{t('resume.neu.title')}</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('resume.neu.role')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('resume.neu.desc1')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('resume.neu.desc2')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">{t('resume.cc.title')}</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('resume.cc.role')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('resume.cc.desc1')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('resume.cc.desc2')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020-2025",
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">{t('resume.ciu.title')}</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('resume.ciu.role')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('resume.ciu.desc1')}
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('resume.ciu.desc2')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h4 className="font-semibold text-xl mb-3 text-primary">{t('resume.geneza.title')}</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('resume.geneza.role')}
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ {t('resume.geneza.desc1')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: t('resume.resume_title'),
      content: (
        <div className="flex flex-col gap-4">
          <div className="flex justify-start items-center">
            <button 
              onClick={handleDownloadResume}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer bg-transparent border-none p-0 font-medium text-lg hover:underline"
            >
              <FileDown size={18} />
              <span>{t('resume.download')}</span>
            </button>
          </div>
          <div className="mt-4">
            <img 
              src="/lovable-uploads/a7fdb425-27e7-44a7-b644-4e8fc68ab4a2.png" 
              alt="Mervine Muganguzi Resume" 
              className="max-w-full h-auto rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-800"
            />
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full mt-16 container mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary">{t('resume.timeline')}</h3>
      <Timeline data={timelineData} />
    </div>
  );
}
