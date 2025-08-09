import React from 'react';
import './App.css';

const officeImage = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=884&q=80';

function App() {
  const singleOffice = {
    id: 1,
    name: 'Innovate Hub - Featured',
    rent: 55000,
    address: '123 Tech Park, Silicon Valley, Bangalore',
  };

  const officeList = [
    {
      id: 2,
      name: 'Corporate Towers',
      rent: 75000,
      address: '456 Business Rd, Cyber City, Gurgaon',
    },
    {
      id: 3,
      name: 'Startup Den',
      rent: 48000,
      address: '789 Innovation Ln, Hitech City, Hyderabad',
    },
    {
      id: 4,
      name: 'The Executive Suite',
      rent: 90000,
      address: '101 Financial Dist, BKC, Mumbai',
    },
    {
      id: 5,
      name: 'Creative Corner',
      rent: 59999,
      address: '212 Art St, Koregaon Park, Pune',
    },
  ];
  const allOffices = [singleOffice, ...officeList];

  return (
      <div className="App">
        <header className="App-header">
          <h1>Office Space Rentals</h1>
        </header>

        <main>
          <div className="office-list">
            {allOffices.map((office) => (
                <div key={office.id} className="office-card">
                  <img src={officeImage} alt={`View of ${office.name}`} />

                  <h3>{office.name}</h3>
                  <p
                      className="rent-price"
                      style={{ color: office.rent < 60000 ? 'red' : 'green' }}
                  >
                    Rent: ₹{office.rent.toLocaleString()}/month
                  </p>

                  <p>Address: {office.address}</p>
                </div>
            ))}
          </div>
        </main>
      </div>
  );
}

export default App;