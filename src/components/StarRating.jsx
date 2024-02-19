import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';




function StarRating() {
    const stars = Array(5).fill(0)
    const [currentItem , setCurrentItem] = useState()
  return (
    <div style={{ display: "flex", flexDirection: "row" , justifyContent: "center"}}>
    {
        stars.map((item,index)=>{
            return(
                <div
                key={index}
                onClick={()=> setCurrentItem(index)}
                style={index <= currentItem ? {color: 'gold'} : {}}
                >
                <FontAwesomeIcon icon={faStar} />
                </div>
            )
        })
    }
    </div>
  )
}

export default StarRating