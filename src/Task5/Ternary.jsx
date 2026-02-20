import React from 'react'

// Ternary operator

function Ternary() {
    const arr = [1, 2, 6, 7, 9, 10];
    return (
        <div>
            {arr.map((value) => {
                return (
                    value % 2 === 0 ? <h1>{value} - Even number</h1> : <h1>{value}
                        - Odd number</h1>
                );
            })}
        </div>
    )
}

export default Ternary