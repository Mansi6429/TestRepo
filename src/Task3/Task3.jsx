import React from 'react'
function Task3() {
    const images = [
        {
            image: "./src/Task3/Products_img/t1.png",
            category: "Television",
            index: 1,
        },
        {
            image: "./src/Task3/Products_img/t2.png",
            category: "Television",
            index: 2,
        },
        {
            image: "./src/Task3/Products_img/t1.png",
            category: "Television",
            index: 1,
        },
        {
            image: "./src/Task3/Products_img/t2.png",
            category: "Television",
            index: 2,
        },
        {
            image: "./src/Task3/Products_img/m1.jpg",
            category: "Mobile",
            index: 1,
        },
        {
            image: "./src/Task3/Products_img/m2.jpg",
            category: "Mobile",
            index: 2,
        },
        {
            image: "./src/Task3/Products_img/m1.jpg",
            category: "Mobile",
            index: 1,
        },
        {
            image: "./src/Task3/Products_img/m2.jpg",
            category: "Mobile",
            index: 2,
        },
        {
            image: "./src/Task3/Products_img/a1.png",
            category: "Air_conditioner",
            index: 1,
        },
        {
            image: "./src/Task3/Products_img/a2.png",
            category: "Air_conditioner",
            index: 2,
        },
        {
            image: "./src/Task3/Products_img/a1.png",
            category: "Air_conditioner",
            index: 1,
        },
        {
            image: "./src/Task3/Products_img/a2.png",
            category: "Air_conditioner",
            index: 2,
        }
    ]
    const tv = images.filter((item) => item.category === "Television");
    const mobile = images.filter((item) => item.category === "Mobile");
    const ac = images.filter((item) => item.category === "Air_conditioner");

    return (
        <>
            <div className='min-h-screen place-items-center bg-gray-100'>
                <div className='p-5 font-bold text-3xl text-shadow-emerald-950 text-shadow-lg/40 mb-3'>Product Page</div>
                {/* {TV section} */}
                <div className='bg-gray-300 place-items-center rounded-2xl shadow-gray-500 shadow-lg mb-8'>
                    <h2 className='text-xl pt-3.5 font-bold'>Television</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 m-2 '>
                        {tv.map((im) => (
                            <div className='place-items-center  '><img src={im.image} className='h-40 w-60' /> <h1 className='p-0.5 text-lg'>{im.category}</h1><h1 className='text-green-700 font-bold'> {im.index}</h1> </div>
                        ))
                        }
                    </div>
                </div>


                <div className='place-items-center '>
                    {/* <div className='m-5 font-bold text-2xl '>Product Page</div> */}
                    {/* {mobile section} */}
                    <div className='bg-gray-300 place-items-center rounded-2xl shadow-gray-500 shadow-lg mb-8'>
                        <h2 className='text-xl pt-3.5  font-bold'>Mobile</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 m-2'>
                            {mobile.map((im) => (
                                <div className='place-items-center  '><img src={im.image} className='h-40 w-60' /> <h1 className='p-0.5 text-lg'>{im.category}</h1><h1 className='text-green-700 font-bold'> {im.index}</h1> </div>
                            ))
                            }
                        </div>
                    </div>
                </div >


                <div className='place-items-center '>
                    {/* <div className='m-5 font-bold text-2xl '>Product Page</div> */}
                    {/* {ac section} */}
                    <div className='bg-gray-300 place-items-center rounded-2xl shadow-gray-500 shadow-lg mb-8'>
                        <h2 className='text-xl pt-3.5 font-bold'>Air_Conditioner</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 m-2'>
                            {ac.map((im) => (
                                <div className='place-items-center  '><img src={im.image} className='h-40 w-60' /> <h1 className='p-0.5 text-lg'>{im.category}</h1><h1 className='text-green-700 font-bold'> {im.index}</h1> </div>
                            ))
                            }
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}
export default Task3

