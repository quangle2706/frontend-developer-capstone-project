import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <div className='App'>
      <header>
        <img src={require('./assets/example.jpeg')} height={"40px"} />
        <nav className='nav'>
          <ul>
            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/about-me" className='nav-item'>About</Link>
            <Link to="/booking" className='nav-item'>Reservations</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-me' element={<AboutPage />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/booking-confirmation' element={<ConfirmedBooking />} />
      </Routes>
    </div>
  );
}

export default App;
