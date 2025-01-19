import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './app';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);