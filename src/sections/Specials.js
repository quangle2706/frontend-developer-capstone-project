export default function Specials() {
    return (
        <>
            <div className="special-header">
                <h2 className="special-heading">Specials</h2>
                <button className="special-button">Online Menu</button>
            </div>
            <div className="special-lists">
                <div className="special-card">
                    <img src={require("../assets/example.jpeg")} alt="dish" />
                    <div className="dish">
                        <div className="dish-name">Greek salad</div>
                        <div className="dish-price">$12.99</div>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <span>Order a delivery</span>
                </div>
                <div className="special-card">
                    <img src={require("../assets/example.jpeg")} alt="dish" />
                    <div className="dish">
                        <div className="dish-name">Greek salad</div>
                        <div className="dish-price">$12.99</div>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <span>Order a delivery</span>
                </div>
                <div className="special-card">
                    <img src={require("../assets/example.jpeg")} alt="dish" />
                    <div className="dish">
                        <div className="dish-name">Greek salad</div>
                        <div className="dish-price">$12.99</div>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <span>Order a delivery</span>
                </div>
            </div>
        </>
    );
}