import React from "react";
import card from "./Card.module.css";
import Button from "../Button/Button";

const Card = ({ title, id }) => {
    return (
        <div className={`${card.card}`} key={id}>
            <h2>{title}</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
            </p>
            <Button type={"primary"} size={"base"} value={"Submit"} />
        </div>
    );
};

export default Card;
