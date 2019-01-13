import React from "react";
import "./style.css";

const Title = props => (
    <div className="jumbotron col-12">
        <div className="title">{props.children}</div>
        <div className="row col-12 justify-content-center">
            <h1 className="text-light">Welcome to the Spider-Verse!</h1>
        </div>
        <div className="row col-12 justify-content-center">
            <div className="scores text-right">
                <h3>Score: {props.score} |
                    Highscore: {props.highscore}
                </h3>
            </div>
        </div>
    </div>
);

export default Title;
