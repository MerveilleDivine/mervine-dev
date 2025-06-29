
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { VideoIcon, Palette, Layers, Zap, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { 
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer 
} from "@/components/ui/animated-gallery";
import SectionTitle from './SectionTitle';

// 15 high-quality design images
const DESIGN_IMAGES_1 = [
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80",
];

const DESIGN_IMAGES_2 = [
  "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1542052125323-e69ad37a47c2?w=800&auto=format&fit=crop&q=80",
];

const DESIGN_IMAGES_3 = [
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
      title: "Brand Identity",
      description: "Complete brand identity packages including logos, color schemes, and visual guidelines."
    },
    {
      icon: <Layers size={24} />,
      title: "Print Design",
      description: "Professional print materials from business cards to large format displays."
    },
    {
      icon: <Zap size={24} />,
      title: "Digital Graphics",
      description: "Web graphics, social media assets, and digital marketing materials."
    }
  ];

  const allImages = [...DESIGN_IMAGES_1, ...DESIGN_IMAGES_2, ...DESIGN_IMAGES_3];

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setSelectedIndex(allImages.indexOf(imageUrl));
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (selectedIndex + 1) % allImages.length
      : (selectedIndex - 1 + allImages.length) % allImages.length;
    
    setSelectedIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <SectionTitle title="Graphic Design Portfolio" />
        
        <ContainerStagger className="relative place-self-center px-4 sm:px-6 pt-8 sm:pt-12 text-center">
          <ContainerAnimated>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
              Creative{" "}
              <span className="font-light text-primary">
                Visual Solutions
              </span>
            </h2>
          </ContainerAnimated>
          
          <ContainerAnimated>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-8">
              That Drive Results
            </h3>
          </ContainerAnimated>

          <ContainerAnimated className="my-8 sm:my-10">
            <p className="text-base sm:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl mx-auto">
              From brand identity to digital graphics, I create compelling visual designs 
              that communicate your message effectively and leave lasting impressions.
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
              Book Design Consultation
            </Button>
          </ContainerAnimated>
        </ContainerStagger>
      </div>

      {/* Gallery Section - Fixed z-index and improved visibility */}
      <div className="relative z-20 bg-transparent">
        <ContainerScroll className="relative h-[180vh] sm:h-[200vh]">
          <ContainerSticky className="h-screen sticky top-0">
            <GalleryContainer className="gap-2 sm:gap-3 lg:gap-4">
              <GalleryCol yRange={["-15%", "10%"]} className="mt-0">
                {DESIGN_IMAGES_1.map((imageUrl, index) => (
                  <motion.img
                    key={index}
                    className="aspect-[3/4] block h-auto max-h-full w-full rounded-xl object-cover shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] relative z-10"
                    src={imageUrl}
                    alt={`Design work ${index + 1}`}
                    loading="lazy"
                    onClick={() => openModal(imageUrl)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      backgroundColor: '#f8f9fa',
                      isolation: 'isolate'
                    }}
                  />
                ))}
              </GalleryCol>
              <GalleryCol className="mt-[-20%] sm:mt-[-25%] hidden sm:flex" yRange={["10%", "-5%"]}>
                {DESIGN_IMAGES_2.map((imageUrl, index) => (
                  <motion.img
                    key={index}
                    className="aspect-[3/4] block h-auto max-h-full w-full rounded-xl object-cover shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] relative z-10"
                    src={imageUrl}
                    alt={`Design work ${index + 1}`}
                    loading="lazy"
                    onClick={() => openModal(imageUrl)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      backgroundColor: '#f8f9fa',
                      isolation: 'isolate'
                    }}
                  />
                ))}
              </GalleryCol>
              <GalleryCol yRange={["-10%", "10%"]} className="mt-0 hidden lg:flex">
                {DESIGN_IMAGES_3.map((imageUrl, index) => (
                  <motion.img
                    key={index}
                    className="aspect-[3/4] block h-auto max-h-full w-full rounded-xl object-cover shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] relative z-10"
                    src={imageUrl}
                    alt={`Design work ${index + 1}`}
                    loading="lazy"
                    onClick={() => openModal(imageUrl)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      backgroundColor: '#f8f9fa',
                      isolation: 'isolate'
                    }}
                  />
                ))}
              </GalleryCol>
            </GalleryContainer>
          </ContainerSticky>
        </ContainerScroll>
      </div>

      {/* Premium Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-6xl w-full h-[95vh] p-0 bg-black/95 backdrop-blur-xl border-none rounded-2xl overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>Design Portfolio Image</DialogTitle>
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
                  {selectedIndex + 1} / {allImages.length}
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
