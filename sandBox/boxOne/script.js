const dcm = document;
const chidNodes = Array.from(dcm.querySelector(".container").children);
const body = dcm.querySelector('body')

chidNodes.map((child,index)=>{
    child.style.background = `url("./assets/${index+1}.jpg") no-repeat center center/cover`;
    child.addEventListener('click',clkEvent)
})

function clkEvent(event) {
    body.style.background = `url("./assets/${event.target.id}.jpg") no-repeat center center/cover`;
    dcm.querySelector('#title').innerHTML = `${event.target.id}`
}