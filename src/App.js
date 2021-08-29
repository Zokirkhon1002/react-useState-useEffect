import React, { useState, useEffect } from "react";
import "./App.css";
import Clicker from "./components/Clicker";

export default function App() {
  const [ isClicker, setClicker ] = useState(true);

  useEffect(() => {
    console.log('DidMount', isClicker);

    return ()=> console.log('See you again')
  }, [isClicker]);

 return(
   <div>
     <h1>React App</h1>
     <button className="blue" onClick={() => setClicker(!isClicker)}>Toggle Clicker</button>
      {isClicker && <Clicker />}
   </div>
 )
}
