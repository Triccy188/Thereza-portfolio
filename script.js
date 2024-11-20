// let submitbutton = document.querySelector("#submit-button");
// console.log(submitbutton);

// function clicklistener() {
//   console.log("button clicked");
// }

// submitbutton?.addEventlistener("click", clicklistener);
// submitbutton = document.querySelector("#submitbutton");

// function clicklistener(event) {
//   event.preventDefault();
//   console.log("button clicked");
// }

// submitbutton?.addEventListener("click", clicklistener);

// function clicklistener(event) {
//   event.preventdefault();
//   let emailinput = document.querySelector("#email");
//   let messageinput = document.querySelector("#message");
//   let emailtext = emailinput.value;
//   let messagetext = messageinput.value;
//   console.log("email:", emailtext, "message", messagetext);
// }

// submitbutton?.addEventListener("click", clicklistener);

let submitButton = document.querySelector("#submit-button");

function emailValidate(email) {
  return email.includes("@");
}

function clickListener(event) {
  event.preventDefault();
  let emailInput = document.querySelector("#email");
  let messageInput = document.querySelector("#message");

  let emailText = emailInput.value;
  let messageText = messageInput.value;

  if (emailValidate(emailText) !== true) {
    console.log("The email address must contain @");
    return false;
  }
  console.log("Thanks for your message");
}
submitButton.addEventListener("click", clickListener);

function guessMyFood() {
  
}