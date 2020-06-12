//Business logic
function numbertoArray(number){
  let newArr = []
  let bp = "Beep!"
  let bop = "Boop!"
  let wybn = "Won't you be my neighbor?"

  for (var i=0;i<=number,i++);




}


// UI Logic
$(document).ready(function(){
  $("#numberConverter").submit(function(event) {
    event.preventDefault();
    let number = $("input#enteredNumber").val();
    let results = numbertoArray(number);

    $("#output").text(results);

  });
});