import React from 'react'
import Taskcomponent from './Taskcomponent'

function Task2() {
    return (
        //         <div className='card m-25 place-items-center'>
        //             <img height='200px' width='300px' src=
        // 'https://images.unsplash.com/photo-1615829253947-faef9cf73097?ixlib=rb4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit
        // =crop&w=1170&q=80'/>
        //         <p className='image'>Nature</p>
        //         </div>
        <div className='p-2 py-20 min-h-screen'>
            <div className='text-4xl font-bold text-black text-shadow-lg/20 text-center'>
                Image Gallery
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
                <Taskcomponent img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" heading="Nature" />
                <Taskcomponent img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VHJhdmVsfGVufDB8fDB8fHww" heading="Travel" />
                <Taskcomponent img src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww" heading="Animal" />
            </div>
        </div>
    )
}

export default Task2