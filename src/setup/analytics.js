import ReactGA from 'react-ga4';

export const initGA = () => {
    ReactGA.initialize(import.meta.env.VITE_GOOGLE_MEASUREMENT_ID);
};

export const trackPageView = (path) => {
    ReactGA.send({ hitType: 'pageview', page: path });
};
