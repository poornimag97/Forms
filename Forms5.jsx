import React from 'react'
import { useState } from 'react';

const Forms5 = () => {
    let [user,setUser]=useState("")
    let [pass,setPass]=useState("")
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log({user,pass});
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" id='username' onChange={(e)=>{
                setUser(e.target.value)
            } } />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id='password' onChange={(e=>{
                setPass(e.target.value)
            }
                )}/>
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Forms5