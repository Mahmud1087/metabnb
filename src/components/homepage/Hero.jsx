import Navbar from "../Navbar"
import imgGroup from "../../assets/Group 4028.png"
import Logos from "./Logos"

export default function Hero() {
    
    return (
        <div className="hero">

            <div className="hero--main">
                <div className="hero--main_left">
                    <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    <div className="hero--search">
                        <input 
                            type="search" 
                            name="search" 
                            placeholder="Search for location" 
                        />
                        <button className="hero--search--button">search</button>
                    </div>
                </div>
                <div className="hero--main_right">
                    <img src={imgGroup} alt="" />
                </div>
            </div>

            <Logos />
        </div>
    )
}