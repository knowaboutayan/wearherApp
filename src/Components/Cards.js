import React from "react";
import "./Css/Cards.css";
import "../App.css";

const Cards = ({ titel, img = "#", value = "", unit = "" }) => (
    <div className="cards">
        <img src={`${img}`} width={'64px'} height={'64px'} alt="logo" />
        <div>
            <h3> {value >= 0 || value !== "" ? value + unit : <i className="fa fa-refresh" aria-hidden="true"></i>}</h3>
        </div>
        <span className="toolTips">{titel}</span>
    </div>
);

export default Cards;
