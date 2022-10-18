let Menubar = document.querySelector("#MenuBar");
let Navbar = document.querySelector(".navbar");

Menubar.onclick = () => {
  Menubar.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
};

// Home Parallex

document.querySelector(".home").onmousemove = (e) => {
  document.querySelectorAll(".homeParallexEffect").forEach((el) => {
    let Speed = el.getAttribute("data-speed");
    let X = (window.innerWidth - e.pageX * Speed) / 60;
    let Y = (window.innerHeight - e.pageY * Speed) / 60;

    el.style.transform = `translateX(${Y}px) translateY(${X}px)`;
  });
};

document.querySelector(".home").onmouseleave = (e) => {
  document.querySelectorAll(".homeParallexEffect").forEach((el) => {
    el.style.transform = `translateX(0px) translateY(0px)`;
  });
};
