// Global component imports
import './components/site-header.js';
import './components/mission.js';
import './components/objectives.js';
import './components/who-we-are.js';
import './components/contact.js';
import './components/site-footer.js';

// About Page specific imports
import './components/about/about-hero.js';
import './components/about/about-history.js';
import './components/about/about-values.js';
import './components/about/about-leadership.js';

// Utilities
import { initScrollObserver } from './utils/scroll-observer.js';

// Initialize scroll reveal animations
initScrollObserver();

console.log('GNSC About Page components & Scroll Observer loaded successfully.');
