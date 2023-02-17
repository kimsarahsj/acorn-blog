function updateElement(content, target) {
  let htmlElement = document.querySelector(target);
  htmlElement.innerHTML = content;
}

//function contactInfo() {
//updateElement("", ".errorMessage"); //clears past content//
//updateElement("", ".userResponse");
//let name = prompt("What is your name?");
//let email = prompt("What is your email?");
//if (
//email.includes("@") &&
//(email.includes(".com") ||
// email.includes(".org") ||
//  email.includes(".net") ||
//  email.includes(".io"))
//) {
//stating email contains @ and one of the following email extensions//
//updateElement(
//`🙌Thanks, ${name}! We will reach out to your email, ${email}, soon!📧`,
//".userResponse"
//);
//} else {
//updateElement(
//   `❌Oops! Looks like the email ${email} was invalid.🙊`,
// ".errorMessage"
// );
//}
//}
//let contactButton = document.querySelector(".contactButton");

//contactButton.addEventListener("click", contactInfo);

function sendBone() {
  alert("Woof! Thank you!");
}
let boneButton = document.querySelector(".boneButton");
boneButton.addEventListener("click", sendBone);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
