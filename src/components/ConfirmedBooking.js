import { Link } from "react-router-dom";

function ConfirmedBooking() {
    return (
        <>
            <h1>Thank you for booking!</h1>
            <button><Link to={"/"}>Back</Link></button>
        </>
    );
}

export default ConfirmedBooking;