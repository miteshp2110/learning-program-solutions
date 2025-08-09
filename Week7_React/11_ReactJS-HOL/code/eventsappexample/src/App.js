import React, { useState } from 'react';
import './App.css';

// ============== CurrencyConvertor Component ==============
// This component handles its own state and logic for currency conversion.
const CurrencyConvertor = () => {
  // State to hold the input value for INR and the converted value for EUR
  const [inr, setInr] = useState('');
  const [eur, setEur] = useState(null);

  // A static conversion rate. In a real app, this would come from an API.
  const INR_TO_EUR_RATE = 90.5;

  /**
   * This function is called when the form is submitted.
   * It prevents the default form submission behavior (page reload),
   * calculates the conversion, and updates the state.
   */
  const handleSubmit = (event) => {
    // Prevents the browser from reloading the page on form submission
    event.preventDefault();

    const inrValue = parseFloat(inr);
    if (!isNaN(inrValue)) {
      const convertedEur = inrValue / INR_TO_EUR_RATE;
      // Update state with the result, formatted to 2 decimal places
      setEur(convertedEur.toFixed(2));
    } else {
      // Handle cases where input is not a valid number
      setEur('Invalid input');
    }
  };

  return (
      <div className="card converter-card">
        <h2>Currency Converter</h2>
        <p>Convert Indian Rupees (INR) to Euro (EUR)</p>
        {/* Using a form element is a good practice for handling user input.
        The onSubmit event is triggered when the button inside is clicked.
      */}
        <form onSubmit={handleSubmit} className="converter-form">
          <input
              type="number"
              value={inr}
              onChange={(e) => setInr(e.target.value)}
              placeholder="Enter amount in INR"
              className="currency-input"
          />
          <button type="submit" className="btn convert-btn">Convert</button>
        </form>
        {/* The result is displayed here only after conversion */}
        {eur !== null && (
            <p className="result">
              Result: <strong>€{eur}</strong>
            </p>
        )}
      </div>
  );
};


// ============== Main App Component ==============
// This is the main component that renders all the event examples.
function App() {
  // useState hook to manage the counter's state
  const [counter, setCounter] = useState(0);

  // --- 1. Functions for the Counter ---

  // a. Method to increment the value
  const incrementValue = () => {
    setCounter(currentValue => currentValue + 1);
  };

  // b. Method to say hello
  const sayHello = () => {
    alert('Hello, this is an additional message!');
  };

  // Handler for the "Increment" button that invokes multiple methods
  const handleIncrement = () => {
    incrementValue();
    sayHello();
  };

  // Handler for the "Decrement" button
  const handleDecrement = () => {
    setCounter(currentValue => currentValue - 1);
  };

  // --- 2. Function that accepts an argument ---
  const showMessage = (message) => {
    alert(`The message is: ${message}`);
  };

  // --- 3. Function to demonstrate Synthetic Events ---
  const handlePress = (event) => {
    // The 'event' object here is a React SyntheticEvent.
    // It's a cross-browser wrapper around the browser's native event.
    console.log('Synthetic Event Object:', event);
    alert('I was clicked! Check the console to see the SyntheticEvent object.');
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>React Event Handling Examples</h1>
        </header>

        <div className="container">
          {/* Example 1: Counter with multiple methods on one click */}
          <div className="card">
            <h2>Counter</h2>
            <p className="counter-value">{counter}</p>
            <div className="btn-group">
              <button onClick={handleIncrement} className="btn increment-btn">Increment</button>
              <button onClick={handleDecrement} className="btn decrement-btn">Decrement</button>
            </div>
          </div>

          {/* Example 2: Passing arguments to an event handler */}
          <div className="card">
            <h2>Passing Arguments to Events</h2>
            <button onClick={() => showMessage('Welcome')} className="btn welcome-btn">
              Say Welcome
            </button>
          </div>

          {/* Example 3: Using the SyntheticEvent object */}
          <div className="card">
            <h2>Synthetic Event Demo</h2>
            <button onClick={handlePress} className="btn press-btn">
              Press Me (onClick)
            </button>
          </div>

          {/* Render the CurrencyConvertor Component */}
          <CurrencyConvertor />
        </div>
      </div>
  );
}

export default App;
