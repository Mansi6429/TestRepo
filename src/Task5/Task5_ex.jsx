import React, { useEffect, useState } from 'react'

function Task5_ex() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]
    );
    return (
        <div className='place-items-center my-50'>
            <div className='' >
                <button onClick={() => setCount((prevCount) =>
                    prevCount + 1)} className='bg-blue-100 h-fit w-50 text-center p-7 border rounded-3xl font-bold'>
                    Click {count} times{" "}
                </button>
            </div>
        </div >
    )
}

export default Task5_ex