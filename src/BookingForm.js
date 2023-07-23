import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm(props) {

    const [selectedDate, setSelectedDate] = useState('');
    const [reservationTime, setReservationTime] = useState(props.availableTimes[0]);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        props.updateTimes(selectedDate); // loading new available times
    }

    const handleTimeChange = (e) => {
        setReservationTime(e.target.value);
    }

    const handleNumberOfGuestChange = (e) => {
        setNumberOfGuests(e.target.value);
    }

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // props.submitForm(formData)
        console.log('Form submitted!');
        console.log(selectedDate);
        console.log(reservationTime);
        console.log(numberOfGuests);
        console.log(occasion);
        navigate("/booking-confirmation");
    }

    // Every time new selected date is chosen
    useEffect(() => {
        setReservationTime(props.availableTimes[0]);
    }, [props.availableTimes]);

    return (
        <>
            <form style={{ display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
                <label aria-label="res-date" htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} required />
                <label aria-label="res-time" htmlFor="res-time">Choose time</label>
                <select id="res-time " value={reservationTime} onChange={handleTimeChange} required>
                    {props.availableTimes.map((time, index) => (<option key={index}>{time}</option>))}
                </select>
                <label aria-label="guests" htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" required value={numberOfGuests} onChange={handleNumberOfGuestChange}/>
                <label aria-label="occasion" htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={handleOccasionChange} required>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Book Now" />
            </form>
        </>
    );
}

export default BookingForm;