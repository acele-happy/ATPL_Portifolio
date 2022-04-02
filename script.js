const form = document.getElementById("form");
const Email = document.getElementById("Email");
const Name = document.getElementById("Name");
const Password = document.getElementById("Password");
const txt = document.getElementById("txt");
const success= document.getElementById("success")

form.addEventListener('submit',e=>{
  e.preventDefault();
  validateInputs();
})

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

let  status = true;
const validateInputs = () => {
  const NameValue = Name.value.trim();
  const EmailValue = Email.value.trim();
  const passwordValue = Password.value.trim();
//   const txtValue = txt.value.trim();

 if(EmailValue === '') {
 status = false;
  setError(Email, '*Email is required');
} else if (!isValidEmail(EmailValue)) {
    status = false;
  setError(Email, '*Provide a valid Email address');
} else {
  setSuccess(Email);
}

if(NameValue === '') {
      status = false;
  setError(Name, '*Name is required');
} else {
  setSuccess(Name);
}

if(passwordValue === '') {
    status = false;
  setError(Password, '*Password is required');
} else {
  setSuccess(Password);
}

if (status){
   success.style.display = "flex"
   success.style.color = "green"
   success.innerText = "User Created Successfully!!"

}
// if(txtValue === '') {
//   setError(txt, 'Comment is required');
// } else {
//   setSuccess(txt);
// }
// const inputControl = element.parentElement;
}