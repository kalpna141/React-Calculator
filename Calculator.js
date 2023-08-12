import React,{useState} from 'react';
function Calculator(){
    return(
        <div>
            <h1>React Calculator</h1><br/>
            <input type="text" placeholder='Num 1'></input><br/>
            <input type="text" placeholder='Num 2'></input><br/>
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
        </div>
    )
}
export default Calculator;
