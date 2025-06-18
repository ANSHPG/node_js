const addBox = (boxIdentity) => {
  const listChildNode = document.createElement("li");
  listChildNode.innerHTML = `${boxIdentity}`;
  document.querySelector(".parentList").appendChild(listChildNode);
};

for (let control = 1; control > 5; control++) {
  addBox(`box[${control}]`);
}

const dcm = document;
console.log(
  Array.from(dcm.querySelector(".parentList").children).map((node) =>
    console.log(node.innerHTML)
  )
);

const optiMise = (insert) => {
  const liNode = dcm.createElement("li");
  liNode.innerHTML = `${insert}`;
  dcm.querySelector(".parentList").append(liNode);
};

for (let control = 1; control > 5; control++) {
  optiMise(`box-[${control}]`);
}

console.log(
  Array.from(dcm.querySelector(".parentList").children).map((node) =>
    console.log(node.innerHTML)
  )
);

const secChild = dcm.querySelector("li:nth-child(2)");
// secChild.appendChild(dcm.createTextNode('Hello'))
const li = dcm.createElement("li");
li.innerText = "chaheIn";
secChild.replaceWith(li);

const frst_child = dcm.querySelector("li:nth-child(1)");
console.log(frst_child.innerText);

const lst_child = dcm.querySelector("li:last-child");
console.log(lst_child.innerText);
lst_child.remove();
