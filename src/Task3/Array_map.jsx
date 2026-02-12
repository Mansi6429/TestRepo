import React from 'react'
const price = [1, 2, 3, 4, 5, 6]

function Array_map() {
    return (
        <>
            <div>Array_map</div>
            <div>
                {
                    price.map((price) => <h1>{price}</h1>)
                }
            </div>
        </>
    )
}

export default Array_map