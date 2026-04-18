// Date Display

const today = new Date();
const options = 
{
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

document.getElementById("todayDate").innerHTML = 
  "Today is: " + today.toLocaleDateString("en-US", options);

// Error Handling
function showError(id, msg)
{
  document.getElementById(id).innerHTML = msg;
}

function clearError(id)
{
  document.getElementById(id).innerHTML = "";
}

// FIELD VALIDATIONS

//First Name  
function validateFirstName()
{
  let val = document.getElementById("firstname").value;
if (!/^[A-Za-z'-]{1,30}$/.test(val))
    {
      showError("firstnameError", "❌ Invalid (letters, ' - only)");
      return false;
    }
    clearError("firstnameError");
    return true;
}

// Last Name
function validateLastName()
{
  let val = document.getElementById("lastname").value;
  if (!/^[A-Za-z'-]{1,30}$/.test(val))
    {
      showError("lastnameError", "❌ Invalid (letters, ' - only)");
      return false;
    }
    clearError("lastnameError");
    return true;
}

//DOB 
function validateDOB()
{
  let dob = document.getElementById("dob").value;
  let entered = new Date(dob);
  let now = new Date();
  let oldest = new Date();
  oldest.setFullYear(now.getFullYear() - 120);

  if (!dob || isNaN(entered))
  {
    showError("dobError", "❌ Invalid date");
    return false;
  }
  if (entered > now) 
  {
    showError("dobError", "❌ cannot be in the future");
    return false;
  }
  if (entered < oldest)
  {
    showError("dobError", "❌ older than 120");
    return false;
  }

  clearError("dobError");
  return true;
}

//SSN
document.getElementById("ssn").addEventListener("input", function(e)
{
  let value = e.target.value.replace(/\D/g, "");

  if(value.length > 3 && value.length <=5)
  {
    value = value.slice(0,3) + "-" + value.slice(3);
  }
  else if (value.length > 5)
  {
    value = value.slice(0,3) + "-" + value.slice(3,5) + "-" + value.slice(5,9);
  }

  e.target.value = value;
});

function validateSSN()
{
  let val = document.getElementById("ssn").value;
  if (!/^\d{3}-\d{2}-\d{4}$/.test(val))
    {
      showError("ssnError", "❌ Format needs to be XXX-XX-XXXX");
      return false;
    }
    clearError("ssnError");
    return true;
}

//Address 1
function validateAddress1()
{
  let val = document.querySelector('[name="address1"]').value;
  if (val.length < 2 || val.length > 30) 
    {
      showError("addressError", "❌ 2-30 characters");
      return false;
    }
    clearError("addressError");
    return true;
}

// City
function validateCity()
{
  let val = document.querySelector('[name="city"]').value;
  if (val.length < 2 || val.length > 30)
  {
    showError("cityError", "❌2-30 characters");
    return false;
  }
  clearError("cityError");
  return true;
}

//Zip
function validateZip()
{
  let val = document.querySelector('[name="zip"]').value;
  if (!/^\d{5}$/.test(val))
    {
      showError("zipError", "❌ 5 digits only");
      return false;
    }
    clearError("zipError");
    return true;
}

//Email
function validateEmail()
{
  let val = document.querySelector('[name="email"]').value.toLowerCase();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val))
  {
    showError("emailError", "❌ Invalid email");
    return false;
  }
  clearError("emailError");
  return true;
}

//User ID
function validateUserID()
{
  let val = document.querySelector('[name="userid"]').value;
  if (!/^[A-Za-z][A-Za-z0-9_-]{4,19}$/.test(val))
    {
      showError("userError", "❌ 5-20 chars, start with letter");
      return false;
    }
    clearError("userError");
    return true;
}

//Password
function validPassword()
{
  let password = document.querySelector('[name="password"]').value;
  let userId = document.querySelector('[name="userid"]').value.toLowerCase();

  if (password.length < 8) 
  {
    showError("passwordError", "❌ Minimum of 8 characters");
    return false;
  }
  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password))
  {
    showError("passwordError", "❌ Needs uppercase, lowercase, and number");
    return false;
  }
if (password.toLowerCase().includes(userId))
  {
  showError("passwordError", "❌ Cannot contain user ID");
  return false;
  }

  clearError("passwordError");
  return true;
}

// Confirm Passoword
function validateConfirmPassword()
{
  let p1 = document.querySelector('[name="password"]').value;
  let p2 = document.querySelector('[name="confirm_password"]').value;
  if (p1 !== p2)
    {
      showError("confirmError", "❌ Passwords do not match");
      return false;
    }
      clearError("confirmError");
      return true;
    }

// Slider Display 
document.querySelector('[name="health_rating"]').addEventListener("input", function() 
{
  document.getElementById("sliderValue").innerText = this.value;
});

//Final Validation Check

function validateForm()
{
  let valid = 
    validateFirstName() &&
    validateLastName() &&
    validateDOB() &&
    validateSSN() &&
    validateAddress1() &&
    validateCity() &&
    validateZip() &&
    validateEmail() &&
    validateUserID() &&
    validPassword() &&
    validateConfirmPassword();

  if(valid)
{
document.getElementById("submitBtn").style.display = "block";
}
else
{
document.getElementById("submitBtn").style.display = "none";

}

return valid;
}
