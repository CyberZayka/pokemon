import React from "react";
import {useSelector} from "react-redux";
import selectAllCards from "../../store/selectors";
import Title from "../Title/Title";
import Cards from "./Cards";

const CardsController = () => {
    const cards = useSelector(selectAllCards);

    return (
        <div id="heroSection">
            <Title text="Cards" isMain={false} />
            <Cards cards={cards} />
        </div>
    );
};

export default CardsController;