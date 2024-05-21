// import React from "react"

// const MyHeading  = ({name,text, price})=> {

//     // const {abb,cdd} = obj; //Destructuring

//     return (
//         <>
//         <h1>{name}</h1>
//         <MyHeadinglittle value = {price} />
//         <main>{text} </main>
//         <footer>footer</footer>
//         </>
//     )
// }
// const MyHeadinglittle  = ({value})=> <h4>Price = {value}</h4>


// export default MyHeading

// export {MyHeadinglittle}

import React from 'react'
import {Link} from "react-router-dom"


export default function Header() {
  return (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
  )
}
