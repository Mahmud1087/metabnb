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
    
    const [modalBtn, setModalBtn] = useState(false)
    const [menuBtn, setMenuBtn] = useState(false)

    function modalBtnClick() {
        setModalBtn(prevModalBtn => !prevModalBtn)
    }

    function menuBtnClick() {
        setMenuBtn(prevMenu => !prevMenu)
    }

    return (
        <div>
            {menuBtn && <MobileMenuList menuBtnToggle={menuBtnClick}  modalBtnToggle={modalBtnClick} />}
            {modalBtn && <ConnectWallet modalBtnToggle={modalBtnClick}/>}
            <Navbar modalBtnToggle={modalBtnClick} menuBtnToggle={menuBtnClick}/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/placetostay" element={<PlaceToStay />} />
            </Routes>
            <Footer />
        </div>
        
    )
}