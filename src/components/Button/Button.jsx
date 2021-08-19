import React from "react";
import PropTypes from "prop-types"; 
import "./Button.scss";

const Button = ({text, action, isCard}) => {
    return <button onClick={action} className={isCard && "choose-button"}>{text}</button>;
};

Button.propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
    isCard: PropTypes.bool
}

export default Button

