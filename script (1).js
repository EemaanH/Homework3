/*Dynamic date for the banner*/

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


function reviewData() 
{

// NAME + DOB + SSN
let first = document.getElementById("firstname").value;
let mi = document.getElementById("middleinitial").value;
let last = document.getElementById("lastname").value;
let dob = document.getElementById("dob").value;
let ssn = document.querySelector('[name="ssn"]').value;

//CONTACT INFO
let email = document.querySelector('[name="email"]').value;
let phone = document.querySelector('[name="phone"]').value;

//ADDRESS
let address1 = document.querySelector('[name="address1"]').value;
let address2 = document.querySelector('[name="address2"]').value;
let city = document.querySelector('[name="city"]').value;
let state = document.querySelector('[name="state"]').value;
let zip = document.querySelector('[name="zip"]').value;

//SLIDER
let health = document.querySelector('[name="health_rating"]').value;

//TEXTAREA
let symptoms= document.querySelector('[name="symptoms"]').value;

//CHECKBOXES
let history = [];
document.querySelectorAll('[name="history"]:checked').forEach(item =>
  {
    history.push(item.value);
  });

//RADIO BUTTONS
  let gender = document.querySelector('[name="gender"]:checked')?.value || "Not Selected";
  let vaccinated = document.querySelector('[name="vaccinated"]:checked')?.value || "Not Selected";
  let insurance = document.querySelector('[name="insurance"]:checked')?.value || "Not Selected";

  //USER + PASSWORD
  let userIdInput = document.querySelector('[name="userid"]');
  let userId = userIdInput.value.toLowerCase();
  userIdInput.value = userId;

  let password = document.querySelector('[name="password"]').value;
  let confirmPassword = document.querySelector('[name="confirm_password"]').value;

  //PASSWORD CHECK
  let passwordStatus;
  if(!password.trim() || !confirmPassword.trim())
  {
    passwordStatus = "❌ ERROR: Password Required";
  }
  else if (password !==confirmPassword)
  {
    passwordStatus = "❌ ERROR: Password does not match";
  }
    else if (password.toLowerCase().includes(userId))
  {
    passwordStatus = "❌ ERROR: Cannot contain User ID";
  }
    else
  {
    passwordStatus = "✅ PASS";
  }
  
  //DOB Validation
  let dobStatus;
  let enteredDOB = new Date(dob);
  let currentDate = new Date();
  let oldestDate = new Date();
  oldestDate.setFullYear(currentDate.getFullYear() - 120);
  
  if(!dob.trim())
  {
    dobStatus = "❌ ERROR: Date required";
  }
  else if (isNaN(enteredDOB))
  {
    dobStatus = "❌ ERROR: Invalid date";
  }
  else if (enteredDOB > currentDate)
  {
    dobStatus = "❌ ERROR: Cannot be in the future";
  }
    else if (enteredDOB < oldestDate)
  {
    dobStatus ="❌ ERROR: More than 120 years ago";
  }
  else
  {
    dobStatus = "✅ PASS";
  }
  
  //Name
  let nameStatus = (first && last)
  ? "✅ PASS"
  : "❌ ERROR: Missing name";

  //Email
  let emailStatus = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
  ? "✅ PASS"
  : "❌ ERROR";

  //Phone
  let phoneStatus = /^\d{3}-\d{3}-\d{4}$/.test(phone)
  ? "✅ PASS"
  : "❌ ERROR";

  //Address
  let addressStatus = (address1 && city && state && zip)
  ? "✅ PASS"
  : "❌ ERROR: Incomplete";

  let address2Status = (!address2 || address2.length >= 2)
  ? "✅ PASS"
  : "❌ ERROR";

  //SSN
  let ssnStatus = /^\d{3}-\d{2}-\d{4}$/.test(ssn)
  ? "✅ PASS"
  : "❌ ERROR";

  //Slider
  let healthStatus = health
  ? "✅ PASS"
  : "❌ ERROR";

  //Checkboxes
  let historyStatus = history.length > 0
  ? "✅ PASS"
  : "❌ ERROR: None selected";

  //Radio
  let genderStatus = gender !== "Not Selected"
  ? "✅ PASS"
  : "❌ ERROR";

  let vaccinatedStatus = vaccinated !== "Not Selected"
  ? "✅ PASS"
  : "❌ ERROR";

  let insuranceStatus = insurance !== "Not Selected"
  ? "✅ PASS"
  : "❌ ERROR";

  //TextArea
  let symptomsStatus = "✅ PASS";

  //User ID
  let userIdStatus = userId
  ? "✅ PASS"
  : "❌ ERROR";
  
  //USING JAVASCRIPT TO PORTRAY HTML CODE ON PAGE
  let output = `
  <table border="1" cellpadding="8">
  <tr><th>Field</th><th>Value</th><th>Status</th></tr>

  <tr>
  <td>Name</td>
  <td>${first} ${mi} ${last}</td>
  <td>${nameStatus}</td>
  </tr>

  <tr>
  <td>Date of Birth</td>
  <td>${dob}</td>
  <td>${dobStatus}</td>
  </tr>

  <tr>
  <td>SSN</td>
  <td>***-**-${ssn.slice(-4)}</td>
  <td>${ssnStatus}</td>
  </tr>

  <tr>
  <td>Email</td>
  <td>${email}</td>
  <td>${emailStatus}</td>
  </tr>

  <tr>
  <td>Phone</td>
  <td>${phone}</td>
  <td>${phoneStatus}</td>
  </tr>

  <tr>
  <td>Address</td>
  <td>${address1}${address2 ? ", " + address2 : ""}, ${city}, ${state} ${zip}</td>
  <td>${addressStatus}</td>
  </tr>

  <tr>
  <td>Health Rating</td>
  <td>${health}</td>
  <td>${healthStatus}</td>
  </tr>

  <tr>
  <td>Medical History</td>
  <td>${history.join(", ") || "None Selected"}</td>
  <td>${historyStatus}</td>
  </tr>

  <tr>
  <td>Gender</td>
  <td>${gender}</td>
  <td>${genderStatus}</td>
  </tr>

  <tr>
  <td>Vaccinated</td>
  <td>${vaccinated}</td>
  <td>${vaccinatedStatus}</td>
  </tr>

  <tr>
  <td>Insurance</td>
  <td>${insurance}</td>
  <td>${insuranceStatus}</td>
  </tr>

  <tr>
  <td>Symptoms</td>
  <td>${symptoms || "None Provided"}</td>
  <td>${symptomsStatus}</td>
  </tr>

  <tr>
  <td>User ID</td>
  <td>${userId}</td>
  <td>${userIdStatus}</td>
  </tr>

  <tr>
  <td>Password Check</td>
  <td>********</td>
  <td>${passwordStatus}</td>
  </tr>

  </table>
  `;

document.getElementById("reviewSection").innerHTML = `
<h2>PLEASE REVIEW THIS INFORMATION</h2>
${output}
`;
}
