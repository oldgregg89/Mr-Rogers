//Business logic

// Function that creates array
function createArrayOfNumbers(number){
  // Loop number amount oftimes and add that number to thearray
  let newArr=[]

  for (var i=0;i<=number;i++){
    newArr.push(i)
  }
  return newArr
}

// Go through an array and determine if we need to beep boop or wybmn
function beepBoopNeighbor(arrayOfNumbers){
  for (var index=0;index < arrayOfNumbers.length;index++){
    let value = arrayOfNumbers[index]
    if (value.toString().includes("1")){
      arrayOfNumbers[index] = "Beep!"
    }
    if (value.toString().includes("2")){
      arrayOfNumbers[index] = "Boop!"
    }
    if (value.toString().includes("3")){
      arrayOfNumbers[index] = "Won't you be my neighbor?"
    }
  }   
}

// UI Logic
$(document).ready(function(){
  $("#numberConverter").submit(function(event) {
    event.preventDefault();
    const number = $("input#enteredNumber").val();
    let results = createArrayOfNumbers(number); beepBoopNeighbor(results);
    $("#output").text(results);
  });
});