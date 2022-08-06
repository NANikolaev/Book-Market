import "./Description.css"

function Description({ description }) {

    return (
        <>
            <p className="dsc-text">
                {description}
            </p>
        </>
    )
}

export default Description