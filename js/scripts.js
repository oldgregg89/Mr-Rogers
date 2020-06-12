//Business logic
function numbertoArray(number){
  let newArr = ""
  let 

  for (var i=0;i<=number,i++)
    

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