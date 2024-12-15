import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import store from './redux/store.js';
import { HelmetProvider } from 'react-helmet-async';
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StrictMode>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </StrictMode>
    </Provider>,
);
