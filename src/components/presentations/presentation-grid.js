class PresentationGrid extends HTMLElement {
  constructor() {
    super();
    this.presentations = [
      {
        id: 'p1',
        image: '../assets/academic_speaker.png',
        tag: 'Genomics & Biotechnology',
        continent: 'North America',
        name: 'Dr. Ramesh Adhikari',
        role: 'Professor of Human Genetics, Harvard University',
        title: 'Advancing Human Genomics: Decoding Disease Pathways in Alpine Populations',
        description: 'An in-depth analysis of single-nucleotide polymorphism (SNP) data and CRISPR gene editing models targeting cardiovascular resilience in high-altitude communities.',
        date: 'July 2024 Session',
        year: '2024'
      },
      {
        id: 'p2',
        image: '../assets/gnsc_main.png',
        tag: 'Climate & Environmental Science',
        continent: 'Europe',
        name: 'Dr. Sunita Sharma',
        role: 'Senior Research Fellow, ETH Zürich',
        title: 'Himalayan Hydrology & Glacier Melt Dynamics: A 50-Year Predictive Model',
        description: 'Presenting satellite remote sensing and hydrological simulations tracking glacial lake outburst flood risks across the Hindu Kush-Himalaya range.',
        date: 'June 2024 Session',
        year: '2024'
      },
      {
        id: 'p3',
        image: '../assets/4.png',
        tag: 'Artificial Intelligence & NLP',
        continent: 'Europe',
        name: 'Dr. Bikash Thapa',
        role: 'AI Research Scientist, Oxford University',
        title: 'LLM Alignment for Low-Resource Languages: Neural Translation Models for Nepali',
        description: 'Exploring fine-tuning strategies, byte-pair tokenization, and cross-lingual transfer learning techniques optimized for South Asian language families.',
        date: 'May 2024 Session',
        year: '2024'
      },
      {
        id: 'p4',
        image: '../assets/mission_background.png',
        tag: 'Sustainable Energy',
        continent: 'Europe',
        name: 'Dr. Pradeep Shrestha',
        role: 'Chair of Electrical Engineering, Imperial College',
        title: 'Smart Solar Microgrids: Decentralized Energy Storage in Rugged Terrains',
        description: 'Demonstrating battery management algorithms and micro-hydro integration designed for mountainous infrastructure and remote rural electrification.',
        date: 'April 2024 Session',
        year: '2024'
      },
      {
        id: 'p5',
        image: '../assets/gnsc_main.png',
        tag: 'Genomics & Biotechnology',
        continent: 'Asia',
        name: 'Dr. Anjana Karki',
        role: 'Director of Molecular Biology, Kathmandu University',
        title: 'Epidemiological Surveillance & Genomic Sequencing of Endemic Pathogens',
        description: 'Highlighting rapid field sequencing frameworks and bioinformatic pipelines developed for regional disease monitoring.',
        date: 'November 2023 Session',
        year: '2023'
      },
      {
        id: 'p6',
        image: '../assets/5.png',
        tag: 'Climate & Environmental Science',
        continent: 'Oceania',
        name: 'Dr. Niranjan Paudel',
        role: 'Associate Professor of Ecology, University of Melbourne',
        title: 'Biodiversity Corridors & Forest Ecosystem Resilience in Changing Climates',
        description: 'Empirical field studies tracking species migration patterns and forest canopy dynamics across altitude gradients.',
        date: 'August 2023 Session',
        year: '2023'
      }
    ];
  }

  connectedCallback() {
    this.render();
    this.bindFilterListener();
  }

  render() {
    this.innerHTML = `
      <section class="section presentations-section">
        <div class="container">
          <div class="presentations-grid" id="grid-container">
            ${this.presentations.map(p => `
              <gnsc-presentation-card
                image="${p.image}"
                tag="${p.tag}"
                continent="${p.continent}"
                name="${p.name}"
                role="${p.role}"
                title="${p.title}"
                description="${p.description}"
                date="${p.date}"
                year="${p.year}">
              </gnsc-presentation-card>
            `).join('')}
          </div>
          <div id="no-results-msg" class="no-results-message hidden">
            <p>No presentations found matching the selected filter criteria.</p>
          </div>
        </div>
      </section>
    `;
  }

  bindFilterListener() {
    document.addEventListener('gnsc-filter-change', (e) => {
      const { continent, topic, year } = e.detail;
      const cards = this.querySelectorAll('gnsc-presentation-card');
      let visibleCount = 0;

      cards.forEach(card => {
        const cardContinent = card.getAttribute('continent');
        const cardTopic = card.getAttribute('tag');
        const cardYear = card.getAttribute('year');

        const matchContinent = (continent === 'all' || cardContinent === continent);
        const matchTopic = (topic === 'all' || cardTopic === topic);
        const matchYear = (year === 'all' || cardYear === year);

        if (matchContinent && matchTopic && matchYear) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      const noResultsMsg = this.querySelector('#no-results-msg');
      if (noResultsMsg) {
        if (visibleCount === 0) {
          noResultsMsg.classList.remove('hidden');
        } else {
          noResultsMsg.classList.add('hidden');
        }
      }
    });
  }
}

customElements.define('gnsc-presentation-grid', PresentationGrid);
