import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const Star = ({stars}) => {
 const starratings= Array.from({length:5},(elem,index)=>{
     let  number = index + 0.5;
  return <span key={index}>
     {stars >= index+1 ? <StarIcon /> : stars >= number ? <StarHalfIcon /> : <StarBorderIcon /> }
  </span>

 })

  return (
    <div className="star">
       {starratings}
    </div>
  )
}
