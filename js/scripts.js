//Business logic

// Function that creates array
function createArrayOfNumbers(number){
  // Loop number amount oftimes and addthat number to thearray
  let newArr=[]

  for (var i=0;i<=number;i++){
    newArr.push(i)
  }
  return newArr
}

// Go through an array and determine if we need to beep boop or wybmn
function beepBoopNeighbor(arrayOfNumbers){
  let newArr2 = [];
  for (var index=0;index < arrayOfNumbers.length;index++){
    let value = arrayOfNumbers[index]
    debugger
    if (value == 1){
      value="Beep!"
      newArr2.push(value)
    };
    if (value == 2){
      value="Boop!"
      newArr2.push(value)
    };
    if (value == 3){
      value="Won't you be my neighbor?"
      newArr2.push(value)
    };
    {
      newArr2.push(value)
    };
  }
  debugger
  return newArr2   
}

function doubleDigits(){
  
}

// UI Logic
$(document).ready(function(){
  $("#numberConverter").submit(function(event) {
    event.preventDefault();
    const number = $("input#enteredNumber").val();
    let results = createArrayOfNumbers(number);
    let sentence = beepBoopNeighbor(results);
    $("#output").text(sentence);
  });
});