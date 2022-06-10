import React from 'react'
import './body.css'

const Body = () => {
  return (
   <div className="mainBody">
     <div className="intro">
       <div className="introContent">
        <h1>Make remote work</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste amet libero modi praesentium rem tempore provident 
     animi atque itaque eius ex reprehenderit perspiciatis, excepturi in ut aut voluptatum, nemo repellat.</p>
       <button>Learn more</button>
       </div>
     </div>
     <div className="rightImage"> 
     <img src="https://th.bing.com/th/id/OIP.yiLz-fQGFSx6QJjKp8ZLzQHaFS?pid=ImgDet&w=800&h=571&rs=1" alt="" />
     </div>
     <div className="fontIcons">
     <div className="fontItem">
     <i className='fas fa-phone-alt'> Call</i>
     <i class='fas fa-video'> Video</i>
     <i class='fas fa-smile'> Emoji</i>
     <i class='fas fa-quote-left'> Quoet</i>
     </div>
     </div>
     
   </div>
   
  )
}

export default Body