import React from 'react'
import './sorting.css'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridOnIcon from '@mui/icons-material/GridOn';
import { useGlobalfilter } from '../../context/Filtercontext';
const Sortingitem = () => {
const {gridview,setgrid,setlist,filteredProduct,sorting}=useGlobalfilter();

  return (
   <div className="sortingitem">
   <div className="listgrid">
   <div className="gridviews">
   <button onClick={setgrid} className={ gridview ?  " active gridcolor":"gridcolor" }  >
   <GridOnIcon   />
   </button>
   
   
   </div>

   <div className="listviews ">
   <button className={! gridview ?  " active gridcolor":"  gridcolor" } onClick={setlist}  >
   <FormatListBulletedIcon />
   </button>
   
   
   </div>
   
   </div>
   <div className="numberspfproduct">
     <p>  {filteredProduct.length} products  </p>
   </div>
   <div className="sortdata">
    <form action="">
    <label htmlFor="sort">Sort</label>
    <select name="sort" id="sort" onClick={sorting} >
    <option value="lowest">Lowest Price</option>
    <option value="highest">Highest Price</option>
    <option value="a-z">a-z</option>
    <option value="z-a">z-a</option>
    </select>
    </form>
   </div>
   </div>
  )
}

export default Sortingitem