import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/crard"
import FilterHotel from "../../components/filter"
import { HotelContext } from "../../context";
import "./../../App.css"


function Home() {
    const { results, value, handelSearch } = useContext(HotelContext);
    console.log(results)

    return (
        <>
            <ul>
                <li><Link to="/mybooking">my booking</Link></li>
            </ul>
            <div className="conatiner-home">
                <input type="text"
                    placeholder="Search"
                    value={value}
                    onChange={handelSearch} />
                <FilterHotel />
                <Card />

            </div>

        </>
    )
}

export default Home
