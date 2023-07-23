export default function CustomersSay() {
    return (
        <>
            <div className="testimonial-section">
                <h2>Testimonials</h2>
                <div className="customer-list">
                    <div className="customer-card">
                        <h4>Rating</h4>
                        <div className="customer-info">
                            <img className="customer-image" src={require("../assets/example.jpeg")} />
                            <h4 className="customer-name">Name</h4>
                        </div>
                        <h6>Review text</h6>
                    </div>
                    <div className="customer-card">
                        <h4>Rating</h4>
                        <div className="customer-info">
                            <img className="customer-image" src={require("../assets/example.jpeg")} />
                            <h4 className="customer-name">Name</h4>
                        </div>
                        <h6>Review text</h6>
                    </div>
                    <div className="customer-card">
                        <h4>Rating</h4>
                        <div className="customer-info">
                            <img className="customer-image" src={require("../assets/example.jpeg")} />
                            <h4 className="customer-name">Name</h4>
                        </div>
                        <h6>Review text</h6>
                    </div>
                    <div className="customer-card">
                        <h4>Rating</h4>
                        <div className="customer-info">
                            <img className="customer-image" src={require("../assets/example.jpeg")} />
                            <h4 className="customer-name">Name</h4>
                        </div>
                        <h6>Review text</h6>
                    </div>
                </div>
            </div>
        </>
    );
}