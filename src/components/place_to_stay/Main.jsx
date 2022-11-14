import boxesDatas from "./boxesDatas"

export default function Main() {

    const boxesDataArray = boxesDatas.map(boxData => {
        return (
            <div className="main--images--boxes" key={boxData.id}>
                <img src={boxData.img} className="img" />

                <div className="box--texts1">
                    <p>{boxData.location}</p>
                    <p className="nights">{boxData.nights}</p>
                </div>
                    
                <div className="box--texts2">
                    <p>{boxData.distance}</p>
                    <p>{boxData.availability}</p>
                </div>
                    
                <div className="box--stars">
                    <img src={boxData.starlogo} className="star"/>
                    <img src={boxData.starlogo} className="star"/>
                    <img src={boxData.starlogo} className="star"/>
                    <img src={boxData.starlogo} className="star"/>
                    <img src={boxData.starlogo} className="star"/>
                </div>
            </div>
        )
    })

    return (
        <div className="main">
            {boxesDataArray}
        </div>
    )
}