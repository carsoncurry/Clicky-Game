import React from "react";
import "./style.css";

const SpiderCard = props => (
    <div className="container col-md-12">
        <div className="card" onClick={() => props.clickCount(props.id)}>
            <div className="img-container">
                <img className="spider-pic" alt={props.name} title={props.name} src={props.image} />
            </div>
        </div>
    </div>
);

export default SpiderCard;
