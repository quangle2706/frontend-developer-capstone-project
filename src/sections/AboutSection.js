export default function AboutSection() {
    return (
        <>
            <div className="about-section">
                <div className="about-info">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div className="about-images">
                    <img className="about-img-1" src={require("../assets/example.jpeg")} />
                    <img className="about-img-2" src={require("../assets/example.jpeg")} />
                </div>
            </div>
        </>
    );
}