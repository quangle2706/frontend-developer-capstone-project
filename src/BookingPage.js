import BookingForm from "./BookingForm";
import { useReducer, useEffect } from "react";

const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        default:
            return state;
    }
}

function BookingPage() {

    // for lift state up technique
    const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

    const updateTimes = () => {
        dispatch({ type: 'UPDATE_TIMES' });
    }

    const initializeTimes = () => {
        dispatch({ type: 'UPDATE_TIMES' });
    }

    useEffect(() => {
        initializeTimes();
    }, []);

    return (
        <>
            <h1>Booking Page</h1>
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
        </>
    );
}

export default BookingPage;