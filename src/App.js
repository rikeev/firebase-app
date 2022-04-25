import React from 'react';
import {Header} from './components/header.js';
import {Footer} from './components/footer.js';
import {LoginForm} from './components/loginForm'; 

function App() {
  let [counter, setCounter] = React.useState(10);
  React.useEffect(()=>{
    console.log("start component")
    let baseURL = 'https://api.sampleapis.com/coffee/hot';
    fetch(baseURL)
    .then(resp => resp.json())
    .then(data => console.log(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          hello world
        </p>
        <Header />
        <Footer />
        <LoginForm />
        <p>{counter}</p>
        <button onClick={()=> setCounter(counter+1)}>+</button>
        <button onClick={()=> setCounter(counter-1)}>-</button>
      </header>
    </div>
  );
}

export default App;
