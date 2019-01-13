import React from "react";
import "./style.css";

const Title = props => (
    <div className="navbar bg-dark">
        <div className="navbar-brand text-light">
            <img src="http://franverona.com/loadgo/logos/spiderman.png" className="spider-signal" height="50px" alt="Spider Signal"></img>
            Welcome to the Spider-Verse!
        </div>
        <ul className="navbar-nav scores">
            <li class="nav-item">
                Score: {props.score}
            </li>
            <li class="nav-item">
                Highscore: {props.highscore}
            </li>
        </ul>
    </div>
);

export default Title;
