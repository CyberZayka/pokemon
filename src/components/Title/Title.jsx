import React from "react"
import PropTypes from "prop-types"; 
import "./Title.scss"

const Title = ({text, isMain}) => {
    return (
        <>
        <span className={isMain ? "primary-title" : "secondary-title"}>{text}</span>
        {!isMain && <hr className="hr" />}
        </>
    )
}

Title.propTypes = {
    text: PropTypes.string,
    isMain: PropTypes.bool,
}

export default Title