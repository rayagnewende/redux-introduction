import React  from 'react'

import "./Counter.css"; 

const Counter = () => {
  
    return (
        <div className="Counter">
            <h1>Counter</h1>
            <p>0</p>
            <div className="options">
                <button className="btn btn-primary"  >diminuer</button>
                <button className="btn btn-primary" >initialiser</button>
                <button className="btn btn-primary" >augmenter</button>
            </div>
        </div>
    )
} 



export default  Counter; 
