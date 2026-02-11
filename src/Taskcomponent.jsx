import React from 'react'

function Taskcomponent(props) {
    return (
        <div className="border-2 border-neutral-400 bg-white rounded-2xl p-4 flex flex-col 
            justify-between shadow-sm hover:shadow-md">
            <div className="text-center text-lg sm:text-xl font-bold">
                {props.heading}
            </div>
            <div className="text-center text-sm sm:text-base mt-2 text-neutral-700">
                {props.content}
            </div>
            <div className="text-center mt-4">
                <button className=" bg-neutral-300 hover:bg-neutral-400 transition rounded-md px-4 py-1.5 text-sm font-medium" >
                    Apply Now
                </button>
            </div>

        </div>
    )
}

export default Taskcomponent
