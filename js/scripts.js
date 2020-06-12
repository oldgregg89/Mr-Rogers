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
      newArr2 +="Beep!"
    };
    if (value == 2){
      newArr2 +="Boop!"
      
    };
    if (value == 3){
      newArr2 +="Won't you be my neighbor?"
    };
    {
      newArr2.push()
    };
  }
  debugger
  return newArr2   
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