import React,{useRef} from "react";
const Forms3=()=>{
    let userRef=useRef()
    let passRef=useRef()
     let handleSubmit=(e)=>{
         e.preventDefault()
         let username=userRef.current.value
         let password=passRef.current.value
        
     }
    return(
        <div>
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" id="username" ref={userRef} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" ref={passRef} />
        <br />
        <button>Submit</button>
        </form>
        </div>
    )
}
export default Forms3