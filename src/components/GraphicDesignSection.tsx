
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { VideoIcon, Palette, Layers, Zap, X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { 
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer 
} from "@/components/ui/animated-gallery";
import SectionTitle from './SectionTitle';

const DESIGN_IMAGES_1 = [
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop&q=60",
];

const DESIGN_IMAGES_2 = [
  "https://images.unsplash.com/photo-1542052125323-e69ad37a47c2?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop&q=60",
];

const DESIGN_IMAGES_3 = [
  "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
];

const GraphicDesignSection = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  return (
    <section id="graphics" className="relative bg-white dark:bg-zinc-900 overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Header Section */}
      <div className="container mx-auto px-4">
        <SectionTitle title="Graphic Design Portfolio" />
        
        <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-4 sm:px-6 pt-8 sm:pt-12 text-center">
          <ContainerAnimated>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4">
              Creative{" "}
              <span className="font-light text-primary">
                Visual Solutions
              </span>
            </h2>
          </ContainerAnimated>
          
          <ContainerAnimated>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6">
              That Drive Results
            </h3>
          </ContainerAnimated>

          <ContainerAnimated className="my-6">
            <p className="text-sm sm:text-base leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto">
              From brand identity to digital graphics, I create compelling visual designs 
              that communicate your message effectively and leave lasting impressions.
            </p>
          </ContainerAnimated>

          {/* Services Grid */}
          <ContainerAnimated className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 mb-8">
            {designServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-zinc-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-primary mb-3 sm:mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 dark:text-gray-200">
                  {service.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </ContainerAnimated>

          <ContainerAnimated className="flex justify-center">
            <Button className="gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 text-sm sm:text-base">
              <VideoIcon className="size-4" />
              Book Design Consultation
            </Button>
          </ContainerAnimated>
        </ContainerStagger>
      </div>

      {/* Animated Background Blur */}
      <div 
        className="pointer-events-none absolute z-10 h-[50vh] sm:h-[70vh] w-full opacity-20"
        style={{
          background: "linear-gradient(to right, rgb(126, 105, 171), rgb(147, 51, 234), rgb(59, 130, 246))",
          filter: "blur(60px) saturate(150%)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Gallery Section */}
      <ContainerScroll className="relative h-[300vh] sm:h-[350vh]">
        <ContainerSticky className="h-screen">
          <GalleryContainer>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {DESIGN_IMAGES_1.map((imageUrl, index) => (
                <motion.img
                  key={index}
                  className="aspect-[4/5] sm:aspect-video block h-auto max-h-full w-full rounded-lg object-cover shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  src={imageUrl}
                  alt={`Design work ${index + 1}`}
                  loading="lazy"
                  onClick={() => setSelectedImage(imageUrl)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </GalleryCol>
            <GalleryCol className="mt-[-30%] sm:mt-[-50%] hidden sm:flex" yRange={["15%", "5%"]}>
              {DESIGN_IMAGES_2.map((imageUrl, index) => (
                <motion.img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-lg object-cover shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  src={imageUrl}
                  alt={`Design work ${index + 1}`}
                  loading="lazy"
                  onClick={() => setSelectedImage(imageUrl)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </GalleryCol>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2 hidden lg:flex">
              {DESIGN_IMAGES_3.map((imageUrl, index) => (
                <motion.img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-lg object-cover shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  src={imageUrl}
                  alt={`Design work ${index + 1}`}
                  loading="lazy"
                  onClick={() => setSelectedImage(imageUrl)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <DialogClose className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <X className="h-6 w-6 text-white" />
            </DialogClose>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected design work"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={() => setSelectedImage(null)}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GraphicDesignSection;
