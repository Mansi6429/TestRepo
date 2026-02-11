import React from 'react'

function Taskcomponent(props) {
    return (
        <div className='p-4 flex flex-col justify-between'>
            <div className='hover:scale-101'>
                <img src={props.src} />
            </div>
            <div className="text-center text-lg sm:text-xl mt-2">
                {props.heading}
            </div>
            <div className="text-center mt-2">
                <button className=" bg-neutral-300 hover:bg-neutral-400 transition rounded-md px-4 py-1 hover:scale-103" >
                    Explore
                </button>
            </div>
        </div>
    )
}

export default Taskcomponent