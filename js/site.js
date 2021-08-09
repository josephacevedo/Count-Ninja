// get values from page
function getValues() {
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  // parse into int | validating input values
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    let numbers = generateNumbers(startValue, endValue);

    // call display numbers
    displayNumbers(numbers);
  } else {
    alert("You must enter an integer");
  }
}

// generate numbers from start value to end value
function generateNumbers(sValue, eValue) {
  let numbers = [];

  //   get all numbers from start to end
  for (let i = sValue; i <= eValue; i++) {
    numbers.push(i);
  }

  return numbers;
}

// display the numbers and mark even numbers bold
function displayNumbers(numbers) {
  let templateRows = "";

  for (let i = 0; i < numbers.length; i++) {
    let className = "even";
    let number = numbers[i];

    if (number % 2 == 0) {
      className = "even";
    } else {
      className = "odd";
    }
    // this part does not render correctly in prism.
    //  Check github repo for correct code
    templateRows += `<tr><td class="${className}">${number}</td></tr>`;
  }
  document.getElementById("results").innerHTML = templateRows;
}
