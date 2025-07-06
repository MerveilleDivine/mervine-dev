
"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Carousel3D } from "./Carousel3D"
import { ImageOverlay } from "./ImageOverlay"
import { designImages } from "@/data/designImages"

function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState<string | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()
  const cards = useMemo(() => designImages, [])

  useEffect(() => {
    console.log("Design portfolio loaded:", cards)
  }, [cards])

  const handleClick = (imgUrl: string) => {
    setActiveImg(imgUrl)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveImg(null)
    setIsCarouselActive(true)
  }

  // Global click handler to close image when clicking anywhere
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      if (activeImg) {
        const target = e.target as HTMLElement
        // Check if the click is not on the image or its container, and not on carousel images
        if (!target.closest('[data-gallery-image]') && !target.closest('.carousel-image')) {
          handleClose()
        }
      }
    }

    if (activeImg) {
      // Use a small delay to prevent immediate closure when opening
      const timeoutId = setTimeout(() => {
        document.addEventListener('click', handleGlobalClick)
      }, 100)
      
      return () => {
        clearTimeout(timeoutId)
        document.removeEventListener('click', handleGlobalClick)
      }
    }

    return () => {
      document.removeEventListener('click', handleGlobalClick)
    }
  }, [activeImg])

  return (
    <motion.div layout className="relative">
      <ImageOverlay activeImg={activeImg} onClose={handleClose} />
      <div className="relative h-[280px] sm:h-[380px] md:h-[450px] lg:h-[420px] w-full overflow-hidden carousel-image">
        <Carousel3D
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel };
