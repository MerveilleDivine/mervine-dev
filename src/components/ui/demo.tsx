
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"

export function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[450px] flex flex-col justify-center">
        <div className="p-1 sm:p-2">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </div>
  )
}
