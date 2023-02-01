import React from 'react'
import './allproduct.css'
import Filtered from './Filtered'
import Sortingitem from './Sortingitem'
import Sortedproduct from './Sortedproduct'
import { useGlobalfilter } from '../../context/Filtercontext'

const Allproduct = () => {

// const { filteredProduct}= useGlobalfilter();
// console.log("filtered" , filteredProduct);
  return (
    <div>
      <div className="allitem">
      <div className="filter">
      <Filtered />
      </div>
      <div className="sortandproduct">
      <div className="sort">
      <Sortingitem />
      </div>
      <div className="sortedproduct">
      <Sortedproduct />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Allproduct
