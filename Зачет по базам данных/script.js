// Массив случайных описаний для футера
const FOOTER_TEXTS = [
  "Результаты анонимны. Как твоё лицо, когда понимаешь, что выбрал не тот вариант",
  "Наши вопросы такие же простые, как твоё объяснение, почему опоздал",
  "Если все ответы правильные — проверь, не спишь ли ты. Это слишком хорошо, чтобы быть правдой",
  "Этот тест прошли 3 человека: ты, я и тот парень, который случайно нажал 'Далее'",
  "Результаты важны примерно как мнение голубя о квантовой физике",
  "Если завалил тест — закажи пиццу. Пицца никогда не подводит",
  "Инопланетяне смотрят на твои результаты и думают: 'Ну хоть кто-то умный на этой планете!'",
  " Если все ответы неправильные — не расстраивайся! Ты просто создал свой уникальный стиль",
  "Внимание! Слишком высокий балл может вызвать зависть у однокурсников",
  "Наш тест как цирк: иногда смешно, иногда страшно, но всегда интересно!",
  "'А можно пересдать?' — самый популярный вопрос после этого теста"
];

// Функция для обновления текста футера
function updateFooterText() {
  const randomIndex = Math.floor(Math.random() * FOOTER_TEXTS.length);
  const footer = document.querySelector('.footer small');
  if (footer) {
    footer.textContent = FOOTER_TEXTS[randomIndex];
  }
}

// Вопросы: текст и варианты (правильный вариант скрыт в correctHash)
const QUESTIONS = [
  {
    q: "Что такое база данных?",
    opts: [
      "Совокупность организованных данных, предназначенных для хранения и быстрого доступа",
      "Случайный набор файлов на диске",
      "Веб-страница с информацией",
      "Текстовый документ"
    ],
    correctHash: "58d984562b4549e30f9e6f096b208d3dc214b39e3c04db120bac3d8fe8206039",
    correctAnswer: "Совокупность организованных данных, предназначенных для хранения и быстрого доступа"
  },
  {
    q: "Какие существуют основные модели баз данных?",
    opts: [
      "Реляционная, иерархическая, сетевая, объектно-ориентированная",
      "Только реляционная",
      "Только файловая",
      "Только графовая"
    ],
    correctHash: "969acf1bac715166ed6d00379ce349ef88fe0fefb61d58e7bb2f9e2c9a265ab9",
    correctAnswer: "Реляционная, иерархическая, сетевая, объектно-ориентированная"
  },
  {
    q: "Что представляет собой реляционная модель данных?",
    opts: [
      "Модель, основанная на таблицах и отношениях между ними",
      "Модель, основанная на деревьях",
      "Модель, хранящая данные в файлах",
      "Модель для визуализации данных"
    ],
    correctHash: "d19f6065cd742c70fe70a6edda0fd10da86f5989f382be01fd5ef1b47ad31e27",
    correctAnswer: "Модель, основанная на таблицах и отношениях между ними"
  },
  {
    q: "Что такое уникальный идентификатор в таблице?",
    opts: [
      "Значение, однозначно идентифицирующее запись в таблице",
      "Поле для большого текста",
      "Тип индекса",
      "Атрибут для форматирования"
    ],
    correctHash: "904c29e632e69ba7d363e346a5daf95eaa3a7eb7a2ea1c462f6cc292a572ec98",
    correctAnswer: "Значение, однозначно идентифицирующее запись в таблице"
  },
  {
    q: "Что такое запись (строка таблицы)?",
    opts: [
      "Набор значений в столбцах, представляющий один объект или элемент",
      "Название таблицы",
      "Индекс в таблице",
      "Тип данных"
    ],
    correctHash: "cd4933eec2e77bbb9ad14bc3ce6b53089555ea1e4dd42c709a7d5acb3858698c",
    correctAnswer: "Набор значений в столбцах, представляющий один объект или элемент"
  },
  {
    q: "Что такое первичный ключ?",
    opts: [
      "Атрибут или набор атрибутов, уникально идентифицирующий запись",
      "Поле для комментариев",
      "Внешняя ссылка на другую таблицу",
      "Индекс для ускорения поиска"
    ],
    correctHash: "86a2957cbe7ddb9aa0b1c98b78dfd8c0f2c93fc389f50736a2262d1ab14f88a2",
    correctAnswer: "Атрибут или набор атрибутов, уникально идентифицирующий запись"
  },
  {
    q: "Что такое внешний ключ?",
    opts: [
      "Поле, которое ссылается на первичный ключ другой таблицы",
      "Поле для хранения изображений",
      "Индекс с уникальными значениями",
      "Тип связи 'многие ко многим'"
    ],
    correctHash: "7ef9a4d35b6bf6865845de60e211e2598c5f3c1470eeb47633612f6a40ba1cb3",
    correctAnswer: "Поле, которое ссылается на первичный ключ другой таблицы"
  },
  {
    q: "Что такое связь между таблицами?",
    opts: [
      "Логическая связь, которая связывает записи двух таблиц",
      "Визуальное выделение строк",
      "Тип данных",
      "Способ шифрования"
    ],
    correctHash: "a60d4089d100cfb71ba2111cb1abd73a38113e93e2af5f8ec6246d6e3387d41b",
    correctAnswer: "Логическая связь, которая связывает записи двух таблиц"
  },
  {
    q: "Какая команда SQL используется для добавления записей?",
    opts: [
      "INSERT INTO ... VALUES ...",
      "CREATE DATABASE",
      "UPDATE ... SET ...",
      "DELETE FROM ..."
    ],
    correctHash: "47fbd0266932f387d9d22309d9398989f9955ed4978cf73431a4428c6dfa3827",
    correctAnswer: "INSERT INTO ... VALUES ..."
  },
  {
    q: "Какая команда SQL используется для редактирования записей?",
    opts: [
      "UPDATE ... SET ... WHERE ...",
      "SELECT * FROM ...",
      "INSERT INTO ...",
      "DROP TABLE ..."
    ],
    correctHash: "27d27c461937f428bec067c2c87cdd12bc31d5ac4ac8b4f8558b2a49166d0782",
    correctAnswer: "UPDATE ... SET ... WHERE ..."
  },
  {
    q: "Какая команда SQL используется для удаления записей?",
    opts: [
      "DELETE FROM ... WHERE ...",
      "TRUNCATE TABLE ...",
      "ALTER TABLE ...",
      "INSERT INTO ..."
    ],
    correctHash: "655908f7aaeb69d0b20a167edc1a988d6dcfa8782f82370ce6996d98e661313f",
    correctAnswer: "DELETE FROM ... WHERE ..."
  },
  {
    q: "Какой тег HTML задаёт основную структуру страницы (каркас документа)?",
    opts: [
      "<!doctype html>, <html>, <head>, <body>",
      "<div>, <span>, <section>, <article>",
      "<table>, <tr>, <td>, <th>",
      "<script>, <style>, <link>, <meta>"
    ],
    correctHash: "6a3eedc40687c7d78ae876d68a9fa84bb65ac92bfc12a2eb5f614548ba8d0826",
    correctAnswer: "<!doctype html>, <html>, <head>, <body>"
  },
  {
    q: "Какой тег HTML используется для создания заголовка страницы?",
    opts: [
      "<h1>",
      "<title>",
      "<header>",
      "<hgroup>"
    ],
    correctHash: "0f3b6ce8a3caa52039b1d79d3bdc5de01eff6433d28cb5f137f8e67b9a57aa75",
    correctAnswer: "<title>"
  },
  {
    q: "Какой тег HTML используется для вставки изображения?",
    opts: [
      "<img>",
      "<picture>",
      "<figure>",
      "<svg>"
    ],
    correctHash: "4f1078bfe5f25b91dcab21c1b625a3f38634ad5cf4cc60bd7636668fb275702e",
    correctAnswer: "<img>"
  },
  {
    q: "Какой тег HTML используется для добавления текста под заголовком?",
    opts: [
      "<p>",
      "<span>",
      "<div>",
      "<small>"
    ],
    correctHash: "33f2799467177287a29260780a107ac98ea63dd6165f67fcc0d74767d0a82090",
    correctAnswer: "<p>"
  },
  {
    q: "Какой тег HTML используется для указания адреса?",
    opts: [
      "<address>",
      "<p>",
      "<link>",
      "<location>"
    ],
    correctHash: "da4430f0836d2eaa905cf9bc14822c33e8c89bc793957c181f32becb6d238823",
    correctAnswer: "<address>"
  },
  {
    q: "Какой тег HTML используется для создания кнопки?",
    opts: [
      "<button>",
      "<input type='button'>",
      "<a role='button'>",
      "<div class='btn'>"
    ],
    correctHash: "d685d928228b04c9a9e911bdf0fe339b3a136e257e8e59ab2c46747271a830be",
    correctAnswer: "<button>"
  },
  {
    q: "Какой тег HTML используется для создания таблицы?",
    opts: [
      "<table>",
      "<grid>",
      "<layout>",
      "<list>"
    ],
    correctHash: "92ad031534baf526429b739da7d4b03a62ee8f4f3260d919bdb85c471b5d3244",
    correctAnswer: "<table>"
  },
  {
    q: "Какой тег HTML используется для создания маркированного списка?",
    opts: [
      "<ul>",
      "<ol>",
      "<li>",
      "<menu>"
    ],
    correctHash: "3988411e716c32c2021227e8c538a8334075eadf82ac452c4878969ffd8d2244",
    correctAnswer: "<ul>"
  },
  {
    q: "Какой тег HTML используется для создания нумерованного списка?",
    opts: [
      "<ol>",
      "<ul>",
      "<dl>",
      "<li>"
    ],
    correctHash: "dab4f975924123450096b9004f7e150883b35b568454a66fe8c3a70f9d2e2d4b",
    correctAnswer: "<ol>"
  },
 
];

// ---------- логика теста ----------
let state = { pool: [], index: 0, answers: [] };
let timerInterval = null;
let timeLeft = 15 * 60; // 15 минут в секундах

const el = {
  start: document.getElementById("start"),
  timer: document.getElementById("timer"),
  timerText: document.getElementById("timer-text"),
  startBtn: document.getElementById("start-btn"),
  qnum: document.getElementById("question-number"),
  qtext: document.getElementById("question-text"),
  options: document.getElementById("options"),
  prevBtn: document.getElementById("prev-btn"),
  nextBtn: document.getElementById("next-btn"),
  finishBtn: document.getElementById("finish-btn"),
  progressBar: document.getElementById("progress-bar"),
  resultSection: document.getElementById("result"),
  quizSection: document.getElementById("quiz"),
  scoreText: document.getElementById("score-text"),
  gradeText: document.getElementById("grade-text"),
  retryBtn: document.getElementById("retry-btn"),
  showAnswersBtn: document.getElementById("show-answers-btn"),
  detailed: document.getElementById("detailed")
};

// Таймер
function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishTest();
    } else if (timeLeft <= 60) {
      el.timer.classList.add('warning');
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  el.timerText.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetTimer() {
  stopTimer();
  timeLeft = 15 * 60;
  el.timer.classList.remove('warning');
}

function shuffleArray(a){
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
}

// prepare pool: clone, shuffle questions and options
function preparePool(){
  const cloned = QUESTIONS.map(q=>({
    q: q.q,
    opts: [...q.opts],
    correctHash: q.correctHash,
    correctAnswer: q.correctAnswer
  }));
  shuffleArray(cloned);
  cloned.forEach(qo => shuffleArray(qo.opts));
  state.pool = cloned;
  state.index = 0;
  state.answers = new Array(cloned.length).fill(null);
}

function renderQuestion(){
  const i = state.index;
  const total = state.pool.length;
  const item = state.pool[i];
  el.qnum.textContent = `Вопрос ${i+1} из ${total}`;
  el.qtext.textContent = item.q;
  el.options.innerHTML = "";

  item.opts.forEach(optText=>{
    const div = document.createElement("div");
    div.className = "option";
    div.tabIndex = 0;
    div.textContent = optText;
    div.addEventListener("click", ()=> selectOption(optText, div));
    div.addEventListener("keydown", (e)=>{ if(e.key==="Enter"||e.key===" ") selectOption(optText, div); });
    if(state.answers[i] === optText) div.classList.add("selected");
    el.options.appendChild(div);
  });

  const pct = Math.round((i / state.pool.length) * 100);
  el.progressBar.style.width = `${pct}%`;

  el.prevBtn.disabled = i === 0;
  el.nextBtn.disabled = state.answers[i] === null;
  el.finishBtn.classList.toggle("hidden", i !== state.pool.length - 1);
  el.nextBtn.classList.toggle("hidden", i === state.pool.length - 1);
}

function selectOption(optText, div){
  [...el.options.children].forEach(c=>c.classList.remove("selected"));
  div.classList.add("selected");
  state.answers[state.index] = optText;
  el.nextBtn.disabled = false;
}

// Обработчики событий
el.startBtn.addEventListener("click", startTest);
el.prevBtn.addEventListener("click", ()=>{
  if(state.index>0){ state.index--; renderQuestion(); }
});
el.nextBtn.addEventListener("click", ()=>{
  if(state.answers[state.index] === null) return;
  if(state.index < state.pool.length -1){ state.index++; renderQuestion(); }
});
el.finishBtn.addEventListener("click", finishTest);
el.retryBtn.addEventListener("click", startOver);
el.showAnswersBtn.addEventListener("click", showCorrectAnswers);

function startTest() {
  el.start.classList.add("hidden");
  el.quizSection.classList.remove("hidden");
  el.timer.classList.remove("hidden");
  preparePool();
  resetTimer();
  startTimer();
  renderQuestion();
}

function startOver() {
  el.resultSection.classList.add("hidden");
  el.start.classList.remove("hidden");
  el.timer.classList.add("hidden");
  resetTimer();
  el.detailed.classList.add("hidden");
  el.showAnswersBtn.classList.remove("hidden");
  updateFooterText(); // Добавь эту строку
}

// Функция для определения оценки
function getGrade(correctCount, total) {
  const percentage = (correctCount / total) * 100;
  
  if (percentage >= 90) return { grade: "Отлично (5)", color: "var(--excellent)" };
  if (percentage >= 75) return { grade: "Хорошо (4)", color: "var(--good)" };
  if (percentage >= 55) return { grade: "Удовлетворительно (3)", color: "var(--satisfactory)" };
  return { grade: "Неудовлетворительно (2)", color: "var(--unsatisfactory)" };
}

// SHA-256 helper
async function sha256hex(str){
  const enc = new TextEncoder();
  const data = enc.encode(str);
  const hash = await crypto.subtle.digest('SHA-256', data);
  const arr = Array.from(new Uint8Array(hash));
  return arr.map(b=>b.toString(16).padStart(2,'0')).join('');
}

async function finishTest(){
  stopTimer();
  el.quizSection.classList.add("hidden");
  el.resultSection.classList.remove("hidden");
  el.timer.classList.add("hidden");

  let correctCount = 0;
  const details = [];

  for(let i=0;i<state.pool.length;i++){
    const q = state.pool[i];
    const chosen = state.answers[i];
    let isCorrect = false;
    if(chosen !== null){
      const h = await sha256hex(chosen);
      if(h === q.correctHash) { isCorrect = true; correctCount++; }
    }
    details.push({ 
      q: q.q, 
      chosen: chosen, 
      correct: isCorrect,
      correctAnswer: q.correctAnswer
    });
  }

  const pct = Math.round((correctCount / state.pool.length) * 100);
  const gradeInfo = getGrade(correctCount, state.pool.length);
  
  el.scoreText.textContent = `${correctCount} из ${state.pool.length} (${pct}%)`;
  el.scoreText.style.color = gradeInfo.color;
  
  el.gradeText.textContent = gradeInfo.grade;
  el.gradeText.style.color = gradeInfo.color;

  // Сохраняем детали для показа ответов
  state.details = details;
}

function showCorrectAnswers() {
  el.detailed.classList.remove("hidden");
  el.showAnswersBtn.classList.add("hidden");
  
  el.detailed.innerHTML = `
    <h3>Подробные результаты:</h3>
    ${state.details.map((d, idx) => `
      <div class="answer-item ${d.correct ? 'answer-correct' : 'answer-incorrect'}">
        <div class="answer-question">${idx + 1}. ${escapeHtml(d.q)}</div>
        <div class="answer-user">Ваш ответ: ${d.chosen ? escapeHtml(d.chosen) : 'Не ответили'}</div>
        <div class="answer-correct-answer">Правильный ответ: ${escapeHtml(d.correctAnswer)}</div>
        <div style="margin-top: 8px; font-size: 13px; color: ${d.correct ? 'var(--excellent)' : 'var(--unsatisfactory)'};">
          ${d.correct ? '✅ Верно' : '❌ Неверно'}
        </div>
      </div>
    `).join('')}
  `;
}

function escapeHtml(s){
  if(!s) return "";
  return s.replace(/[&<>"']/g, m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[m]);
}

// Инициализация
resetTimer();
updateFooterText(); // Добавь эту строку