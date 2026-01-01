const tg = window.Telegram?.WebApp || {
  expand: () => console.log('tg.expand()'),
  close: () => console.log('tg.close()')
};

tg.expand();

const intro = document.getElementById('intro');
const cardsScreen = document.getElementById('cardsScreen');
const resultScreen = document.getElementById('resultScreen');
const cardContainer = document.getElementById('cardContainer');
const likedList = document.getElementById('likedList');

let interests = ['Музыка', 'Спорт', 'Искусство', 'Путешествия', 'Технологии', 'Кулинария', 'Фотография', 'Чтение'];
let liked = [];
let currentIndex = 0;

function start() {
  intro.classList.add('hidden');
  cardsScreen.classList.remove('hidden');
  showCard();
}

function showCard() {
  cardContainer.innerHTML = '';
  if (currentIndex >= interests.length) return showResult();
  const card = document.createElement('div');
  card.className = 'card';
  card.textContent = interests[currentIndex];
  cardContainer.appendChild(card);
}

function like() {
  liked.push(interests[currentIndex]);
  currentIndex++;
  showCard();
}

function skip() {
  currentIndex++;
  showCard();
}

function showResult() {
  cardsScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  likedList.innerHTML = liked.map(item => `<li>${item}</li>`).join('');
}

function finish() {
  tg.close();
}

// делаем функции доступными для onclick
window.start = start;
window.like = like;
window.skip = skip;
window.finish = finish;
