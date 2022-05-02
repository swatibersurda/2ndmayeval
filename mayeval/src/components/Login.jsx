
import { useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios"
export const Login = () => {
   const [data,setText]=useState({

    "username":"",
    "pass":""
   });
   const [role,setrole]=useState("user");
   console.log(data)
  const handledata=(e)=>{
    console.log(e.target.value)
    if(e.target.name==="username")
    {
        setText({...data,username:e.target.value})
    }
   else if(e.target.name==="password")
    {
        setText({...data,pass:e.target.value})
    }
    
  }
        {/* On this button click make network req to find user with same username and password */}
         const x=data.username
      
       const take=({username,pass})=>{
         axios.get(`http://localhost:8080/users/${username.username}`).then((res)=>{
           
         console.log(res.data)
         })
         
          
     }
     
    return (
      <div>
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
             onChange={handledata}/>
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handledata}/>
       
        {/* On this button click make network req to find user with same username and password */}
         


        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}

       {/* <Link to ={"/oreder"}> */}
        <button className="submit" onClick={()=>{take(data)}}>Login</button>
        {/* </Link> */}
      </div>
    );
  };