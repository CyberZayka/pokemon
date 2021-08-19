import React from "react"
import "./Main.scss"

import Screen from "../Welcome_screen/Screen"
import CardsController from "../CardsList/CardsController"

const Main = () => {
    return (
        <div className="main">
            <Screen />
            <CardsController />
        </div>
    )
}

export default Main