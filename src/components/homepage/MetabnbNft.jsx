import Button from "../Button";
import image from "../../assets/Frame 59546.png"

export default function MetabnbNft() {
    return (
        <div className="metabnbNft">
            <div className="metabnbNft--left">
                <h1>Metabnb NFTs</h1>
                <p>
                    Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                </p>
                <Button 
                    text={"Learn more"}
                    bgColor={"linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)"}
                    color={"#A02279"} 
                />
            </div>
            {/* <div className="metabnbNft--image"> */}
            <img src={image} alt="" />
            {/* </div> */}
        </div>
    )
}