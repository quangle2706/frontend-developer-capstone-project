import AboutSection from "./sections/AboutSection";
import CallToAction from "./sections/CallToAction";
import CustomersSay from "./sections/CustomersSay";
import Footer from "./sections/Footer";
import Specials from "./sections/Specials";

function HomePage() {
    return (
        <>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <AboutSection />
            <Footer />
        </>
    );
}

export default HomePage;