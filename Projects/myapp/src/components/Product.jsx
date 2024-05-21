import React from 'react'
// import {useParams} from "react-router-dom"

const Coin = ({name, symbol, imgSrc, price}) => {

  return (
    <div className='coin'>
      <img src={imgSrc} alt= {name}/>
      <h1>{symbol}</h1>
      <p>{name}</p>
      <h4>NRS {price*1.6}</h4>
    </div>
  )
}

export default Coin;
