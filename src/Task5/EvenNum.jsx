import React from 'react'

// Logical && Operator


function EvenNum() {
    const arr = [1, 9, 4];
    return (
        <div>
            {arr.map((value) => {
                return (
                    value % 2 === 0 && <h1>The even number from array is: {value}</h1>
                );
            })}
        </div>
    )
}

export default EvenNum