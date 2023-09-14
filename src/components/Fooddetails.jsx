
import { Link } from "react-router-dom/cjs/react-router-dom";
import UpdateFood from "./updateFood";
// const Fooddetails = () => {
//     return ( <div><h1>displaying food details</h1></div> );
// }
 
// export default Fooddetails;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Fooddetails= () => {

let {id}=useParams();
// here id same as in app.js fooddetails 17 line
let[items,setItems] = useState(null )
    let[pending,setPending] = useState(true )
    let[error,setError] = useState(null )
    useEffect(()=>{
        setTimeout(()=>{
         fetch("http://localhost:4000/items/"+id)

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
         {pending&&<h1>loadig...........</h1>}//instead of h1,take one div make design//
           {/* {items && < Foodlist item={items}title="All food"/>}//prop concept */}
           {items&& <div className="food-details">
           
                <img src={items.pic} alt="food" />
                <h1>Food -{items.foodName}</h1>
                <h2>Price -{items.price}</h2>
                <h3>Rating -{items.rating}</h3>
                <h3 className={items.type==="Veg"? "veg":"non-veg"}>Category-{items.type}</h3>
             <Link to={`/updateFood${items.id}`}>  <button>updateFood</button></Link> 
                
            </div>}
           
        </div>
     );
 }
 
export default Fooddetails;