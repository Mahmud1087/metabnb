import location_icon from "../../assets/Frame 13.png"

export default function Links() {
    return (
        <div className="links">
            <a href="#restaurant">Restaurant</a>
            <a href="#cottage">Cottage</a>
            <a href="#castle">Castle</a>
            <a href="#fantasy">fantasy city</a>
            <a href="#beach">beach</a>
            <a href="#carbins">Carbins</a>
            <a href="#offgrid">Off-grid</a>
            <a href="#farm">Farm</a>
            <a href="#location">
                <img 
                    src={location_icon}
                    className="location_icon" 
                />
            </a>
        </div>
    )
}