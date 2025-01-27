function validateForm() {
    // Get form elements
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById("email").value;
  
    // Validation logic
    if (fname === "" || fname === null) {
      document.getElementById('fname-alert').innerHTML= " First name is required.";
      return false;
    }
  
     if (lname === "" || lname === null) {
       document.getElementById('lname-alert').innerHTML='Last Name is required.';
       return false;
    }
    
   if (email === "" || !validateEmail(email)) {
      document.getElementById('email-alert').innerHTML="Please enter a valid email address.";
      return false;
    }
  
    // If all validations pass, return true
    return true;
  }
  
  function validateEmail(email) {
    // Simple email validation using a regular expression
    let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
  