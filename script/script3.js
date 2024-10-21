const cardData = [
  {
    text: "📕 CSS Eksternal memungkinkan Anda mendefinisikan CSS di file terpisah.",
    hueA: 340,
    hueB: 10
  },
  {
    text: "📙 Ini membuat struktur HTML Anda bersih dan dapat digunakan kembali.",
    hueA: 20,
    hueB: 40
  },
  {
    text: "📗 Disini kita dapat menghubungkan beberapa file HTML ke satu file CSS.",
    hueA: 60,
    hueB: 90
  },
  {
    text: "📒 Perubahan di CSS diterapkan secara global ke semua file HTML yang terhubung.",
    hueA: 80,
    hueB: 120
  },
  {
    text: "📚 CSS Eksternal memudahkan untuk memelihara proyek yang lebih besar.",
    hueA: 100,
    hueB: 140
  }
];

function hue(h) {
  return `hsl(${h}, 100%, 50%)`; 
}

function createCard({ text, hueA, hueB }) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');

  const splash = document.createElement('div');
  splash.classList.add('splash');
  splash.style.background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`; 

  const card = document.createElement('div');
  card.classList.add('card');
  card.textContent = text;

  cardContainer.appendChild(splash);
  cardContainer.appendChild(card);
  document.getElementById('root').appendChild(cardContainer);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        card.style.animation = 'springAnimation 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards';
      }
    });
  }, { threshold: 0.8 });

  observer.observe(cardContainer);
}

cardData.forEach(data => createCard(data));