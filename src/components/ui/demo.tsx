
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"

export function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[500px] flex flex-col justify-center space-y-4">
        <div className="p-2">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </div>
  )
}
