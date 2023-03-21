import React,{Component,createRef} from "react";
class Forms2  extends Component{
    constructor()
    {
        super()
        this.userRef=createRef()
        this.passRef=createRef()
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let username=this.userRef.current.value
        let password=this.userRef.current.value
        console.log({username,password});

    }
    render()
    {
        return(
            <div>
                <div>
                <form action="">
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" id="username" ref={this.userRef} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" ref={this.passRef} />
        <br />
    <button>Submit</button>
    </form>
    </div>
    </div>)
    }}
    export default Forms2