import React from "react";
import Edit from "./Edit";
import Home from "./Home";
import List from "./List";
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
function Card(){
    const[states, setStates] = useState(true)
console.log(states)
 const state = useSelector((state) => state)
const isEdit=state.cart.isEdit
console.log("iiii",isEdit)

setStates(isEdit)
    return(
        <div>
            <div className='row1 container'>
         { states ? <div className='col-61'><Home /></div>:<div className='col-6'><Edit /></div>}

          <div className='col-61'><List /></div>
        </div>
        </div>
    )
}
export default Card