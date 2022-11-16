import { useState } from "react"
import metaLogo from "../assets/Group.png"
import { Link } from "react-router-dom"
import Button from "./Button"
import ConnectWallet from "./ConnectWallet"

export default function Navbar({ modalBtnToggle, menuBtnToggle }) {
    
    return (
        <div className="navbar">            
            <img 
                src={metaLogo}
                className="navbar--logo" 
            />
            
            <div className="navbar--menu">
                <div className="navbar--navLinks">
                    <Link to="/">Home</Link>
                    <Link to="/placetostay">Place to stay</Link>
                    <a href="#nfts">NFTs</a>
                    <a href="#community">Community</a>
                </div>

                <Button 
                    text={"Connect wallet"}
                    bgColor={"linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"}
                    color={"white"}
                    onClick={modalBtnToggle}
                />
            </div>

            <button className="hamburger_menu" 
                onClick={menuBtnToggle}>
                    <span className="hamburger top"></span>
                    <span className="hamburger middle"></span>
                    <span className="hamburger bottom"></span>
            </button>
        </div>
    )
}