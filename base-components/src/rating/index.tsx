import React from 'react'
import { Rating as NextRating } from '@alifd/next'
import RatingProps from '@alifd/next/types/rating'

const Rating: typeof NextRating = ((props: RatingProps) => {
  return <NextRating allowClear {...props} />
}) as any

export default Rating;
    
  