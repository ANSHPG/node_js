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

let date = new Date();
console.log(date.toLocaleTimeString().split(":"));

const paraMapId = [2, 3, 7, 8];
setInterval(function () {
  let date = new Date();
  const timeMap = date.toLocaleTimeString().split(":");
  // console.log(timeMap[0][1]);
  para[2].innerText = timeMap[0][0];
  para[3].innerText = timeMap[0][1];
  para[7].innerText = timeMap[1][0];
  para[8].innerText = timeMap[1][1];
  paraMapId.map((id,clockId) => isNaN(Number(para[id].innerText))? fault(clockId):null);
}, 1000);

function fault(clockId){
  para[paraMapId[clockId]].innerText = para[paraMapId[clockId-1]].innerText
  para[paraMapId[clockId-1]].innerText = '0'
}

const container = dcm.querySelector('.container');
let count = 0
container.addEventListener('click',function(event){
  count+=1;
  paraId.map((id, colorId) => (para[id].style.color = theme[count%3][colorId]));
  console.log(count%3);
})