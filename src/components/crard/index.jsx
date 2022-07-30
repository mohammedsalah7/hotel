import React, { useContext } from "react";
import { HotelContext } from "../../context";
import "../../App.css"
function Card({ admin, user }) {
    const { dataNew, handleDeleteHotel, handleBookineHotel } = useContext(HotelContext);

    return (
        <div className="continer-card">{

            dataNew.map((hotel, index) => {
                return (
                    <div key={index} className="card">
                        <img src={hotel.img} alt="test" className="img" />
                        <span>{hotel.name}</span>
                        <span>{hotel.price}$</span>
                        <span>Avalabel Date: {hotel.date}</span>
                        {admin || user ? <button onClick={() => handleDeleteHotel(hotel.id)}>Delet</button> : <button onClick={() => handleBookineHotel(hotel.id)}> Booking Hotel</button>}
                    </div>


                )
            })
        }
        </div>
    )
}

export default Card
