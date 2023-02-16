import React from 'react'
import axios from "axios";

import Featureproduct from '../featureproduct/Featureproduct';
import Header from '../header/Header';
import ContactUs from '../contactUs/ContactUs';
const Home = () => {
 
  return (
    <div>
      <Header />
    <Featureproduct />
    {/* <ContactUs /> */}

    </div>
  )
}

export default Home
