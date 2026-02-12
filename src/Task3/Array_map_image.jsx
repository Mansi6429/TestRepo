import React from 'react'

function Array_map_image() {
    const image = ["https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww"]
    return (
        <>
            <div className='place-items-center'>
                <div>Array_map_image</div>
                <div className='flex'>
                    {image.map((im) => <div className='p-2 h-50 w-60'><img src={im} /> </div>)}
                </div>
            </div>
        </>
    )
}

export default Array_map_image