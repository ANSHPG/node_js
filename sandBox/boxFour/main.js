const dcm = document;
const input = dcm.querySelector("input");
const bttn = dcm.querySelector("button");
const prvGuess = dcm.querySelector(".prvGuessNum");
const remainGuess = dcm.querySelector(".remainGuessValue");
const title = dcm.querySelector("#title");

input.addEventListener("click", function (event) {
  //   if (!validate(input.value)) input.value = "";
  input.value = "";
});

bttn.addEventListener("click", submit);

let attempts = 10;
const actualAttempts = 10;

remainGuess.innerText = `${attempts}`;

function submit(event) {
  const guessValue = parseInt(input.value);
  console.log(guessValue);
  if (validate(guessValue) && constraint()) {
    console.log(numGenerate());
    if (guessValue === numGenerate()) success();
  }
}

function numGenerate() {
  const num = parseInt(Math.random() * 100 + 1);
  return num;
}

const borderWidth = "3.5px";
function validate(num) {
  if (isNaN(num)) {
    input.value = "Enter a number!";
    input.style.borderColor = "#e42d5299";
    input.style.borderWidth = borderWidth;
    if (attempts != actualAttempts) prvGuess.innerText = "Invalid";
    return false;
  } else if (num > 100) {
    input.value = "Number more than 100";
    input.style.borderColor = "#e42d5299";
    input.style.borderWidth = borderWidth;
    if (attempts != actualAttempts) prvGuess.innerText = "Invalid";
    return false;
  } else if (num < 1) {
    input.value = "Number less than 1";
    input.style.borderColor = "#e42d5299";
    input.style.borderWidth = borderWidth;
    if (attempts != actualAttempts) prvGuess.innerText = "Invalid";
    return false;
  } else {
    input.style.borderColor = "ffffff1a";
    input.style.borderWidth = borderWidth;
    prvGuess.innerText = `${num}`;
    return true;
  }
}

function constraint() {
  attempts -= 1;
  remainGuess.innerText = `${attempts}`;
  if (attempts > 0) return true;
  else {
    title.innerText = "NO ATTEMPTS LEFT!";
    title.style.color = "#f54761";
    bttn.style.backgroundColor = "#f54761";
    bttnOperation();
    return false;
  }
}

function success() {
  input.style.borderColor = "#afeb91";
  title.innerText = "YOU WON!";
  title.style.color = "#afeb91";
  bttn.style.backgroundColor = "#74bd4f";
  bttn.style.boxShadow = "none";
  input.addEventListener("focus", function (event) {
    input.style.boxShadow = "none";
  });
  bttnOperation();
}

function bttnOperation() {
  bttn.innerText = "New Game";
  bttn.addEventListener("click", function (event) {
    location.reload();
  });
}

window.addEventListener("keydown", function (event) {
  const evk = event.key;
  if (evk === "Enter") {
    bttn.click();
    input.value = "";
  }
  if (
    (/^[a-zA-Z]$/.test(evk) || /^[0-9]$/.test(evk)) &&
    attempts == actualAttempts
  ) {
    input.focus();
  }
});
