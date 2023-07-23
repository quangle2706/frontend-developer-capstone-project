import BookingForm from "./BookingForm";
import { useReducer, useEffect } from "react";

const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // const availableTimes = fetchAPI(action.date); // if fetchAPI works
            // return availableTimes;
            return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        default:
            return state;
    }
}

function BookingPage() {

    // for lift state up technique
    const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

    const updateTimes = (selectedDate) => {
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    }

    const initializeTimes = () => {
        dispatch({ type: 'UPDATE_TIMES' });
    }

    useEffect(() => {
        initializeTimes();
    }, []);

    const submitForm = (formData) => {
        console.log(formData); // If API works -> submitAPI(formData)
    }

    return (
        <>
            <h1>Booking Page</h1>
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />
        </>
    );
}

export default BookingPage;