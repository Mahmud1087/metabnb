import closeBtn from "../assets/x.png"
import arrowSlide from "../assets/Down Chevron.png"
import metamask from "../assets/Frame 195.png"
import walletConnect from "../assets/Frame 195 (1).png"

export default function ConnectWallet({ modalBtnToggle }) {
    return (
        <dialog open className="connectwallet">
            <div className="connectwallet--modal">
                <div className="modal--text_closeBtn">
                    <p>Connect Wallet</p>
                    <img 
                        src={closeBtn}
                        onClick={modalBtnToggle}
                    />
                </div>
                
                <div className="modal--wallets">
                    <p>choose your preferred wallet</p>
                    <div className="wallets">
                        <img 
                            src={metamask}
                            className="wallets--image" 
                        />
                        <img 
                            src={arrowSlide}
                            className="wallets--slide" 
                        />
                    </div>
                    <div className="wallets">
                        <img 
                            src={walletConnect}
                            className="wallets--image" 
                        />
                        <img 
                            src={arrowSlide}
                            className="wallets--slide" 
                        />
                    </div>
                </div>
            </div>
        </dialog>
    )
}