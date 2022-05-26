import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, incrementByAmount} from './CounterSlice'

const Counter = () => {
    // const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.value)
    // const increment = () => setCount(currentCount => currentCount + 1)
    // const decrement = () => setCount(currentCount => currentCount - 1)
    // const incrementBy = (amount) => setCount(currentCount => currentCount + amount)
    if (count.status === "pending") return <h2>Loading...</h2>
    return (
        <div>
            <h2>Counter</h2>
            <p>Current Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment By 5</button>
        </div>
    )
}

export default Counter