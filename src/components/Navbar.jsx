import food from './wine.png';
import './App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {
  localStorage.setItem("orders","[]")
  let [v,setv]=useState("");
    return ( 
        <nav>
       <div  className="logo">
      <Link to="/"> <img src={food} alt="logo" /></Link> 
        <span>ಆಹಾರ ನಿಲಯ</span>
        
       </div>
       <div className='searchbar'>
        <input type="search"  placeholder='type here' value={v} onChange={e=>setv(e.target.value)}/>
      <Link to={`/search${v}`} ><button>search</button></Link>
        </div>
       <div className="navlinks">
        {/* <a href="/">Add food</a>
        <a href="/">Orders</a> */}
        <Link to="/addfood">Add food</Link>
        <Link to="/orders">Orders</Link>
       </div>
        </nav>
     );
}
 
export default Navbar;