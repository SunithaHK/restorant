import { useEffect, useState } from "react";
import  Foodlist from "./Foodlist";
import { Link } from "react-router-dom";

const Home = () => {
   
       
    let[items,setItems] = useState(null )
    let[pending,setPending] = useState(true )
    let[error,setError] = useState(null )
    useEffect(()=>{
        setTimeout(()=>{
         fetch("http://localhost:4000/items")

            .then((response)=>{
            if(response.ok===true){
                return(response.json())
            }
            else{
                  throw Error("data not found search for other website")
            }
            })
            .then((data)=>{ setItems(data);setPending(false)})
            // .catch((error)=>{ console.log("error") })//it will execute when we kill server databse port ,..
            .catch((err)=>{setError(err.message); setPending(false)})
        },3000 )
        
    },[])
 return ( 
        <div className="home">
            {error && <h1>{error}</h1>}
         {pending&&<h1>loadig...........</h1>}
         {/* instead of h1,take one div make design*/}
           {items && < Foodlist item={items}title="All food"/>}
           <Link to="/signup">goto signup</Link>
        </div>
     );
 }
 
export default Home;