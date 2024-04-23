import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// index.js or App.js





// This code in main.jsx handles rendering the App component
// into the DOM element with an id of 'root' (in index.html)
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
{/* All other routing components need this to work */}
<App />
</React.StrictMode>,
)