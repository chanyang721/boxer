import './index.css';
import React             from 'react';
import ReactDOM          from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider }      from 'react-redux'
import { store }         from './app/store'
import reportWebVitals   from './reportWebVitals';
import Router            from './routes'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
