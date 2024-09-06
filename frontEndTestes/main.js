// document.addEventListener("DOMContentLoaded", () => {
const button = document.getElementById("sendButton");
const paragraph = document.getElementById("demo");

button.addEventListener("click", () => (paragraph.innerHTML = "eventListener"));

// button.onclick = () => (paragraph.innerHTML = "onclick");
// });
