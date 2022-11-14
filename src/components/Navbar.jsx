import { useState } from "react"
import metaLogo from "../assets/Group.png"
import { Link } from "react-router-dom"
import Button from "./Button"
import ConnectWallet from "./ConnectWallet"

export default function Navbar() {
    
    const [open, setOpen] = useState(true)

    function connectWalletToggle() {
        setOpen(prevOpen => !prevOpen)
        // return (
        //     open ? <ConnectWallet/> : ""
        // )
    }
    
    return (
        <div className="navbar">            
            <img 
                src={metaLogo}
                className="navbar--logo" 
            />
            
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
                onClick={connectWalletToggle} 
            />
        </div>
    )
}