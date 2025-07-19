// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }

// document.querySelector("html").addEventListener("click", () => {
//   alert("别戳我，我怕疼！");
// });
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/website-drawing-scan.png") {
    myImage.setAttribute("src", "images/Wikipedia-faster.png");
  } else {
    myImage.setAttribute("src", "images/website-drawing-scan.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};
