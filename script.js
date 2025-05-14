let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let totalQuestions = quizData.length;
let isAnswered = false;
let shuffledIndexes = [];               // シャッフル済みのインデックス配列
let incorrectIndexes = []; // 不正解の問題インデックスを記録

//タイマー用
let timerInterval; // タイマーのインターバルIDを管理
let elapsedTime = 0; // 経過時間（秒）
const timeLimit = 90 * 60; // 制限時間: 90分（秒単位）
const warningTime = timeLimit - 10 * 60; // 10分前: 80分（秒単位）


//*************************************
// 問題をロードする関数
function loadQuestion() {
  //  const currentQuestion = quizData[currentQuestionIndex];
  const currentQuestion = quizData[shuffledIndexes[currentQuestionIndex]]; // シャッフル済みインデックスから問題を取得

  // 選択肢をシャッフル
  shuffleOptions(currentQuestion);

  // 問題表示
  const questionContainer = document.getElementById("question-container");
  let optionsHTML = "";

  // 回答選択肢チェックボックスを生成
  currentQuestion.options.forEach((option, index) => {
    optionsHTML += `
      <div class="form-check mb-2">
        <input type="checkbox" class="btn-check" id="option${index}" autocomplete="off" />
        <label class="btn btn-outline-primary w-100" for="option${index}">${option}</label>
      </div>`;
  });

  questionContainer.innerHTML = `<p>${currentQuestion.question}</p>${optionsHTML}`;
  document.getElementById("explanation-container").innerHTML = '';

  // 進捗ステータス更新
  updateStatus();

  // 最後の問題かどうかでボタンのテキストを切り替え
  if (currentQuestionIndex === totalQuestions - 1) {
    document.getElementById("next-button").textContent = "結果を表示"; // 次のボタンのキャプションを変更
    toggleButtons(true, false, false); // 回答ボタンのみ表示
  } else {
    document.getElementById("next-button").textContent = "次の問題"; // 通常時のキャプション
    toggleButtons(true, false, false); // 回答ボタンのみ表示
  }

  // チェックボックスのトグル動作追加（correctAnswerが配列かどうかで判定）
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  if (!Array.isArray(currentQuestion.correctAnswer)) {
    // 単一選択問題の場合
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", (e) => {
        if (e.target.checked) {
          checkboxes.forEach((box) => {
            if (box !== e.target) box.checked = false; // 他の選択肢を解除
          });
        }
      });
    });
  }

  // タイマーをリセット＆スタート
  if (currentQuestionIndex === 0) {
    startTimer();
  }
}

//*************************************
// 回答送信、成否判定解説表示する関数
function submitAnswer() {
  if (isAnswered) return;

//  const currentQuestion = quizData[currentQuestionIndex];
  const currentQuestion = quizData[shuffledIndexes[currentQuestionIndex]];
  const selectedAnswers = [];

  for (let i = 0; i < currentQuestion.options.length; i++) {
    if (document.getElementById(`option${i}`).checked) {
      selectedAnswers.push(i);
    }
  }

  let isCorrect = false;
  if (Array.isArray(currentQuestion.correctAnswer)) {
    isCorrect = JSON.stringify(selectedAnswers.sort()) === JSON.stringify(currentQuestion.correctAnswer.sort());
  } else {
    isCorrect = selectedAnswers.length === 1 && selectedAnswers[0] === currentQuestion.correctAnswer;
  }

  const explanationContainer = document.getElementById("explanation-container");
  // アイコンとアニメーションを組み込んだHTMLを生成
  const feedbackHTML = isCorrect
  ? `<div class="d-flex align-items-center justify-content-center mt-2">
       <i class="bi bi-heart-fill text-success animate__animated animate__bounceIn" style="font-size: 2rem; animation-duration: 0.8s;"></i>
       <p class="text-success fw-bold ms-2 mb-0" style="font-size: 1.5rem; line-height: 1;">正解！</p>
     </div>
     <p class="mt-2 text-center">${currentQuestion.explanation}</p>`
  : `<div class="d-flex align-items-center justify-content-center mt-2">
       <i class="bi bi-emoji-dizzy-fill text-danger animate__animated animate__headShake" style="font-size: 2rem; animation-duration: 0.8s;"></i>
       <p class="text-danger fw-bold ms-2 mb-0" style="font-size: 1.5rem; line-height: 1;">不正解。</p>
     </div>
     <p class="mt-2 text-center">${currentQuestion.explanation}</p>`;

  explanationContainer.innerHTML = feedbackHTML;

  if (isCorrect) {
    score += currentQuestion.score;
    correctAnswers++;
  } else{
    const currentIndex = shuffledIndexes[currentQuestionIndex];
    if (!incorrectIndexes.includes(currentIndex)) {
      incorrectIndexes.push(currentIndex); // 重複しない場合のみ追加
    }
//    incorrectIndexes.push(shuffledIndexes[currentQuestionIndex]); // 不正解のインデックスを記録
  }

  updateStatus(true);
  isAnswered = true;

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox, index) => {

    const label = document.querySelector(`label[for="option${index}"]`);
    const isCorrectOption = Array.isArray(currentQuestion.correctAnswer)
      ? currentQuestion.correctAnswer.includes(index)
      : index === currentQuestion.correctAnswer;

    // 正解・不正解の背景色を適用
    if (isCorrectOption) {
      label.classList.add("bg-success-subtle", "text-success");
    } else {
      label.classList.add("bg-danger-subtle", "text-danger");
    }

    // 選択済みの項目に太い内側枠線を追加
    if (checkbox.checked) {
      label.style.outline = "3px solid #007bff"; // 太い青色の枠線
      label.style.outlineOffset = "-3px"; // 枠線を内側に寄せる
    }

    // すべてのチェックボックスをグレーアウト
    checkbox.disabled = true;
  });

  // 次のボタンを表示。最後の問題の場合はキャプションが「結果を表示」
  toggleButtons(false, true, false);
}


//*************************************
// 次の問題に進む関数
function nextQuestion() {
  // 最後の問題の場合は結果を表示
  if (currentQuestionIndex === totalQuestions - 1) {
    showResult();
  } else {
    currentQuestionIndex++;
    loadQuestion();
    isAnswered = false;
  }
}

//*************************************
// 状態を更新する関数
function updateStatus(updateCount = false) {
  const correctRate = Math.floor(
    (correctAnswers / (currentQuestionIndex + (updateCount ? 1 : 0))) * 100
  );

  // 現在の問題番号と全体の問題数
  const currentProgress = `${currentQuestionIndex + 1} / ${totalQuestions}`;
  const correctRateText = isNaN(correctRate) ? "0%" : `${correctRate}%`;

  // プログレスバーの進捗を更新
  const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  document.getElementById("question-progress-bar").style.width = `${progressPercent}%`;
  document.getElementById("correct-rate-progress-bar").style.width = `${correctRate}%`;

  // テキスト要素の内容を更新（左端と中央）
  const progressTextElements = document.querySelectorAll("#question-progress-text");
  const correctRateTextElements = document.querySelectorAll("#correct-rate-progress-text");

  progressTextElements.forEach((element) => {
    element.textContent = currentProgress;
  });

  correctRateTextElements.forEach((element) => {
    element.textContent = correctRateText;
  });
}

//*************************************
// 結果を表示する関数
function showResult() {
  stopTimer(); // 結果表示時にタイマーを停止

  const resultContainer = document.getElementById("result-container");
  const finalScore = (correctAnswers / totalQuestions) * 100;
  const timeMinutes = Math.floor(elapsedTime / 60);
  const timeSeconds = elapsedTime % 60;

  let performanceMessage = "";
  let timeMessage = "";

  // 正解率に応じたメッセージ
  if (finalScore === 100) {
    performanceMessage = "<p class='text-success fw-bold'>素晴らしい！全問正解です！</p>";
  } else if (finalScore >= 80) {
    performanceMessage = "<p class='text-primary fw-bold'>よくできました！高得点を達成しました！</p>";
  } else if (finalScore >= 70) {
    performanceMessage = "<p class='text-warning fw-bold'>合格ライン付近です。もう少し頑張りましょう。</p>";
  } else {
    performanceMessage = "<p class='text-danger fw-bold'>残念ながら、合格ラインには届きませんでした。</p>";
  }

  // 経過時間に応じたメッセージ
  if (elapsedTime > 90 * 60) {
    timeMessage = "<p class='text-danger'>制限時間を超過しました。時間配分に気をつけましょう。</p>";
  } else if (elapsedTime > 80 * 60) {
    timeMessage = "<p class='text-warning'>制限時間ギリギリでした。次回はもう少し早く解き終えましょう。</p>";
  } else {
    timeMessage = "<p class='text-success'>時間に余裕を持って終えられました。</p>";
  }

  // 結果の内容をHTMLに出力
  document.getElementById("quiz-result-container").style.display = "none"; // 問題表示を非表示
  resultContainer.style.display = "block"; // 結果表示コンテナを表示

  resultContainer.innerHTML = `
  <div class="text-center">
    <h2 class="fw-bold">試験終了</h2>
    ${performanceMessage}
    <p>得点: <span class="fw-bold">${score}点</span></p>
    <p>正解数: <span class="fw-bold">${correctAnswers} / ${totalQuestions}</span></p>
    <p>正解率: <span class="fw-bold">${finalScore.toFixed(2)}%</span></p>
    <p>経過時間: <span class="fw-bold">${timeMinutes}分${timeSeconds}秒</span></p>
    ${timeMessage}
    ${
      incorrectIndexes.length > 0
        ? `<button class="btn btn-info mt-3" data-bs-toggle="modal" data-bs-target="#incorrectModal" onclick="populateIncorrectQuestions()">不正解の問題を閲覧</button>
           <button class="btn btn-warning mt-3" onclick="restartTest(true)">不正解の問題だけ再挑戦</button>`
        : ""
    }
  </div>
`;

  // 不正解の問題をモーダルに表示
  showIncorrectQuestions();

  toggleButtons(false, false, true); // 再テストボタンのみ表示
}

//*************************************
// テストを再開する関数
function restartTest(retryIncorrect = false) {
  score = 0;
  correctAnswers = 0;
  currentQuestionIndex = 0;

  if (retryIncorrect && incorrectIndexes.length > 0) {
    // 不正解の問題だけで再試行
    shuffledIndexes = [...new Set(incorrectIndexes)]; // 重複を排除
    shuffleArray(shuffledIndexes); // シャッフルを追加
    totalQuestions = shuffledIndexes.length; // 不正解の問題数を更新
    incorrectIndexes = []; // 不正解リストをリセット
  } else {
    // 通常のシャッフル
    shuffledIndexes = generateShuffledIndexes(quizData.length);
    totalQuestions = shuffledIndexes.length; // 全体の問題数を更新
    incorrectIndexes = []; // 不正解リストをリセット
  }

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
    checkbox.disabled = false;
    checkbox.classList.remove('disabled-input');
  });

  document.getElementById("explanation-container").innerHTML = '';
  isAnswered = false;

//  shuffleArray(quizData); // 再テスト時にもシャッフル
  loadQuestion();
  document.getElementById("result-container").style.display = "none"; // 結果表示を非表示
  document.getElementById("quiz-result-container").style.display = "block"; // 問題表示を再表示
  toggleButtons(true, false, false); // 回答ボタンのみ表示

  // タイマーをリセットしてスタート
  startTimer();

}

//*************************************
// 選択肢をシャッフルし、正解インデックスを更新する関数
function shuffleOptions(question) {
  const optionIndexes = question.options.map((_, index) => index); // 元のインデックス配列
  shuffleArray(optionIndexes); // インデックスをシャッフル

  // 新しい順番に基づいて選択肢を再構築
  question.options = optionIndexes.map(index => question.options[index]);

  // 正解インデックスを更新
  if (Array.isArray(question.correctAnswer)) {
    question.correctAnswer = question.correctAnswer.map(index => optionIndexes.indexOf(index));
  } else {
    question.correctAnswer = optionIndexes.indexOf(question.correctAnswer);
  }
}

//*************************************
// 問題インデックスをシャッフルする関数(順序決定)
function generateShuffledIndexes(total) {
  const indexes = Array.from({ length: total }, (_, i) => i); // 0からtotal-1までの配列を作成
  shuffleArray(indexes); // 既存のshuffleArray関数を利用してシャッフル
  return indexes;
}

//*************************************
// 配列をシャッフルする関数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//*************************************
// ボタンの表示状態を切り替える関数
function toggleButtons(showSubmit = false, showNext = false, showRestart = false) {
  document.getElementById("submit-answer").style.display = showSubmit ? "block" : "none";
  document.getElementById("next-button").style.display = showNext ? "block" : "none";
  document.getElementById("restart-button").style.display = showRestart ? "block" : "none";
}

//*************************************
// タイマースタート
function startTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;

  const timerProgressBar = document.getElementById("timer-progress-bar");
  const timerProgressText = document.getElementById("timer-progress-text");

  timerProgressBar.style.width = "0%";
  timerProgressBar.className = "progress-bar bg-primary-subtle"; // 初期状態を薄い青色にリセット

  timerInterval = setInterval(() => {
    elapsedTime++;

    const minutes = Math.floor(elapsedTime / 60).toString().padStart(2, "0");
    const seconds = (elapsedTime % 60).toString().padStart(2, "0");
    const progressPercent = Math.min((elapsedTime / timeLimit) * 100, 100);

    timerProgressBar.style.width = `${progressPercent}%`;
    timerProgressText.textContent = `${minutes}:${seconds}`;

    // 色変更ロジック（淡い色に統一）
    if (elapsedTime >= warningTime && elapsedTime < timeLimit) {
      timerProgressBar.className = "progress-bar bg-warning-subtle"; // 10分前：淡い黄色
    } else if (elapsedTime >= timeLimit) {
      timerProgressBar.className = "progress-bar bg-danger-subtle"; // 時間超過：淡い赤
      timerProgressBar.style.width = "100%"; // バーを100%に固定
    }
  }, 1000);
}


//*************************************
// タイマーストップ
function stopTimer() {
  clearInterval(timerInterval); // タイマーを停止
}


function showIncorrectQuestions() {
  const container = document.getElementById("incorrectQuestionsContainer");
  container.innerHTML = ""; // モーダルを開くたびにリセット

  incorrectIndexes.forEach(index => {
    const question = quizData[index];
    const optionsHTML = question.options
    .map((option, i) => {
      const isCorrectOption = Array.isArray(question.correctAnswer)
        ? question.correctAnswer.includes(i)
        : question.correctAnswer === i; // correctAnswerが単一数値のケースを考慮
  
      return `
        <li class="${isCorrectOption ? 'text-success fw-bold' : ''}">
          ${option}
        </li>`;
    })
    .join("");

    const cardHTML = `
      <div class="card mb-3">
        <div class="card-header">問題 ${index + 1}</div>
        <div class="card-body">
          <p class="card-text"><strong>質問:</strong> ${question.question}</p>
          <p class="card-text"><strong>選択肢:</strong></p>
          <ul>${optionsHTML}</ul>
          <p class="card-text"><strong>解説:</strong> ${question.explanation}</p>
        </div>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

function populateIncorrectQuestions() {
  const container = document.getElementById("incorrectQuestionsContainer");
  container.innerHTML = ""; // モーダルの内容をクリア

  incorrectIndexes.forEach((index) => {
    const question = quizData[index];
    const correctAnswers = Array.isArray(question.correctAnswer)
      ? question.correctAnswer.map((i) => question.options[i]).join(", ")
      : question.options[question.correctAnswer];

    const questionCard = `
      <div class="card mb-3">
        <div class="card-body">
          <p class="fw-bold">問題:</p>
          <p>${question.question}</p>
          <p class="fw-bold">答え:</p>
          <p>${correctAnswers}</p>
          <p class="fw-bold">解説:</p>
          <p>${question.explanation}</p>
        </div>
      </div>
    `;

    container.innerHTML += questionCard;
  });
}

//*************************
// DOMContentLoadedで最初の問題をロード
document.addEventListener("DOMContentLoaded", function () {
  shuffledIndexes = generateShuffledIndexes(totalQuestions); // インデックス配列を生成
  loadQuestion();
})