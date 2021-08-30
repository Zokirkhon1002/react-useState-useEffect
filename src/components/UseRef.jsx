import React, { useEffect, useRef} from "react";


const UseRef = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
      <div className="App app2">
        <h1>UseRef</h1>
        <input type="text" className="name" ref={inputRef} placeholder="Ismingizni kiriting..." />
        <button onClick={handleClick} className="info">
          Click
        </button>
      </div>
    );
}
export default UseRef;