import React from 'react'
import { useGlobalfilter } from '../../context/Filtercontext'
import Gridproduct from './Gridproduct'
import Listproduct from './Listproduct'
const Sortedproduct = () => {
  const {filteredProduct ,gridview } = useGlobalfilter();

  if (gridview === true){
   return <Gridproduct productss={filteredProduct} />
  }
  if (gridview === false){
   return <Listproduct productss={filteredProduct} />
  }

  
}

export default Sortedproduct