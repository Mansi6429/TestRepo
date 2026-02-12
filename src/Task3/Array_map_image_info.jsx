import React from 'react'

function Array_map_image_info() {
    const images = [
        {
            image: "https://images.unsplash.com/photo-1661950159450-566edc48747d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            text: "Hey!!!!",
            price: "10,000",
        },
        {
            image: "https://images.unsplash.com/photo-1661950159450-566edc48747d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            text: "How are you!!!!",
            price: "80,000",
        }
    ]

    return (
        <>
            <div className='place-items-center'>
                <div>Array_map_image_info</div>
                <div className='flex'>
                    {images.map((im) => <div className='place-items-center p-2'><img src={im.image} className='h-40 w-60' /> <h1>{im.text}</h1><h1> {im.price}</h1> </div>)}
                </div>
            </div>
        </>
    )
}

export default Array_map_image_info