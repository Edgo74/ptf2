const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

let mail = document.querySelector("#email");
let textarea = document.querySelector("textarea");
let button = document.querySelector("#submit");
let form = document.querySelector("form");
let message = document.querySelector("#message");

button.addEventListener("click", function (e) {
    if(mail.value === "" || textarea.value === ""){
 
    }else{
        e.preventDefault();
        form.style.display = "none";
        message.style.display = "block";
    }
});


