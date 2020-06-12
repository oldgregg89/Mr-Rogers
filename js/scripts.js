//Business logic

// Function that creates array
function createArrayOfNumbers(number){
  // Loop number amount oftimes and addthat number to thearray
  let newArr=[]

  for (var i=0;i<number;i++){
    newArr.push[i]
  }
}

// Go through an array and determine if we need to beep boop or wybmn
function beepBoopNeighbor(arrayOfNumbers){
  let sentence = '';

  for (var i=0;i<number;i++) {
    if (arrayOfNumbers[i] == 1){
      sentence.concat("Beep!")
    };
    if (arrayOfNumbers[i] == 2){
      sentence.concat("Boop!")
      
    }
    if (arrayOfNumbers[i] == 3){
      sentence.concat("Won't you be my neighbor?")
    }
  return sentence   
}

// UI Logic
$(document).ready(function(){
  $("#numberConverter").submit(function(event) {
    event.preventDefault();
    let number = $("input#enteredNumber").val();
    let results = createArrayOfNumbers(number);
    beepBoopNeighbor(results);
    $("#output").text(results);
  });
})