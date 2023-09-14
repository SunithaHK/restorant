import { useEffect, useState } from "react";
import Foodlist from "./Foodlist";

const Orders = () => {
   
    let [order,setOrders]=useState(null);
  useEffect(()=>{
    let foodOrderd=localStorage.getItem("orders");
    foodOrderd=JSON.parse(foodOrderd);
    console.log(foodOrderd);
    setOrders(foodOrderd);
  },[])


    return ( <div>
        {/* <h1>orders added successfully</h1> */}
        {order&& <Foodlist item={order} title="foodorderd"/>}

    </div> );
}
 
export default Orders;