import boxData from "./boxData"

export default function Adventure() {
    
    const boxDataArray = boxData.map(data => {
        return (
            <div className="adventure--images--boxes" key={data.id}>
                <img src={data.img} className="img" />

                <div className="box--texts1">
                    <p>{data.location}</p>
                    <p className="nights">{data.nights}</p>
                </div>
                    
                <div className="box--texts2">
                    <p>{data.distance}</p>
                    <p>{data.availability}</p>
                </div>
                    
                <div className="box--stars">
                    <img src={data.starlogo} className="star"/>
                    <img src={data.starlogo} className="star"/>
                    <img src={data.starlogo} className="star"/>
                    <img src={data.starlogo} className="star"/>
                    <img src={data.starlogo} className="star"/>
                </div>
            </div>
        )
    })

    return (
        <div className="adventure">
            <h2>Inspiration for your next adventure</h2>
            <div className="adventure--images">
                {boxDataArray}
            </div>
        </div>
    )
}