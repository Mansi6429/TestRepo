import React from 'react'

function Home(props) {
    return (
        <div className='text-4xl h-35 bg-emerald-100 text-blue-950 text-center font-bold mt-2'>Heyyy!!!!
            <h1 className='text-2xl text-rose-900 mt-6'>My Name is: {props.name}<br></br>  My Age is: {props.age} </h1>
        </div>
    )
}


export default Home
