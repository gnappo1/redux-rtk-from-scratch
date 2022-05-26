import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(currentCount => currentCount + 1)
    const decrement = () => setCount(currentCount => currentCount - 1)
    const incrementBy = (amount) => setCount(currentCount => currentCount + amount)

    return (
        <div>
            <h2>Counter</h2>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => incrementBy(5)}>Increment By 5</button>
        </div>
    )
}

export default Counter