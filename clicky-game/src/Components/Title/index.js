import React from "react";
import "./style.css";

const Title = props => (
    <div className="navbar bg-dark">
        <a className="navbar-brand">
            <img src="http://franverona.com/loadgo/logos/spiderman.png" className="spider-signal" height="50px" alt="Spider Signal"></img>
            Welcome to the Spider-Verse!
        </a>
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
