import { Link } from "react-router-dom";

export default function CallToAction() {
    return (
        <div className="hero-section">
            <div className="content">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque sem eu tortor posuere, sed aliquam sapien hendrerit. Suspendisse potenti. Maecenas quis libero ornare, cursus lacus vel, ornare sem.
                </p>
                <button><Link to="/booking" className='nav-item'>Reservations</Link></button>
            </div>
            <div className="image">
                <img src={require("../assets/example.jpeg")} alt="week specials"/>
            </div>
        </div>
    );
}