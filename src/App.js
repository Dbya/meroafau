import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import NavLink from './component/navLink/NavLink';
import Home from './component/home/Home';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Featureproduct from './component/featureproduct/Featureproduct';
import Singleproduct from './component/singleproduct/Singleproduct';
import Addtocart from './component/singleproduct/Addtocart';
import Mycarts from './component/cartpage/Mycarts';
import Allproduct from './component/myallproduct/Allproduct';

function App() {
  return (
    <div className="App">
   <NavLink />
   <Routes>
   <Route path='/' exact  element={<Home />} />
   <Route path='/Contact' element={<Contact />} />
   <Route path='/singleproduct/:id' element={<Singleproduct />} />
   <Route path='/Cart' element={<Mycarts />} />
   <Route path='/product' element={<Allproduct />} />
   </Routes>
   
   <Footer />
    </div>
  );
}

export default App;
