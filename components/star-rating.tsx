import { Star, StarHalf } from "lucide-react"

interface StarRatingProps {
  rating: number
  size?: number
}

export default function StarRating({ rating, size = 16 }: StarRatingProps) {
  // Convert rating to array of full, half, or empty stars
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} className="text-yellow-400 fill-yellow-400" size={size} />
        } else if (i === fullStars && hasHalfStar) {
          return <StarHalf key={i} className="text-yellow-400 fill-yellow-400" size={size} />
        } else {
          return <Star key={i} className="text-gray-300" size={size} />
        }
      })}
    </div>
  )
}
