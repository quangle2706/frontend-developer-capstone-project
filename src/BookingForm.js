import { useState, useEffect, useReducer } from "react";

function BookingForm(props) {

    const [selectedDate, setSelectedDate] = useState('');
    const [reservationTime, setReservationTime] = useState(props.availableTimes[0]);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        props.updateTimes(); // loading new available times
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
        console.log(selectedDate);
        console.log(reservationTime);
        console.log(numberOfGuests);
        console.log(occasion);
    }

    // Every time new selected date is chosen
    useEffect(() => {
        setReservationTime(props.availableTimes[0]);
    }, [props.availableTimes]);

    return (
        <>
            <form style={{ display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={reservationTime} onChange={handleTimeChange}>
                    {props.availableTimes.map((time, index) => (<option key={index}>{time}</option>))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={numberOfGuests} onChange={handleNumberOfGuestChange}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Book Now" />
            </form>
        </>
    );
}

export default BookingForm;