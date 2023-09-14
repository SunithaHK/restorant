import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
const Foodlist = ({item, title}) => {
    //to add data to local storage in console-> application
 let[ordersId,setOrdersId]=useState([]);
 useEffect(()=>{
    let orders=localStorage.getItem("orders");
    orders=JSON.parse(orders);
    let o=orders.map((v)=>{return v.id})
    setOrdersId(o);
   console.log(ordersId);
 },[])

    let handleOrders=(id)=>{
        fetch("http://localhost:4000/items/"+id).then((response)=>response.json())
        .then((data)=>{
            let newOrder=localStorage.getItem("orders");
            console.log(newOrder);
            newOrder=JSON.parse(newOrder);
            newOrder.push(data)
            newOrder=JSON.stringify(newOrder);
            localStorage.setItem("orders",newOrder)
          
        })
      }
      let handleCancelOrder=(id)=>{
        let olderOrders=localStorage.getItem("orders");
        olderOrders=JSON.parse(olderOrders);
        let start=olderOrders.findIndex((v)=>{return v.id==id})
        console.log(olderOrders)
        olderOrders.splice(start,1);
       
        olderOrders=JSON.stringify(olderOrders);
        localStorage.setItem("orders",olderOrders)

      }
    return ( 
        <div>
            <h1>{title}</h1>
            <div className="fd">
            {
            item.map((food)=>{return(
            <div className="food" >
              {/* key={food.foodName} */}
                <a href={`/fooddetails${food.id}`}>
                <img src={food.pic} alt="" />
                <h2>{food.foodName}</h2>
                <h4>{food.price}</h4>
                </a>
               {!ordersId.includes(food.id)&&<button onClick={()=>{handleOrders(food.id)}}>Orderfood</button>}
               {ordersId.includes(food.id)&& <button onClick={()=>{handleCancelOrder(food.id)}}> remove from Order</button>}
                </div>
             )})
            }
            </div>
        </div>
     );
}
 
export default Foodlist;