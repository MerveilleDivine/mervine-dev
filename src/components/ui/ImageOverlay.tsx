
import { motion, AnimatePresence } from "framer-motion"

const transitionOverlay = { duration: 0.5, ease: "easeOut" as const }

interface ImageOverlayProps {
  activeImg: string | null
  onClose: () => void
}

export function ImageOverlay({ activeImg, onClose }: ImageOverlayProps) {
  const handleOverlayClick = (e: React.MouseEvent) => {
    // Only close if clicking on the overlay itself, not the image
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
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
            onClick={onClose}
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
  )
}
