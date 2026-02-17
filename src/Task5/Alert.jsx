import React, { useEffect, useState } from 'react'

function Alert() {
    function clickHere() {
        alert("Hello!!!    Mansi Darji")
    }
    return (
        <div className='place-items-center my-50'>
            <div className=''>
                <button onClick={clickHere} className='bg-blue-100  text-center p-5 border rounded-3xl font-bold'>Click Me!!!!</button>
            </div>
        </div>
    )
}

export default Alert