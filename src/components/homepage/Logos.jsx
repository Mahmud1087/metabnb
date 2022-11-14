import mbtoken from "../../assets/Group 59537.svg"
import metamasklogo from "../../assets/Group 4040.svg"
import opensealogo from "../../assets/Frame 4041.svg"

export default function Logos() {
    return (
        <div className="logos">
            <img src={mbtoken} />
            <img src={metamasklogo} />
            <img src={opensealogo} />
        </div>
    )
}