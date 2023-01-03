import React from 'react';
import { createRoot } from 'react-dom/client';
/**
 * import styles
 */
import './styles/main.scss';
/**
 * import components
 */
import App from './components/app';

createRoot(document.getElementById('root')!).render(<App />);
