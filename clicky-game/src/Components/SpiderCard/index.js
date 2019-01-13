import React from "react";
import "./style.css";

function SpiderCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Powers:</strong> {props.powers}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card;
