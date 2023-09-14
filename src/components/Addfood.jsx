 import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom";
const Addfood = () => {
    let history=useHistory();
    let name=useRef();
    let price=useRef();
    let rating =useRef();
    let picture=useRef();

    let handleAddFood=(e)=>{
        e.preventDefault();
        let newFood={
           foodName:name.current.value,
            price:price.current.value,
            type:"",
            rating:rating.current.value,
            pic:picture.current.value
        }
     let options=document.getElementsByName("TYPE");
     for(let i=0; i<options.length;i++)
     {
        if(options[i].checked)
        {
            newFood.type=options[i].value;
        }
     }
     fetch("http://localhost:4000/items",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(newFood)})
     .then(()=>{
        alert("new food added");
        history.goBack();//redirect to previous page
     })
    }
     
    return ( 
        <>
        <div className="add">
           <u> <h1>ADD FOOD </h1></u> <hr />
            <form onSubmit={handleAddFood}>
            Food:
            <input type="text" ref={name} /><br /><br />
             Price:
             <input type="number" ref={price}/><br /><br />
             TYPE:
             <div className="type">
             <input type="radio" name="TYPE" value="veg"/><label>veg</label>
             <input type="radio" name="TYPE" value=" non-veg"/><label>Nonveg</label><br /><br />
             </div>
             Rating:
             <input type="text" ref={rating} /><br /><br />
             PIC:
             <input type="url" ref={picture} /><br /><br />
             <button>ADD</button>
            </form>
            </div>
            </> 
    );
}
 
export default Addfood;