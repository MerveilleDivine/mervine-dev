
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { VideoIcon, Palette, Layers, Zap, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import SectionTitle from './SectionTitle';

// All 15 design images
const designImages = [
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1542052125323-e69ad37a47c2?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1596003906949-67221c37965c?w=800&auto=format&fit=crop&q=80",
];

const GraphicDesignSection = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const designServices = [
    {
      icon: <Palette size={24} />,
      title: t('graphics.brand_identity') || "Brand Identity",
      description: t('graphics.brand_identity_desc') || "Complete brand identity packages including logos, color schemes, and visual guidelines."
    },
    {
      icon: <Layers size={24} />,
      title: t('graphics.print_design') || "Print Design",
      description: t('graphics.print_design_desc') || "Professional print materials from business cards to large format displays."
    },
    {
      icon: <Zap size={24} />,
      title: t('graphics.digital_graphics') || "Digital Graphics",
      description: t('graphics.digital_graphics_desc') || "Web graphics, social media assets, and digital marketing materials."
    }
  ];

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setSelectedIndex(designImages.indexOf(imageUrl));
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (selectedIndex + 1) % designImages.length
      : (selectedIndex - 1 + designImages.length) % designImages.length;
    
    setSelectedIndex(newIndex);
    setSelectedImage(designImages[newIndex]);
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="graphics" className="relative bg-white dark:bg-zinc-900 overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <SectionTitle title={t('graphics.title') || "Graphic Design Portfolio"} />
        
        <div className="relative place-self-center px-4 sm:px-6 pt-8 sm:pt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
              {t('graphics.creative') || "Creative"}{" "}
              <span className="font-light text-primary">
                {t('graphics.visual_solutions') || "Visual Solutions"}
              </span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-8">
              {t('graphics.drive_results') || "That Drive Results"}
            </h3>
          </motion.div>

          <motion.div 
            className="my-8 sm:my-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl mx-auto">
              {t('graphics.description') || "From brand identity to digital graphics, I create compelling visual designs that communicate your message effectively and leave lasting impressions."}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 mb-12 sm:mb-16">
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
          </div>

          <motion.div 
            className="flex justify-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button 
              onClick={scrollToContact}
              className="gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[56px] touch-manipulation"
            >
              <VideoIcon className="size-5" />
              {t('graphics.book_consultation') || "Book Design Consultation"}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Gallery Section - Completely Fixed */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {designImages.map((imageUrl, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => openModal(imageUrl)}
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img
                  src={imageUrl}
                  alt={`Design work ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Premium Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-6xl w-full h-[95vh] p-0 bg-black/95 backdrop-blur-xl border-none rounded-2xl overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>{t('graphics.portfolio_image') || "Design Portfolio Image"}</DialogTitle>
          </VisuallyHidden>
          
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <DialogClose className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm">
              <X className="h-6 w-6 text-white" />
            </DialogClose>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Image Container */}
            {selectedImage && (
              <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-12">
                <motion.img
                  key={selectedImage}
                  src={selectedImage}
                  alt="Selected design work"
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Image Counter */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                  {selectedIndex + 1} / {designImages.length}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GraphicDesignSection;
