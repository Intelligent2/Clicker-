import React , { useState } from "react";
// import  from "react";
function App() {
  const [count , setCount ] = useState(0);
  return (
    <div className="container">
        <div className="container2">
          <div className ="card">
            <h1>Count</h1>
            <div className ="my-5">
              <h2 className = "my-5">{count}</h2>
              <div className = "button_box">
              <button className ="btn mx-2" onClick ={() => setCount(count + 1) } >+</button>
              <button className ="btn mx-3" onClick ={() => setCount(count - 1)} > - </button>
              <button className ="btn mx-4" onClick ={() => setCount(0)}disabled= {count === 0} > reset </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
