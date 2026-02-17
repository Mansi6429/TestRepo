import React from 'react'
import { useState } from "react";


function T2() {
    const [num, setNum] = useState(5);

    const increment = () => {
        setNum(num + 1);
    };
    const decrement = () => {
        if (num <= 0) {
            return setNum(0);
        }
        else {
            return setNum(num - 1);
        }
    };
    return (
        <div className='place-items-center my-50'>
            <div className=' bg-rose-100 rounded-2xl'>
                <h1 className='px-7 py-10 text-3xl font-bold'>Update value:</h1>
                <div className=' flex place-content-center space-x-2 pb-10'>
                    <button onClick={decrement} className='border-2 bg-white px-2.5 pb-0.5'> - </button>
                    <h1>{num}</h1>
                    <button onClick={increment} className='border-2  bg-white px-2.5 pb-0.5'> + </button>
                </div>
            </div>
        </div>
    )
}

export default T2