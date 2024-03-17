"use client"

import { useState } from "react"

const Interactiveroute = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>this is interactiveroute</div>
            <button className="border-white border-2 px-4 py-2 rounded-xl" onClick={ () => setCount(count + 1)} >click me {count}</button>
            <button className="border-white border-2 px-4 py-2 rounded-xl" onClick={ () => setCount(count - 1)} >click me to reduce {count}</button>
        </div>
    )
}

export default Interactiveroute