import React from "react"
import "./Screen.scss"
import Title from "../Title/Title"
import { welcomeLogo, cursor } from "../../helpers/logo"
import {Link } from "react-scroll"

const Screen = () => {
    return (
        <div className="screen">
            <div className="screen__wrapper">
                <Title isMain text="This is an Internal test task" />
                <p className="screen__text">Hello, don’t be afraid. <br style={{lineHeight: "75px"}}></br>This task is easier than looks like. 
                    It’s no magic, no quests and no math here. Only <b>your skill </b>  
                    in <i><b>semantic markup</b></i> matters. In this Figma design you already 
                    have everything to successfully path our test, just be attentive 
                    to details, take your time and GOOD LUCK.
                </p>
                <div className="screen__link">
                    <p style={{fontSize: "10px", marginBottom: "15px"}}>Tap to scroll down</p>   
                    <Link
                    to="heroSection"
                    smooth={true}
                    duration={1500}
                    >
                        {cursor()}
                    </Link>
                </div>
            </div>
            <div className="logo-wrapper">
                {welcomeLogo()}
            </div>
        </div>
    )
}

export default Screen