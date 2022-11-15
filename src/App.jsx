import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./css/main.css";
import HomePage from "./components/HomePage"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PlaceToStay from "./components/PlaceToStay"
import ConnectWallet from "./components/ConnectWallet";
import MobileMenuList from "./components/MobileMenuList";

export default function App() {
    
    const [open, setOpen] = useState(false)
    const [menuCloseBtn, setMenuCloseBtn] = useState(false)

    return (
        <div>
            {menuCloseBtn && <MobileMenuList setMenuCloseBtn={setMenuCloseBtn}  setOpen={setOpen} />}
            {open && <ConnectWallet setOpen={setOpen}/>}
            <Navbar setOpen={setOpen} setMenuCloseBtn={setMenuCloseBtn}/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/placetostay" element={<PlaceToStay />} />
            </Routes>
            <Footer />
        </div>
        
    )
}