import React from 'react'
import { Link } from 'react-router-dom'

function Dashboared() {
    return (
        <>
            <nav>
                <li><Link to="/dashboared/home">Home</Link></li>
                <li><Link to="/dashboared/addNew">Add new Hotel</Link></li>

            </nav>

        </>
    )
}

export default Dashboared
