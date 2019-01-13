import React from "react";
import "./style.css";

const SpiderCard = props => (
    <div className="col-md-12">
        <div className="card rounded" onClick={() => props.clickCount(props.id)}>
            <div className="img-container rounded">
                <img className="spider-pic" alt={props.name} title={props.name} src={props.image} />
            </div>
        </div>
    </div>
);

export default SpiderCard;
