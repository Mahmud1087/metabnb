import { Routes, Route } from "react-router-dom"
import "./css/main.css";
import HomePage from "./components/HomePage"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PlaceToStay from "./components/PlaceToStay"

export default function App() {

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/placetostay" element={<PlaceToStay />} />
            </Routes>
            <Footer />
        </div>
        
    )
}