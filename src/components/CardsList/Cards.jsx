import React from "react";
import PropTypes from "prop-types"; 

import "./Cards.scss";

import Card from "../Card/Card";

const Cards = ({cards}) => {

    const cardsList = cards.map((card) => {
        const {name, generation, avatar, id, type, colors} = card;

        return (
            <Card
                key={id}
                name={name}
                generation={generation}
                avatar={avatar}
                type={type}
                colors={colors}
            />
        );
    });

    return (
        <div className="cards-list">
            {cardsList}
        </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.array,
}


export default Cards;