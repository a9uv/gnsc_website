// Global Web Components
import './components/site-header.js';
import './components/site-footer.js';

// Contact Page Components
import './components/contact.js';

// Utilities
import { initScrollObserver } from './utils/scroll-observer.js';

// Initialize scroll reveal animations
initScrollObserver();

console.log('GNSC Contact Page components & scroll observer initialized.');
