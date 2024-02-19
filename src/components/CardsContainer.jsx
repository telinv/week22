import React from "react";
import CardBox from "./CardBox";
import { heroes } from "./constants/Caracters";


function Card(){
    return(
        <div>
                    {
                        heroes.map((hero,index)=>{
                            return(
                               <div key={index}>
                                <CardBox hero={hero}/>
                                </div>
                            )
                        })
                    }
         </div>
    );
}
export default Card;
