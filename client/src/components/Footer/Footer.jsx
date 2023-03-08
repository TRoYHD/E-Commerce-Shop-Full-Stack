import React from 'react'
import "./Footer.scss";
const Footer = () => {
  return (
   <div className="footer">
   <div className="top">
   <div className="item">
     <h1>Categories</h1>
     <span>Women</span>
     <span>Men</span>
     <span>Shoes</span>
     <span>Accessories</span>
     <span>New Arrivals</span>

   </div>

   <div className="item">
   <h1>Links</h1>
     <span>FAQ</span>
     <span>pages</span>
     <span>Stores</span>
     <span>Compare</span>
     <span>Cookies</span>
   </div>
   <div className="item">
     <h1>About </h1>
     <span>Some text for the about page that i have no idea
      what to type even here but i will try my best for sake of mine
      </span>
   </div>
   <div className="item">
   <h1> Contact </h1>
     <span>Some text for the contact page that i have no idea 
      what to type even here but i will try my best for sake of mine
      </span>
   </div>
     </div>
     <div className="bottom">
      <div className="left">
        <span className="logo">Yazanstore</span>
        <span className="copyright"> © copyright 2023. All Rights Reserved
        </span>
      </div>
      <div className="right">
        <img src="/img/payment.png" alt="" />
      </div>
     </div>
   </div>
  )
}

export default Footer
