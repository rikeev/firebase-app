export function Header() {
    function login(){
      console.log("Login")
    }
    function register(){
      console.log("Register")
    }
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <button onClick={login}>Войти</button>
        <button onClick={register}>Зарегестрироваться</button>
      </ul>
    )
  }