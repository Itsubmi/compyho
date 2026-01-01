const tg = window.Telegram.WebApp;
tg.expand();

function start() {
  document.getElementById('startBtn').classList.add('hidden');
  document.getElementById('options').classList.remove('hidden');
}

function selectOption(choice) {
  document.getElementById('options').classList.add('hidden');

  const result = document.getElementById('result');
  result.classList.remove('hidden');

  result.innerHTML = `
    <h2>Ты сейчас в точке ${choice}</h2>
    <p>Это нормальное состояние. Можно просто побыть здесь.</p>
    <button onclick="finish()">Готово</button>
  `;
}

function finish() {
  tg.close();
}
