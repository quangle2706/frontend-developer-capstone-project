export default function Footer() {
    return (
        <>
            <footer className="footer-section">
                <img className="footer-image" src={require("../assets/example.jpeg")} alt="footer" />
                <div className="footer-nav">
                    <h3>Navigation</h3>
                    <span>Home</span>
                    <span>About</span>
                    <span>Reservations</span>
                </div>
                <div className="footer-contact">
                    <h3>Contact</h3>
                    <span>Address</span>
                    <span>Phone number</span>
                    <span>Email</span>
                </div>
                <div className="footer-social-links">
                    <h3>Social Media Links</h3>
                    <span>Address</span>
                    <span>Phone number</span>
                    <span>Email</span>
                </div>
            </footer>
        </>
    );
}