import { useState } from "react"
export function RegisterForm() {
    function Check(){
         if (password === checkpassword) {
             console.log ("OK")
         }
    }
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [password, setPassword] = useState("")
    const [checkpassword, setCheckPassword] = useState("")
   return (
        <div>
            <input onChange={(evt)=>{setName(evt.target.value)}} type="text" value={name}></input>
            <input onChange={(e)=>{setSurname(e.target.value)}} type="text" value={surname}></input>
            <input onChange={(evt)=>{setPassword(evt.target.value)}} type="text" value={password}></input>
            <input onChange={(e)=>{setCheckPassword(e.target.value)}} type="text" value={checkpassword}></input>
            <button onClick ={Check}>Register</button>
        </div>
   )    
}