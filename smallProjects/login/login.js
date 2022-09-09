function myFunctin(){
    document.getElementById("user").style.display ="none";

var pop1 = "smruti";
var pop2 = "padhi";
if (pop1 == "smruti" && pop2 == "padhi") {
    alert ("you logged in successfully!");
}
else
{
    alert("Incorrect username and password!");
}
}
function myFunction() {
    var x = document.getElementById('user');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }