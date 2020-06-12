//Business logic

// Function that creates array
function createArrayOfNumbers(number){
  // Loop number amount oftimes and addthat number to thearray
  let newArr=[]

  for (var i=0;i<number;i++){
    newArr.push(i)
  }
  return newArr
}

// Go through an array and determine if we need to beep boop or wybmn
function beepBoopNeighbor(arrayOfNumbers){
  let sentence = '';
  for (var i=0;i < arrayOfNumbers.length;i++){
    if (arrayOfNumbers.indexOf("1")){
      sentence+="Beep!"
    };
    if (arrayOfNumbers.includes("2")){
      sentence+="Boop!"
      
    }
    if (arrayOfNumbers.includes("3")){
      sentence+="Won't you be my neighbor?"
    }
  }
  debugger
  return sentence   
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