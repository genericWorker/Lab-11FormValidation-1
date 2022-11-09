function isValidEmail() {
    em = $.trim($("input[name='email']").val());
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(em)) {
        return true;
    }
    else {
       // Add your code here to handle the error. 
       alert(" Please fill all fields! Try again?");
       return false;  
    }
 }
 
 //var email = $('#1')[0];
$(function() {  
    $("#sub").on('click', function() {
    
    let x = document.getElementById("1").value;
    let s = document.getElementById("2").value;
    let d = document.getElementById("3").value; // get the current password value
    if (s != d || $("#1").val() === "") {
        $("h4").append("Passwords does not match!" );  
        $("div").append($("#1"));     
  }
   else  {
        $("h4").append( "Passwords matches."); 
        $("div").append($("#1"));    
 }   
 document.getElementById("demo").innerHTML = text;

    // Get the value of the input field with id="numb"
  //let x = document.getElementById("sub").value;

  // If x is Not a Number or less than one or greater than 10
 /* let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Passwords does not match!";
  } else {
    text = "Passwords matches.";
  }
  document.getElementById("demo").innerHTML = text;
   */ 
   
   }
)});



