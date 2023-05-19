"use strict";

// ////////////// GLOBAL VARIABLES ////////////////

const nameInput = document.getElementById("name");
const emailField = document.getElementById("email");
const cardInput = document.getElementById("card");

// ////////////// NAME VALIDATION ////////////////
function validateName() {
  //variables
  const name = nameInput.value.trim();
  const regex = /^[a-zA-Z\s-]+$/;

  //change input field background color

  if (regex.test(name)) {
    nameInput.style.backgroundColor = "#89c82e";
  } else {
    nameInput.style.backgroundColor = "#e70064";
  }
}

nameInput.addEventListener("blur", validateName);

// ////////////// EMAIL VALIDATION ////////////////

function validateEmail() {
  //variables
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  //change input field background color
  if (regex.test(email)) {
    emailInput.style.backgroundColor = "#89c82e";
  } else {
    emailInput.style.backgroundColor = "#e70064";
  }
}

emailField.addEventListener("blur", validateEmail);

// ////////////// VALIDATE CARD ////////////////
function validateCreditCard() {
  // Variables
  const cardInput = document.getElementById("card");
  const cardNumber = cardInput.value.replace(/\D/g, "");
  const digits = cardNumber.toString().split("").map(Number);
  let sum = 0;
  let double = false;

  // Luhn Algorithem
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];

    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    double = !double;
  }

  //change input field background color

  if (sum % 10 === 0 && cardNumber.length >= 12 && cardNumber.length <= 19) {
    cardInput.style.backgroundColor = "#89c82e";
  } else {
    cardInput.style.backgroundColor = "#e70064";
  }
}

cardInput.addEventListener("blur", validateCreditCard);

// ////////////// EMAIL WITH SUBMITTED DATA ////////////////

function sendMail() {
  //variables
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };
  const serviceId = "service_aworh2m";
  const templateId = "template_57ykxce";

  //send email
  emailjs.send(serviceId, templateId, params).then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    console.log(res);
  });
}

//event listener

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  sendMail();
});
