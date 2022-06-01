import React from 'react'
import {increment, decrement, reset, incrementByAmount, fetchRandomDogImageAsync} from './CounterSlice'
import {useSelector, useDispatch} from "react-redux"
import "./Counter.css"

const Counter = () => {
    // const [count, setCount] = useState(0)
    const count = useSelector(state => state.counter.value)
    const image = useSelector(state => state.counter.image)
    const status = useSelector(state => state.counter.status)

    const dispatch = useDispatch()
    // const increment = () => setCount(currentCount => currentCount + 1)
    // const decrement = () => setCount(currentCount => currentCount - 1)
    // const incrementBy = (amount) => setCount(currentCount => currentCount + amount)

    return (
        <div className={status === "idle" ? "green" : "red"}>
            <h2>Counter</h2>
            <p>Current Count: {count}</p>
            <img src={image || window.location.origin + "/logo192.png"} alt="An animal or React's logo" /><br />
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment By 5</button>
            <button onClick={() => dispatch(fetchRandomDogImageAsync())}>Fetch doggo</button>
        </div>
    )
}

export default Counter