import { Link } from "react-router-dom";
import closeBtn from "../assets/x.png"
import Button from "./Button";

export default function MobileMenuList({ setOpen, setMenuCloseBtn, menuCloseBtn }) {
    return (
        <dialog open className="mobilemenulist">
            <div className="mobilemenulist--content">
                <img 
                    src={closeBtn}
                    onClick={() => {
                    return (setMenuCloseBtn(prevMenuState => !prevMenuState))
                    }} />
                <div className="mobilemenulist--navbar--navLinks">
                    <Link to="/">Home</Link>
                    <Link to="/placetostay">Place to stay</Link>
                    <a href="#nfts">NFTs</a>
                    <a href="#community">Community</a>
                </div>

                <Button 
                    text={"Connect wallet"}
                    bgColor={"linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"}
                    color={"white"}
                    onClick={function() {
                        setOpen(prevState => !prevState)
                    }}
                />
            </div>
        </dialog>
    )
}