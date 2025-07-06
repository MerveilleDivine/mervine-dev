"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

// Design portfolio images - actual graphic design work by Mervine
const designImages = [
  "/lovable-uploads/8c115d87-4e36-47ce-904f-fceb617a3ff7.png", // Norland Conference poster
  "/lovable-uploads/ab60d223-6edb-41c1-a157-f69c9bbbe88e.png", // Study in Turkey poster
  "/lovable-uploads/dad5665c-f90e-491e-a1e7-b89f8fe6c7af.png", // Sole Theory shoe ad (white)
  "/lovable-uploads/d30a4268-b6cd-4aa6-b4ef-2e6aad897d92.png", // Study in Canada poster
  "/lovable-uploads/f5b642a6-39d8-4f45-894a-3fe385751aad.png", // Study in Luxembourg poster
  "/lovable-uploads/85709b60-38c5-487f-aca7-2bc4f92d3138.png", // Go Forward travel consulting (French)
  "/lovable-uploads/be13c4b9-44c9-4ed3-b8f6-fa48299dd518.png", // Go Forward travel consulting (English)
  "/lovable-uploads/b9f9dc05-3f85-4ddd-b9a6-2cbb84f2554d.png", // Sole Theory shoe ad (black)
  "/lovable-uploads/8392830d-adba-4145-8ad1-84cbe4f5a0d2.png", // Sole Theory shoe ad (green)
  "/lovable-uploads/73b1b23b-718f-4d8b-a744-61b6114336a4.png", // Biloko ya Congo na Biso food poster
];

const duration = 0.15
const transition = { duration, ease: "easeOut" as const }
const transitionOverlay = { duration: 0.5, ease: "easeOut" as const }

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (imgUrl: string, index: number) => void
    controls: any
    cards: string[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1400 : 1800
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    return (
      <div
        className="flex h-full items-center justify-center bg-transparent"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((imgUrl, i) => (
            <motion.div
              key={`key-${imgUrl}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-transparent p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={(e) => {
                e.stopPropagation()
                handleClick(imgUrl, i)
              }}
            >
              <motion.img
                src={imgUrl}
                alt={`Design work ${i + 1}`}
                layoutId={`img-${imgUrl}`}
                className="pointer-events-none w-full rounded-xl object-cover aspect-square shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0 }}
                layout="position"
                animate={{ opacity: 1 }}
                transition={transition}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

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

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Only close if clicking on the overlay itself, not the image
    if (e.target === e.currentTarget) {
      handleClose()
    }
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
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeImg}`}
            layout="position"
            onClick={handleOverlayClick}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 m-5 md:m-36 lg:mx-[19rem] rounded-3xl backdrop-blur-xl cursor-pointer"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.img
              layoutId={`img-${activeImg}`}
              src={activeImg}
              className="max-w-full max-h-full rounded-lg shadow-2xl cursor-pointer"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              onClick={handleClose}
              data-gallery-image
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: "easeOut",
              }}
              style={{
                willChange: "transform",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[280px] sm:h-[380px] md:h-[450px] lg:h-[420px] w-full overflow-hidden carousel-image">
        <Carousel
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
