import { Link } from "react-router-dom";
import closeBtn from "../assets/x.png"
import Button from "./Button";

export default function MobileMenuList({ modalBtnToggle, menuBtnToggle }) {
    return (
        <dialog open className="mobilemenulist">
            <div className="mobilemenulist--content">
                <img 
                    src={closeBtn}
                    onClick={menuBtnToggle} 
                />
                <div className="mobilemenulist--navbar--navLinks">
                    <Link to="/" onClick={menuBtnToggle}>Home</Link>
                    <Link to="/placetostay" onClick={menuBtnToggle}>Place to stay</Link>
                    <a href="#nfts" onClick={menuBtnToggle}>NFTs</a>
                    <a href="#community" onClick={menuBtnToggle}>Community</a>
                </div>

                <Button 
                    text={"Connect wallet"}
                    bgColor={"linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"}
                    color={"white"}
                    onClick={() => { 
                        modalBtnToggle();
                        menuBtnToggle()
                    }}
                />
            </div>
        </dialog>
    )
}