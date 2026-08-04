// Global imports & component registration
import './components/site-header.js';
import './components/hero.js';
import './components/mission.js';
import './components/what-we-do.js';
import './components/objectives.js';
import './components/who-we-are.js';
import './components/contact.js';
import './components/site-footer.js';

// Utilities
import { initScrollObserver } from './utils/scroll-observer.js';

// Initialize scroll reveal animations
initScrollObserver();

console.log('GNSC Main Web Components & Scroll Observer loaded successfully.');
