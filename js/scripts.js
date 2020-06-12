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
    if (value == 1){
      arrayOfNumbers[index] = "Beep!"
    }
    if (value == 2){
      arrayOfNumbers[index] = "Boop!"
    }
    if (value == 3){
      arrayOfNumbers[index] = "Won't you be my neighbor?"
    }
  }   
}

//Working with double digits
function doubleDigits(){

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