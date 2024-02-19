import React from 'react';
import StarRating from './StarRating';


function CardBox({hero}) {
  return (
    <div className="card-container" style={{ display: "flex", flexDirection: "row" , flexWrap: "wrap"}}>
    <div className="card-body">
    <div><h4 className="card-title">{hero.name}</h4>
    <p className="card-text">Вселенная: {hero.universe}</p>
    <p className="card-text">Альтер эго: {hero.alterego}</p>
    <p className="card-text">Род деятельности: {hero.occupation}</p>
    <p className="card-text">Друзья: {hero.friends}</p>
    <p className="card-text">Суперсилы: {hero.superpowers}</p>
    <img src={hero.url} alt={hero.name}/> </div>
    <StarRating/>
    </div>
    </div>
  )
}

export default CardBox