import React, { useState } from 'react';
import './App.css';

const flightData = [
  {
    id: 'AI-202',
    from: 'New Delhi (DEL)',
    to: 'Mumbai (BOM)',
    departure: '08:30',
    arrival: '10:45',
    price: 4500,
  },
  {
    id: '6E-555',
    from: 'Bengaluru (BLR)',
    to: 'Chennai (MAA)',
    departure: '14:00',
    arrival: '15:00',
    price: 2800,
  },
  {
    id: 'UK-810',
    from: 'Kolkata (CCU)',
    to: 'New Delhi (DEL)',
    departure: '18:50',
    arrival: '21:00',
    price: 5200,
  },
];


const FlightCard = ({ flight, isLoggedIn }) => {
  const handleBookNow = () => {
    alert(`Booking confirmed for flight ${flight.id} from ${flight.from} to ${flight.to}!`);
  };

  return (
      <div className="flight-card">
        <div className="flight-info">
          <h3>{flight.from} → {flight.to}</h3>
          <p>Flight: {flight.id}</p>
          <p>Departure: {flight.departure} | Arrival: {flight.arrival}</p>
        </div>
        <div className="flight-booking">
          <p className="price">₹{flight.price.toLocaleString()}</p>

          {isLoggedIn && (
              <button className="btn book-btn" onClick={handleBookNow}>
                Book Now
              </button>
          )}
        </div>
      </div>
  );
};


const GuestPage = ({ onLogin }) => (
    <div>
      <div className="page-header">
        <h2>Welcome, Guest!</h2>
        <p>Please log in to book your tickets.</p>
        <button className="btn login-btn" onClick={onLogin}>
          Login
        </button>
      </div>
      {flightData.map(flight => (
          <FlightCard key={flight.id} flight={flight} isLoggedIn={false} />
      ))}
    </div>
);


const UserPage = ({ onLogout }) => (
    <div>
      <div className="page-header">
        <h2>Welcome Back!</h2>
        <p>You can now book your flights.</p>
        <button className="btn logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
      {flightData.map(flight => (
          <FlightCard key={flight.id} flight={flight} isLoggedIn={true} />
      ))}
    </div>
);


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Airline Ticket Booking</h1>
        </header>
        <main className="container">
          {isLoggedIn ? (
              <UserPage onLogout={handleLogout} />
          ) : (
              <GuestPage onLogin={handleLogin} />
          )}
        </main>
      </div>
  );
}

export default App;
