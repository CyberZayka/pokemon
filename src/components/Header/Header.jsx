import React from "react"
import {mainLogo} from "../../helpers/logo"
import "./Header.scss"

const Header = () => {
    return (
        <header className="header">
            {mainLogo()}
        </header>
    )
}

export default Header