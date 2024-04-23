// src/components/StockTracker.js
import React, { useState } from 'react';
import axios from 'axios';

const StockTracker = () => {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState(null);

  const fetchStockData = async () => {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=X7LW2JHZXL5LV6WE`
      );
      const globalQuote = response.data['Global Quote'];

      // Check if the stock data is valid
      if (globalQuote && globalQuote['01. symbol'] && globalQuote['05. price']) {
        setStockData(globalQuote);
      } else {
        console.error('Invalid stock data received:', globalQuote);
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter stock symbol (e.g., AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <button onClick={fetchStockData}>Search</button>

      {stockData ? (
        <div>
          <h2>{stockData['01. symbol']}</h2>
          <p>Price: ${parseFloat(stockData['05. price']).toFixed(2)}</p>
        </div>
      ) : (
        <p>Loading stock data...</p>
      )}
    </div>
  );
};

export default StockTracker;
