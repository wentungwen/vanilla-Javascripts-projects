const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  //   formControl.ClassList.add("error");
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(username, message) {
  const formControl = username.parentElement;
  formControl.classList.add("success");
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function checkEmail(input) {
  if (emailIsValid(email.value)) {
    showSuccess(input, "Success!");
  } else {
    // console.log(emailIsValid(email));
    showError(input, `It doesn't match the email type. Please try again.`);
  }
}

function confirmPassword(p1, p2) {
  const pa1 = p1.value;
  const pa2 = p2.value;

  if (pa1 !== pa2) {
    showError(pa2, `It doesn't match the password.`);
  } else {
    showSuccess(pa2, "Success!");
  }
}

function emailIsValid(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkRequired(inputArray) {
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${capitalize(input)} is required!`);
    } else {
      showSuccess(input, "Success!");
    }
  });
}

//首字大寫
function capitalize(input) {
  var inputId = input.id;
  return inputId.charAt(0).toUpperCase() + inputId.slice(1);
}

// 檢查長度
function checkLength(input, min, max) {
  const length = input.value.length;
  if ((length < min) | (length > max)) {
    showError(
      input,
      `${capitalize(input)} must be within ${min}-${max} letters.`
    );
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 6, 15);
  checkLength(password, 8, 20);
  checkLength(password2, 8, 20);
  checkEmail(email);
  confirmPassword(password, password2);
});
