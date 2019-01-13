import React from "react";
import "./style.css";

const Footer = props => (
    <div className="footer bg-dark">
        <div className="footer-content text-center text-white col-12">
            <a href="https://carsoncurry.github.io/Portfolio/" className="portfolio-link" target="_blank" rel="noopener noreferrer">
            Copyright Carson Curry © 2019</a>
            <a href="https://github.com/carsoncurry/Clicky-Game" className="github-link" target="_blank" rel="noopener noreferrer">
            Github Repository <i class="fab fa-github"></i></a>
        </div>
    </div>
)

export default Footer;
