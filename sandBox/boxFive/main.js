const dcm = document;
const para = dcm.querySelectorAll("p");
console.log(para);

const paraId = [2, 3, 5, 7, 8];

const themeOne = ["#0062ba", "#51a2ed", "#d1e4f6", "#0061b9", "#51a2ed"];
const themeTwo = ["#ab8fff", "#e16ab6", "#8b8b8b", "#ab8fff", "#a830aa"];
const themeThree = ["#cc3e40", "#ca742e", "#d4b51e", "#beb75d", "#b4c49d"];

const theme = [themeOne, themeTwo, themeThree];
const themeChs = 0;
paraId.map((id, colorId) => (para[id].style.color = theme[themeChs][colorId]));

const paraMapId = [2, 3, 7, 8];
// setInterval(function () {

const clockOperation = () => {
  let date = new Date();
  const timeMap = date.toLocaleTimeString().split(":");
  // console.log(timeMap[0][1]);
  para[2].innerText = timeMap[0][0];
  para[3].innerText = timeMap[0][1];
  para[7].innerText = timeMap[1][0];
  para[8].innerText = timeMap[1][1];
  paraMapId.map((id, clockId) =>
    isNaN(Number(para[id].innerText)) ? fault(clockId) : null
  );
  // }, 1000);
};
function fault(clockId) {
  para[paraMapId[clockId]].innerText = para[paraMapId[clockId - 1]].innerText;
  para[paraMapId[clockId - 1]].innerText = "0";
}

clockOperation();

const container = dcm.querySelector(".container");
let count = 0;
container.addEventListener("click", function (event) {
  count += 1;
  paraId.map(
    (id, colorId) => (para[id].style.color = theme[count % 3][colorId])
  );
  console.log(count % 3);
});

// stopwatch Engine
let sec = 0,
  min = 0;

let interval = null;
const interMethod = (operation) => {
  if (operation === 1) interval = setInterval(intervalBackHandle, 1000);
  else clearInterval(interval);
};

const innertxt = () => {
  para[2].innerText = parseInt(min / 10);
  para[3].innerText = parseInt(min % 10);
  para[7].innerText = parseInt(sec / 10);
  para[8].innerText = parseInt(sec % 10);
};

function intervalBackHandle() {
  sec += 1;
  if (sec === 60) {
    sec = 0;
    min += 1;
  }

  innertxt();
}

let bttnValue = 1;
const bttnMap = Array.from(document.querySelectorAll("button"));
bttnMap.map((node, index) => {
  node.addEventListener("mousedown", function (event) {
    if (index === 1) {
      bttnValue += 1;
      if (bttnValue % 2 == 0) {
        interMethod(1);
        node.innerText = "Stop";
        node.style.backgroundColor = "#340e0b";
        node.style.color = "#e45048";
        bttnMap[0].style.backgroundColor = "#25242b";
        bttnMap[0].style.color = "##e8a428";
        bttnMap[0].innerText = "Clock";
      } else {
        interMethod(0);
        node.innerText = "Start";
        node.style.backgroundColor = "#092911";
        node.style.color = "#49cb66";
        bttnMap[0].innerText = "Reset";
      }
    } else if (index === 0) {
      if (bttnValue % 2 != 0 && bttnValue > 1) {
        sec = 0;
        min = 0;
        interMethod(0);
        innertxt();

        bttnMap[1].innerText = "Start";
        bttnMap[1].style.backgroundColor = "#092911";
        bttnMap[1].style.color = "#49cb66";
        bttnMap[0].innerText = "Reset";
      } else {
        console.log(`lap - ${min}:${sec}`);
      }
    }
    else if (index === 2) {
      console.log('click on clock');
      clockOperation();
      node.addEventListener('mousedown', () => {
        console.log('mousedown on clock');
        // clockOperation();
      }, false)
    }
  }, false);
});

// bttnMap[2].addEventListener("mousedoown", function () {
//   console.log('mouse down on clock');
//   clockOperation();
// }, false);
