// Global Web Components
import './components/site-header.js';
import './components/site-footer.js';

// Presentations Page Components
import './components/presentations/presentation-hero.js';
import './components/presentations/presentation-filter.js';
import './components/presentations/presentation-card.js';
import './components/presentations/presentation-grid.js';

// Utilities
import { initScrollObserver } from './utils/scroll-observer.js';

// Initialize scroll reveal animations
initScrollObserver();

console.log('GNSC Presentations Page & Filter Bar initialized.');
