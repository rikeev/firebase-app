import { useState } from "react"


export function LoginForm() {
    const [email, setEmail] = useState(0)
    function incriment(){
        setEmail(email+1)
    }
    function discriment(){
        setEmail(email-1)
    }
   return (
        <div>
            <input type="text" value={email}></input>
            <input type="text" value={email}></input>
            {email}
            <button onClick={incriment}>incriment</button>
            <button onClick={discriment}>discriment</button>

        </div>
   )    
}