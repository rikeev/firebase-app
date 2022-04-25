import { useState } from "react"


export default function LoginForm() {
    function incriment(){
         console.log(email, password)
    }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   return (
        <div>
            <input onChange={(evt)=>{setEmail(evt.target.value)}} type="text" value={email}></input>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="text" value={password}></input>
            <button onClick ={incriment}>Login</button>
        </div>
   )    
}