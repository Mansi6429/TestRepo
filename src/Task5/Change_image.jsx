import React from 'react'
import { useState } from 'react'
import img1 from "./a1.png";
import img2 from "./a2.png";

function Change_image() {
    const [image, setImage] = useState(img1);


    function changeimage() {
        setImage(img2);
    }

    return (
        <div className='place-items-center my-34 rounded-2xl'>
            <div className=' bg-gray-400 text-center rounded-2xl border-2 border-white'>
                <h1 className='px-7 pt-5 text-3xl font-bold text-white'>Change Image</h1>
                <div className='place-items-center p-1'>
                    <img src={image} className='h-40 w-70 m-4'></img>
                    <button onClick={changeimage} className='hover:scale-105 rounded-2xl bg-gray-300 px-2.5 p-1 m-4 hover:bg-gray-200'> Change Image </button>
                </div>
            </div>
        </div>
    )
}

export default Change_image