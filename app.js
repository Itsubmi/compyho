const tg = window.Telegram?.WebApp || { expand: ()=>{}, close: ()=>{} };
tg.expand();

const intro = document.getElementById('intro');
const cardsScreen = document.getElementById('cardsScreen');
const resultScreen = document.getElementById('resultScreen');
const interestsContainer = document.getElementById('interestsContainer');
const likedList = document.getElementById('likedList');
const finishBtn = document.getElementById('finishBtn');

let interests = [
  'Музыка', 'Спорт', 'Искусство', 'Путешествия', 
  'Технологии', 'Кулинария', 'Фотография', 'Чтение'
];

let selected = [];

function start() {
  intro.classList.add('hidden');
  cardsScreen.classList.remove('hidden');
  showInterests();
}

function showInterests() {
  interestsContainer.innerHTML = '';
  interests.forEach(interest => {
    const btn = document.createElement('button');
    btn.textContent = interest;
    if (selected.includes(interest)) btn.classList.add('selected');
    btn.onclick = () => toggleInterest(interest, btn);
    interestsContainer.appendChild(btn);
  });
}

function toggleInterest(interest, btn) {
  if (selected.includes(interest)) {
    selected = selected.filter(i => i !== interest);
    btn.classList.remove('selected');
  } else {
    selected.push(interest);
    btn.classList.add('selected');
  }
  finishBtn.classList.toggle('hidden', selected.length === 0);
}

function finish() {
  cardsScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  likedList.innerHTML = selected.map(i => `<li>${i}</li>`).join('');
  // tg.close(); // можно закрывать, если нужно
}

window.start = start;
window.finish = finish;
