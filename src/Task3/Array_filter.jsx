import React from 'react'

function Array_filter() {
    const price = [1, 2, 3, 4, 5]
    const newArray = price.filter((num) => {
        if (num === 3) {
            return false;
        }
        else {
            return true;
        }
    })
    return (
        <>
            <div>Array Filter</div>
            <div>{
                newArray.map((index) => <h1>{index}</h1>)
            }</div>
        </>
    )
}

export default Array_filter