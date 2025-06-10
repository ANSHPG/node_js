const dcm = document;
const elem = dcm.querySelector("button");
console.log(elem);
elem.addEventListener("click", operation);

function operation(event) {
  const input = dcm.querySelectorAll("input");
  const bmi = dcm.querySelector(".bmiValue");
  const condition = dcm.querySelector('.condition');
  const weight = parseFloat(input[0].value);
  const height = parseFloat(input[1].value);
  console.log(weight, height);
  console.log(bmi);

  if (height <= 0 || isNaN(height)) {
    bmi.innerText = "Enter Valid Data!";
    input[1].style.borderColor = "red";
    input[1].style.borderWidth = "2px";
  } else if (weight <= 0 || isNaN(weight)) {
    bmi.innerText = "Enter Valid Data!";
    input[0].style.borderColor = "red";
    input[0].style.borderWidth = "2px";
  }
  else{
    const bmiValue = weight/(height*height)
    bmi.innerText = bmiValue.toFixed(2);
    if(bmiValue<=18.5){
      condition.innerText = 'Eat more! mate you are underweight'
      bmi.style.color = '#cc0626';
    }
    else if(bmiValue >18.5 && bmiValue <= 25.9){
      condition.innerText = "Mate You are doing Good! keep it up"
      bmi.style.color = '#50d03e';
    }
    else if(bmiValue >25.9 && bmiValue <= 29.9){
      condition.innerText = "Nothing to worry about, but have to check on your weight bro."
      bmi.style.color = '#d7f20a'
    }
    else if(bmiValue >29.9 && bmiValue <= 40){
      condition.innerText = "Mate if you dont take any action now , its gonna get worse."
      bmi.style.color = '#eaf408'
    }
    else{
      condition.innerText = "Brother the situation is definieatly not optimal , pls loose weight."
      bmi.style.color = '#cc0626'
    }
  }
}
