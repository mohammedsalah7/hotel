import React, { useContext } from 'react'
import { HotelContext } from "../../context";

function MyBooking() {
    const { Booking } = useContext(HotelContext);
    const arr = [].concat.apply([], Booking)
    return (
        <>{
            arr?.map((hotel, index) => {
                return (
                    <div key={index} className="container">
                        <img src={hotel.img} alt="test" className="img" />
                        <span>{hotel.name}</span>
                        <span>{hotel.price}</span>
                    </div>
                )
            })
        }

        </>
    )
}

export default MyBooking
