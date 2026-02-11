import React from 'react'

function Taskcomponent1(props) {
    return (
        <div class="p-2 flex flex-col text-center place-items-center justify-between">
            <div className='hover:scale-101'>
                <img src={props.src} className='h-40 w-80' />
            </div>
            <div class=" font-semibold p-2">{props.Description}</div>
            <div class=" text-green-600 font-semibold p">{props.Discount_price}</div>
            <div class="flex ">
                <p className='px-1 font-bold text-xl'>{props.original_price}</p>
                <p className='text-sm m-1 line-through text-gray-600'>{props.Prev_price}</p>
            </div>
        </div>
    )
}

export default Taskcomponent1