import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Foodlist from "./Foodlist";

function Search(){
    let {int}=useParams();
    console.log(int);
 let [values,setValues]=useState(null);
 useEffect(()=>{
 let data=fetch("http://localhost:4000/items");
 data.then((response)=>{return response.json()}).then((datas)=>{setValues(datas)})
},[]);
    return(<div>
    {values!=null && <Foodlist item={values.filter((v1)=>{return v1.foodName.toUpperCase().includes(int.toUpperCase())})}/>}
    </div>)
}
export default Search;