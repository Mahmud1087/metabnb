export default function Button(props) {

    const buttonStyles = {
        border: "none",
        padding: "0.5rem 1.3rem",
        background: props.bgColor,
        borderRadius: "6px",
        color: props.color,
        fontFamily: "Red Rose",
        fontWeight: "400",
        fontSize: "12px",
        cursor: "pointer",
    }

    return (
        <>
            <button style={buttonStyles} onClick={props.onClick}>
                {props.text}
            </button>
        </>
    )
}