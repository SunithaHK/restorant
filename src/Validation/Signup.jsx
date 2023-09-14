import { useState } from "react";
import Forminput from "./Forminput";
function Signup() {
    let[values,setVa] =useState(
        {
            username:"",
            email:"",
            biethdate:"",
            password:"",
            confirmPassword:"",
        }
    )
    const inputs =  [
       {id:1, name:"username", title:"UserName", type:"text", value: values.username , required:true, error:"username should not contain any special char and should be within 5-16 chr"},
       {id:2, name:"email", title:"Email", type:"email", value: values.email, required:true, error:"invalid email"},
       {id:3, name:"birthdate", title:"Birthdate", type:"date", value: values.biethdate, required:true, error:""},
       {id:4, name:"password", title:"Password", type:"password", value: values.password, required:true, error:"password sholud contain one char,number and special char and should be contain 8 to 16 char"},
       {id:5, name:"confirmPassword", title:"Confirm-password", type:"text", value: values.confirmPassword, required:true, error:"password missmatch"}

    ]
     let handleChange =(e)=>{
        setVa({...values,[e.target.name] : e.target.value})
     }
   let handleSubmit =(e)=>{
    e.preventDefault();
    console.log(values);
   }

    return ( 
   <div className="signup">
    <h1 >SIGNUP</h1>
    <form onSubmit={handleSubmit}>
        {
            inputs.map((input)=>{return(
                    <Forminput {...input} key={input.id} handleChange={handleChange}/>
            ) })
        }
        <input type="submit" value="signup"/>
    </form>

   </div>
    
     );
}

export default Signup ;
