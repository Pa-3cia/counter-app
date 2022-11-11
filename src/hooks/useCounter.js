import { useReducer } from 'react'

const initialState = { count: 0, inc: 1, dec: 1};

const reducer = (state, action) => {
    if (action.type === 'INCREMENT'){
       
        return { ...state, count: state.count + state.inc}
    }

    if (action.type === 'DECREMENT') {
        return { ...state, count: state.count - state.dec}
    }

    if (action.type === 'RESET') {
        return { count: 0, inc: 1, dec: 1};
    }

    if (action.type === 'SET_VALUE') {
        console.log("chnaged", action.payload)
        return { ...state, [action.payload.name]: action.payload.value}
    }

    return state
}
export const useCounter = () => {

    const [ state, dispatch] = useReducer(reducer, initialState)
    

    function increment() {
        dispatch({ type: 'INCREMENT'})
    }
    function setValue(value, name) {
        const payload = { value, name}
        dispatch({ type: 'SET_VALUE', payload})
    }
    function decrement() {
        dispatch({ type: 'DECREMENT'})
    }
    function reset() {
        dispatch({ type: 'RESET'})
    }

    return { count: state.count, increment, setValue, decrement, reset}
}