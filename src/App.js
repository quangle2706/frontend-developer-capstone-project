import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import BookingPage from './BookingPage';

function App() {
  return (
    <div className='App'>
      <nav className='nav'>
        <ul>
          <Link to="/" className='nav-item'>Homepage</Link>
          <Link to="/about-me" className='nav-item'>About Us</Link>
          <Link to="/booking" className='nav-item'>Reservations</Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-me' element={<AboutPage />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
    </div>
  );
}

export default App;
