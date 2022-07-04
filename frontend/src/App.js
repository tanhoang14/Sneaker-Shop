import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from './Home/HomePage';
import SneakersPage from './Sneakers/SnearkersPage';
import CartPage from './Cart/CartPage';
import CartPayment from './Payment/CartPayment';
import NavBar from './NavBar/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {CartContext} from "./Contexts/CartContext"


function App() {
  const [allSneakers,setAllSneakers]=useState([]);
  const [myCart,addtoCart] = useState([{}])
  const [total,setTotal] =useState(0)
  useEffect(()=>{
    async function getData(){
      const res = await axios.get("https://sneaker-app-severs.herokuapp.com/");
      console.log(res)
      return res;
    }
    getData().then((res)=> setAllSneakers(res.data));
    getData().catch((err)=>console.log(err));
  },[])
  return (
      <CartContext.Provider value= {{myCart,addtoCart,total,setTotal}}>
        <Router>
          <NavBar/>
          <div className='page-container'>
            <Routes>
              <Route path="/" element ={<HomePage/>}/>
              <Route path="/sneakers" element ={<SneakersPage allSneakers={allSneakers}/>}/>
              <Route path="/checkout" element ={<CartPage/>}/>
              <Route path="/payment" element ={<CartPayment/>}/>
            </Routes>
          </div>
        </Router>
    
 
      </CartContext.Provider>
      
  );
}

export default App;
