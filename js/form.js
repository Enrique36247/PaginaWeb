document.addEventListener('DOMContentLoaded', function() {
  listenForValidation();
});

function listenForValidation() {
  const PERSONAL_DATA_FORM = document.getElementById("personal-data-form");
  PERSONAL_DATA_FORM.addEventListener("submit", validatePersonalDataForm);
}

function validatePersonalDataForm(e) {
  e.preventDefault();

  const NAME = e.target.name.value;
  const SURNAME = e.target.surname.value;
  const EMAIL = e.target.email.value;
  const RATE = e.target.rate.value;

  let valid = true;

  if (!NAME) {
    showErrorMessage("form-name", "Name is required.");
    valid = false;
  } else {
    hideErrorMessage("form-name");
  }


  if (!SURNAME) {
    showErrorMessage("form-surname", "Surname is required.");
    valid = false;
  } else {
    hideErrorMessage("form-surname");
  }


  if (!EMAIL || !isValidEmail(EMAIL)) {
    showErrorMessage("form-email", "Please enter a valid email.");
    valid = false;
  } else {
    hideErrorMessage("form-email");
  }


  if (!RATE) {
    showErrorMessage("form-rate", "Rate is required.");
    valid = false;
  } else {
    hideErrorMessage("form-rate");
  }

  const selectElement = document.getElementById('mySelect');


  selectElement.addEventListener('change', function (event) {

    const selectedValue = event.target.value;


    console.log('Seleccionaste el valor: ', selectedValue);


    switch (selectedValue) {
      case '1':

        break;
      case '2':

        break;
      case '3':

        break;
      case '4':

        break;
      case '5':

        break;
      default:

    }
  });

  if (valid) {
    saveData(NAME, SURNAME, EMAIL, RATE);
    e.target.submit();
  }
}


function showErrorMessage(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.visibility = "visible";
}


function hideErrorMessage(elementId) {
  const errorElement = document.getElementById(elementId);
  errorElement.style.visibility = "hidden";
}


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


function saveData(name, surname, email, rate) {
  localStorage.setItem("name", name);
  localStorage.setItem("surname", surname);
  localStorage.setItem("email", email);
  localStorage.setItem("rate", rate);
}


listenForValidation();
