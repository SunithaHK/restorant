import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function UpdateFood(){
    let{id}=useParams();
    let history=useHistory();
    let[foodName,setName]=useState("");
    let[price,setprice]=useState("");
    let[type,setType]=useState("");
    let[rating,setRating]=useState("");
    let[pic,setPic]=useState("");
    let handleUpdateFood=(e)=>{
        e.preventDefault();//to prevent reloading
        let updateFood={
           foodName,
            price,
            type,
            rating,
            pic
        }
     
     fetch("http://localhost:4000/items/"+id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(updateFood)})
     .then(()=>{
        alert(" food get updated");
        history.goBack();//redirect to previous page
     })
    }
    return (<>
    <div className="add">
           <u> <h1>UPDATE FOOD </h1></u> <hr />
            <form onSubmit={handleUpdateFood}>
            Food:
            <input type="text" value={foodName} onChange={(f)=>{setName(f.target.value)}}/><br /><br />
             Price:
             <input type="number" value={price} onChange={(f)=>{setprice(f.target.value)}}/><br /><br />
             TYPE:
             <div className="type">
             <input type="radio" name="type" value="veg" onClick={(f)=>{setType(f.target.value)}}/><label>veg</label>
             <input type="radio" name="type" value=" non-veg" onClick={(f)=>{setType(f.target.value)}}/><label>Nonveg</label><br /><br />
             </div>
             Rating:
             <input type="text" value={rating} onChange={(f)=>{setRating(f.target.value)}} /><br /><br />
             PIC:
             <input type="url" value={pic} onChange={(f)=>{setPic(f.target.value)}} /><br /><br />
             <button>update</button>
            </form>
            </div>
    </>)
}
export default UpdateFood;