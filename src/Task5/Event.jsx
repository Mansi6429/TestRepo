import React, { useEffect, useState } from 'react'

function Event() {
    const clickHere = (a, b) => {
        alert(a + b.type);
    }

    return (
        <div className='place-items-center my-50'>
            <div>
                <button onClick={(event) => clickHere('We have just used : ', event)} className='bg-blue-100  text-center p-5 border rounded-3xl font-bold' >Click Me!</button>
            </div>
        </div>
    )
}

export default Event