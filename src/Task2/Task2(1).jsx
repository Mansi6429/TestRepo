import React from 'react'
import Taskcomponent1 from './Taskcomponent1'

function Task21() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 place-items-center p-10'>
            <Taskcomponent1 img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqiahQlfsj9RRXANieQG_Zpk_8azfcIio7fQ&s"
                Description="Blaupunkt 139 cm(55 inch) QLED Ultra H ..."
                Discount_price="Just Rs. 34,499*"
                original_price="Rs. 39,999"
                Prev_price="Rs. 59,999"
            />

            <Taskcomponent1 img src="https://m.media-amazon.com/images/I/81F+u+eceiL._AC_UF1000,1000_QL80_.jpg"
                Description="SAMSUNG Crystal 4K 163 cm (65 inch) U..."
                Discount_price="Just ₹72,499*"
                original_price="₹72,990"
                Prev_price="₹1,16,900" />

            <Taskcomponent1 img src="https://m.media-amazon.com/images/I/717FP7NWaNL._AC_UF1000,1000_QL80_.jpg"
                Description="Vu 139 cm (55 inch) QLED Ultra HD (4K) ...."
                Discount_price="Just ₹38,499*"
                original_price="₹40,999"
                Prev_price="₹65,000" />

            <Taskcomponent1 img src="https://m.media-amazon.com/images/I/712cLM8kq0L._AC_UF1000,1000_QL80_.jpg"
                Description="LG UQ7500 164 cm (65 inch) Ultra HD (4..."
                Discount_price="Just ₹75,490*"
                original_price="₹77,999"
                Prev_price="₹1,14,990" />

            <Taskcomponent1 img src="https://rukmini1.flixcart.com/image/1500/1500/xif0q/television/d/3/z/-original-imagu436cudumxet.jpeg?q=70"
                Description="Mi Q1 189.34 cm (75 inch) QLED Ultra H..."
                Discount_price="Just ₹1,37,499*"
                original_price="₹1,44,999"
                Prev_price="₹1,99,999" />

            <Taskcomponent1 img src="https://rukmini1.flixcart.com/image/1500/1500/kuwzssw0/television/u/i/r/u-series-65-u1s-65uc1a00-oneplus-original-imag7xtnmnkyz7je.jpeg?q=70"
                Description="OnePlus U1S 164 cm (65 inch) Ultra HD (..."
                Discount_price="Just ₹57,499*"
                original_price="₹59,999"
                Prev_price="₹69,999" />

        </div>
    )
}

export default Task21