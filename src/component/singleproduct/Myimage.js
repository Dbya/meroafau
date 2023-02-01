import React ,{useState} from 'react'
import './myimage.css'
const Myimage = ({imagess=[]}) => {
    console.log(imagess);
 const[mainimage,setMainimage] =useState(imagess[0]);

  return (
    <div>
    <div className="mainimage">
      <div className="allimg">
      {imagess.map((curElem)=>{
        return<>
        <img src={curElem} alt=""  onClick={()=>setMainimage(curElem)}  />
        
        </>
      })}
      </div>
      <div className="singleimg">
     <img src={mainimage} alt="" />

      </div>
      </div>
    </div>
  )
}

export default Myimage
