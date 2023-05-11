// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// App
import App from './App';

// Styles
import './index.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <React.StrictMode>
        <BrowserRouter basename="/portfolio">
            <App />
        </BrowserRouter>
    </React.StrictMode>

)