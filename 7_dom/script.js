const parent = Array.from(document.querySelectorAll(".listItem"));
// console.log(parent);
parent.map((node) => {
  //   console.log(node.innerText);
  node.style.color = "green";
  node.style.fontSize = "50px";
});

const heirachy = document.querySelector("ul");
// console.log(heirachy);
// console.log(heirachy.children);
// console.log(heirachy.children[0]);

Array.from(heirachy.children).map((node) => {
  //   console.log(node.innerText);
  node.style.color = "yellow";
  node.style.fontSize = "50px";
});

for (node of heirachy.children) {
  node.style.color = "red";
  node.style.fontSize = "60px";
}

// console.log(heirachy.lastElementChild.innerText);
console.log(heirachy.childNodes);

