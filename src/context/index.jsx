import React, { useState, createContext } from "react";
import { useNavigate } from 'react-router-dom';
import Hotel1 from "../assets/hotel1.jpg"
import Hotel2 from "../assets/hotel2.jpg"
import Hotel3 from "../assets/hotel3.jpg"
export const HotelContext = createContext();
const HotelProvider = ({ children }) => {
  const navigate = useNavigate();
  const adminName = "admin"
  const adminPassword = "123456"
  const nameCity = ['Palestine', 'Gaza', 'Egypt', 'Lebanon']
  const [results, setResults] = useState([
    {
      id: 1,
      name: "Palestine",
      price: "600",
      img: Hotel1,
      date: "2022-07-04"

    },
    {
      id: 2,
      name: "Gaza",
      price: "2000",
      img: Hotel2,
      date: "2022-07-05"


    },
    {
      id: 3,
      name: "Egypt",
      price: "150",
      img: Hotel3,
      date: "2022-07-06"


    },
    {
      id: 4,
      name: "Lebanon",
      price: "40",
      img: Hotel1,
      date: "2022-07-01"


    },
    {
      id: 5,
      name: "Lebanon",
      price: "350",
      img: Hotel2,
      date: "2022-07-10"


    },
    {
      id: 6,
      name: "Palestine",
      price: "300",
      img: Hotel3,
      date: "2022-07-08"


    }

  ]);
  const [value, setValue] = useState("")
  const [filter, setFilter] = useState()
  const [admin, setAdmin] = useState(false)
  const [adminInputValue, setAdminInputValue] = useState({ nameAdmin: "", password: "" })
  const [newHotelInputValue, setNewhotelInputValue] = useState({
    name: "",
    price: "",
    img: "",
    date: ""
  })
  const { nameAdmin, password } = adminInputValue
  const { name, price, img, date } = newHotelInputValue
  const [city, setCity] = useState("palestine");
  const [Booking, setMyBooking] = useState([]);

  const handelSearch = (e) => {
    setValue(e.target.value)
    const Resultsearch = results.filter(
      hotel => {
        return (
          hotel.name.toLowerCase().search(value.toLowerCase()) !== -1
        );
      }
    );
    setResults(Resultsearch)
  }

  const dataNew = results.filter(function (element) {
    return element !== undefined;
  });
  const handleChangeLogin = (e) => {
    let value = e.target.value
    let name = e.target.name
    setAdminInputValue({
      ...adminInputValue,
      [name]: value
    })
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (adminInputValue.nameAdmin === adminName && adminInputValue.password === adminPassword) {
      setAdmin(!admin)
      navigate('/dashboared/home')

    }
  }
  const handleDeleteHotel = (HotelID) => {
    let filterResults = results.filter((item) => {
      return item.id !== HotelID;
    });
    setResults(filterResults);
  };

  const handleChangeNewHotel = (e) => {
    let value = e.target.value
    let name = e.target.name
    setNewhotelInputValue({

      ...newHotelInputValue,
      id: dataNew.length + 1,
      [name]: value
    })
  }

  const handelAddNewHotel = (e) => {
    e.preventDefault();
    if (newHotelInputValue.nameHotel !== ""
      ||
      newHotelInputValue.price !== ""
      ||
      newHotelInputValue.img !== ""
    ) {
      setResults([
        ...results,
        newHotelInputValue
      ])
      navigate('/dashboared/home')
    }
  }

  const filterDate = (e) => {
    if (e.target.value !== "") {
      const filterHotel = results.filter((hotel) => {
        return (
          hotel.date === e.target.value
        )
      }
      );
      setResults(filterHotel)
    }
  }

  const filterCity = (e) => {
    setCity(e.target.value);
    const filterHotel = results.filter((hotel) => {
      return (
        hotel.name === e.target.value
      )
    }
    );
    setResults(filterHotel)

  };

  const filterPrice = (e) => {
    const filterHotel = results.filter((hotel) => {
      return (
        parseInt(e.target.value) >= parseInt(hotel.price)
      )
    }
    );
    setResults(filterHotel)

  };



  // const filterItems = results
  //   .filter(dataFilter => city === dataFilter.name)
  //   .filter(dataFilter => dataFilter.date === date)







  const handleBookineHotel = (hotelId) => {
    const myBooking = results.filter((hotel) => hotel.id === hotelId)
    setMyBooking([myBooking, ...Booking])
  }
  return (
    <HotelContext.Provider
      value={{
        results,
        dataNew,
        setResults,
        handelSearch,
        value,
        setFilter,
        filter,
        nameAdmin,
        password,
        handleClick,
        handleChangeLogin,
        admin,
        handleDeleteHotel,
        name,
        price,
        img,
        date,
        handleChangeNewHotel,
        handelAddNewHotel,
        filterDate,
        filterCity,
        city,
        nameCity,
        filterPrice,
        handleBookineHotel,
        Booking

      }}
    >
      {children}
    </HotelContext.Provider>
  );
};
export default HotelProvider;