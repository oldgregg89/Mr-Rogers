//Business logic
function numbertoArray(number){
  let newArr = []
  let bp = "Beep!"
  let bop = "Boop!"
  let wybn = "Won't you be my neighbor?"

  for (var i=0;i<=number,i++) {
    if (i = 1){
      String(i)=bp
      newArr.push(i)
    }
    if (i = 2){
      String(i)=bop
      newArr.push(i)
    }
  }
  newArr.push(i)
}    
  
    
    



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