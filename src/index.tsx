// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App';
import reportWebVitals from './reportWebVitals';

// Styles
import './index.css';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
    	<App />
  	</React.StrictMode>
);

reportWebVitals();
