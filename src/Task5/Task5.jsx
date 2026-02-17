import React, { useEffect, useState } from 'react'

function Task5() {

    const [count, setCount] = useState(0);
    const [mul, setMul] = useState(0);
    useEffect(() => {
        setMul(count * 2)
    }, [count])
    return (
        <div className='place-items-center my-25'>
            <div className=' bg-gray-100 h-fit w-90 text-center p-7 border rounded-3xl'>
                <h1 className='text-xl'>The value of count variable is: {count} </h1>
                <button onClick={() => setCount((c) => c + 1)} className='bg-gray-600 hover:bg-gray-900 hover:scale-105 text-white px-3 p-1 border rounded m-5'>Calculate</button>
                <p className='text-xl'>The result of mul is: {mul}</p>
            </div>
        </div>
    );
}

export default Task5