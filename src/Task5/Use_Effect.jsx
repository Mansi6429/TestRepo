import React, { useEffect, useState } from 'react'

function Use_Effect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
    })
    return (
        <div>
            <h1>The counter value is: {count} </h1>
        </div>
    )
}

export default Use_Effect