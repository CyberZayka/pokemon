import React from "react";
import PropTypes from "prop-types"; 
import Button from "../Button/Button";

const Card = ({name, generation, avatar, type}) => {

    return (
        <div>
            <img src={avatar} alt="ava" />
            <div>
            <p className="card-name">{name}</p>
            <p className="card-describe">Generation: {generation}</p>
            <p className="card-describe">Type: {type.map((elem, index) => {
                
                return (
                    <div key={index} className="card-box">{elem}</div>
                );
            })}</p>
            </div>
            <Button text="Choose" isCard action={() => alert("Congratulations! You have choosed a hero")} />
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string,
    generation: PropTypes.string,
    avatar: PropTypes.string,
    type:PropTypes.array
}

export default Card