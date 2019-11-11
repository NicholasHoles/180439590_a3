var email = document.forms["myForm"]["email"].value;
var username = document.forms["myForm"]["username"].value;
var password = document.forms["myForm"]["password"].value;

function validateForm() {
  if (email.includes(".")) {
    null
  } else {
    alert("This is email does not have a period in it");
    return false;
  }
  if (document.write(email.match(/@/gi).length) > 1) {
    alert("There must only be one @ symbol");
    return false;
  }

}
