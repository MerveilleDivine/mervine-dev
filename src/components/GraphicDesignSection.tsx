
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { VideoIcon, Palette, Layers, Zap } from 'lucide-react';
import { 
  ContainerAnimated,
  ContainerStagger,
} from "@/components/ui/animated-gallery";
import SectionTitle from './SectionTitle';
import { ThreeDPhotoCarouselDemo } from "@/components/ui/demo";

const GraphicDesignSection = () => {
  const { t } = useTranslation();

  const designServices = [
    {
      icon: <Palette size={24} />,
      title: t('graphics.services.brand_identity'),
      description: t('graphics.services.brand_identity_desc')
    },
    {
      icon: <Layers size={24} />,
      title: t('graphics.services.print_design'),
      description: t('graphics.services.print_design_desc')
    },
    {
      icon: <Zap size={24} />,
      title: t('graphics.services.digital_graphics'),
      description: t('graphics.services.digital_graphics_desc')
    }
  ];

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="graphics" className="relative bg-white dark:bg-zinc-900 overflow-hidden">
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20 lg:py-24">
        <SectionTitle title={t('graphics.title')} />
        
        <ContainerStagger className="relative place-self-center px-4 sm:px-6 pt-8 sm:pt-12 text-center">
          <ContainerAnimated>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
              {t('graphics.creative')}{" "}
              <span className="font-light text-primary">
                {t('graphics.visual_solutions')}
              </span>
            </h2>
          </ContainerAnimated>
          
          <ContainerAnimated>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-8">
              {t('graphics.drive_results')}
            </h3>
          </ContainerAnimated>

          <ContainerAnimated className="my-8 sm:my-10">
            <p className="text-base sm:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl mx-auto">
              {t('graphics.description')}
            </p>
          </ContainerAnimated>

          {/* Services Grid */}
          <ContainerAnimated className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 mb-12 sm:mb-16">
            {designServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-zinc-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-zinc-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-primary mb-4 sm:mb-6">
                  {service.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                  {service.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </ContainerAnimated>

          <ContainerAnimated className="flex justify-center mb-12 sm:mb-16">
            <Button 
              onClick={scrollToContact}
              className="gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[56px] touch-manipulation"
            >
              <VideoIcon className="size-5" />
              {t('graphics.book_consultation')}
            </Button>
          </ContainerAnimated>
        </ContainerStagger>
      </div>

      {/* 3D Carousel Gallery Section */}
      <div className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-800 dark:to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              {t('graphics.portfolio_gallery')}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('graphics.interactive_gallery')}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <ThreeDPhotoCarouselDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignSection;
