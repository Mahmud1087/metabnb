import matabnbwhitelogo from "../assets/Group.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer--nav">
                <div className="footer--logo--socials">
                    <div className="footer--logo">
                        <img src={matabnbwhitelogo} alt="" />
                    </div>
                    <div className="footer--socials">
                        <img src={facebook} />
                        <img src={instagram} />
                        <img src={twitter} />
                    </div>
                </div>

                <div className="footer--navigations">
                    <h3>Community</h3>
                    <p>NFT</p>
                    <p>Tokens</p>
                    <p>Landlords</p>
                    <p>Discord</p>
                </div>

                <div className="footer--navigations">
                    <h3>Places</h3>
                    <p>Castle</p>
                    <p>Farms</p>
                    <p>Beach</p>
                    <p>Learn more</p>
                </div>

                <div className="footer--navigations">
                    <h3>About us</h3>
                    <p>Road map</p>
                    <p>Creators</p>
                    <p>Career</p>
                    <p>Contact us</p>
                </div>
            </div>

            <div className="footer--copyright">
                <p>&copy; 2022 metabnb</p>
            </div>
        </div>
    )
}