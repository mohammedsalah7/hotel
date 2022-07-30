import {Route, Routes } from "react-router-dom";
import Dashboared from "./pages/dashboared";
import Home from "./pages/home"
import HotelProvider from "./context";
import HomeDashboared from "./pages/dashboared/home/home";
import Login from "./pages/dashboared/login";
import AddNewHotel from "./components/form";
import MyBooking from "./pages/MyBooking";
import "./App.css";

function App() {
  return (
    <>
      <HotelProvider>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/dashboared" element={<Dashboared />}></Route>
            <Route exact path="/dashboared/home" element={<HomeDashboared/>}></Route>
            <Route exact path="/dashboared/login" element={<Login/>}></Route>
            <Route exact path="/dashboared/addNew" element={<AddNewHotel/>}></Route>
            <Route exact path="/mybooking" element={<MyBooking/>}></Route>
          </Routes>
      </HotelProvider>
    </>
  );
}

export default App;