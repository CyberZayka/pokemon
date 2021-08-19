import React from "react";
import Title from "../Title/Title";
import MyMap from "../Map/Map";

const Footer = () => {


    return (
        <div className="footer">
            <div style={{display: "grid", gridTemplateRows: "1fr 3px", gridTemplateColumns: "repeat(10, 1fr)", gridGap: "30px"}}>
                <div style={{gridColumnStart: "2", gridColumnEnd: "3"}}>
                    <Title text="Map" />
                </div>
            </div>
            <MyMap />
        </div>
    )
}

export default Footer