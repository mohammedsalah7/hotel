import React, { useContext } from "react";
import { HotelContext } from "../../context";

function AddNewHotel() {
    const { name, price, image, date, handleChangeNewHotel, handelAddNewHotel } = useContext(HotelContext);

    return (
        <form onSubmit={handelAddNewHotel}>
            <input type="text"
                placeholder='Enter Name Hotel'
                value={name}
                onChange={(e) => handleChangeNewHotel(e)}
                name="name"
                id="name" />

            <input
                type="number"
                placeholder='Enter Price'
                value={price}
                onChange={(e) => handleChangeNewHotel(e)}
                name="price"
                id="price" />
            <input
                type="date"
                placeholder='Uplaod Image'
                value={date}
                onChange={(e) => handleChangeNewHotel(e)}
                name="date"
                id="date" />
            <input
                type="text"
                placeholder='Uplaod Image'
                value={image}
                onChange={(e) => handleChangeNewHotel(e)}
                name="img"
                id="img" />
            <button>Add New Hotel</button>
        </form>
    )
}

export default AddNewHotel
