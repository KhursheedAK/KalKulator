// ============================
// 📌 Get DOM Elements
// ============================
const resultInput = document.getElementById('resultOutput');

// Number buttons
const numberButtons = [
  'zeroBtn',
  'oneBtn',
  'twoBtn',
  'threeBtn',
  'fourBtn',
  'fiveBtn',
  'sixBtn',
  'sevenBtn',
  'eightBtn',
  'nineBtn',
  'decimalBtn',
];

// Operator buttons
const operatorButtons = [
  'plusBtn',
  'minusBtn',
  'multiplyBtn',
  'divideBtn',
  'modBtn',
];

// Special buttons
const cancelBtn = document.getElementById('cancelBtn');
const deleteBtn = document.getElementById('deleteBtn');
const negateBtn = document.getElementById('negateBtn');
const equalsBtn = document.getElementById('equalsBtn');
const factBtn = document.getElementById('factBtn'); // factorial

// ============================
// 🔢 Number Buttons
// ============================
numberButtons.forEach((id) => {
  const btn = document.getElementById(id);
  btn.addEventListener('click', () => {
    resultInput.value += btn.innerText;
  });
});

// ============================
// ➕ Operator Buttons
// ============================
operatorButtons.forEach((id) => {
  const btn = document.getElementById(id);
  btn.addEventListener('click', () => {
    resultInput.value += btn.innerText;
  });
});

// ============================
// 🧮 Clear All
// ============================
cancelBtn.addEventListener('click', () => {
  resultInput.value = '';
});

// ============================
// ⬅️ Delete Last Character
// ============================
deleteBtn.addEventListener('click', () => {
  resultInput.value = resultInput.value.slice(0, -1);
});

// ============================
// +/- Negate
// ============================
negateBtn.addEventListener('click', () => {
  if (resultInput.value.startsWith('-')) {
    resultInput.value = resultInput.value.slice(1);
  } else if (resultInput.value.length > 0) {
    resultInput.value = '-' + resultInput.value;
  }
});

// ============================
// ! Factorial
// ============================
factBtn.addEventListener('click', () => {
  const num = parseInt(resultInput.value);
  if (isNaN(num) || num < 0) {
    resultInput.value = 'Error';
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  resultInput.value = factorial;
});

// ============================
// 🟰 Equals (Evaluate Expression)
// ============================
equalsBtn.addEventListener('click', () => {
  try {
    resultInput.value = eval(resultInput.value);
  } catch (err) {
    resultInput.value = 'Error';
  }
});
