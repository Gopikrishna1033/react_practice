import React, { useReducer } from 'react'
const initial_state={count:0};

function red(state,action){
    switch(action.type){
        case "increment":
            return {count: state.count+1};
        case "decrement":
            return {count: state.count-1};
        default:
            return state
    }
}
const Reducer = () => {
    const [state, dispatch] = useReducer(red,initial_state)
  return (
    <div>
        <p>count:{state.count}</p>
        <button onClick={()=>{dispatch({type: 'increment'})}}>+</button>
        <button onClick={()=>{dispatch({type: 'decrement'})}}>-</button>

    </div>
  )
}

export default Reducer