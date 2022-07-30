import React, { useContext } from 'react'
import { HotelContext } from "../../context";
import "../../App.css"
function FilterHotel() {
    const { filterDate, filterCity, city, nameCity, filterPrice } = useContext(HotelContext);
    return (
        <div className="filter-container">
            <div>
                <select
                    name="category-list"
                    id="category-list"
                    value={city}
                    onChange={(e) => filterCity(e)}
                >
                    {nameCity.map((hotel, index) => {
                        return (
                            <option key={index} value={hotel} >
                                {hotel}
                            </option>
                        )
                    })
                    }
                </select>
            </div>
            <input type="range" min="10" max="3000" onChange={(e) => filterPrice(e)} />
            <input type="date" onChange={(e) => filterDate(e)} />
        </div >
    )
}

export default FilterHotel
