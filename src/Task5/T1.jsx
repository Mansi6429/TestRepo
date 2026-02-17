import React from 'react'
import { useState } from 'react'


function T1() {
    const [num, setNum] = useState(0);

    function update() {
        setNum(num + 1);
    };
    return (
        <div className='place-items-center my-50'>
            <div className='bg-gray-400 rounded-2xl h-fit w-fit  text-center'>
                <h1 className=' text-3xl p-3 m-2 font-bold'>Change Value:</h1>
                <button onClick={update} className='border-2 rounded-xl p-2 place-items-center m-3 bg-gray-300'>Click Me!!</button>
                <p className='p-3 m-2'><h1>The Value is: {num}</h1></p>
            </div>
        </div>
    )
}

export default T1