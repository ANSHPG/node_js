const div = document.createElement("div");
console.log(div);
div.className='main'
div.id = 'myId'
div.setAttribute("title","generatedTitle")
div.style.padding = '12px'
div.innerHTML= 'Akira: the forbidden Future'

// document.createTextNode

document.body.appendChild(div)