// Initialization for ES Users
import { Collapse, initMDB } from "mdb-ui-kit";

initMDB({ Collapse });
/*
// Use this Js Code for preloading effect
*/
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector("#preloader");
  window.addEventListener("load", () => {
      preloader.classList.add("preloaded");
      setTimeout(() => {
          preloader.remove();
      }, 1500);
  });
});


function toggleMenu(icon) {
  const navigation = document.querySelector('.navigation');
  if (navigation.style.display === 'flex') {
      navigation.style.display = 'none';
  } else {
      navigation.style.display = 'flex';
  }
}
// active state

const toggleMenu = () => {
  const navigation = document.querySelector(".navigation");

  const burgerMenu = document.querySelector(".menu-icon");
  const src = burgerMenu.getAttribute("src");

  const isBurger = src === "images/MENU_ICON.png";
  const iconName = isBurger ? "images/MENU_ICON.png" : "images/MENU_ICON.png";

  burgerMenu.setAttribute("src", iconName);

  if (!isBurger) {
      navigation.classList.add("navigation--mobile--fadeout");
      setTimeout(() => {
          navigation.classList.toggle("navigation--mobile");
      }, 300);
  } else {
      navigation.classList.remove("navigation--mobile--fadeout");
      navigation.classList.toggle("navigation--mobile");
  }
};



// document.addEventListener("DOMContentLoaded", () => {
//     const preloader = document.querySelector("#preloader");
//     window.addEventListener("load", () => {
//         preloader.classList.add("preloaded");
//         setTimeout(() => {
//             preloader.remove();
//         }, 1500);
//     });
// });

const toggleMenu = () => {
  const navigation = document.querySelector(".navigation");

  const burgerMenu = document.querySelector(".menu-icon");
  const src = burgerMenu.getAttribute("src");

  const isBurger = src === "assets/burger-menu.svg";
  const iconName = isBurger ? "assets/close.svg" : "assets/burger-menu.svg";

  burgerMenu.setAttribute("src", iconName);

  if (!isBurger) {
    navigation.classList.add("navigation--mobile--fadeout");
    setTimeout(() => {
      navigation.classList.toggle("navigation--mobile");
    }, 300);
  } else {
    navigation.classList.remove("navigation--mobile--fadeout");
    navigation.classList.toggle("navigation--mobile");
  }
};
var sliderCounter=0;
var sliderContent=["Srikar","Web Developer","Software Developer","Full Stack Developer"];
var slider=document.querySelector("#slider");
var sliderValue=document.querySelector("#slidervalue");
function slide(){
  if(sliderCounter>=sliderContent.length){
    sliderCounter=0;
  }
  sliderValue.innerHTML="";
  sliderValue.classList.remove("holder-animation");
  sliderValue.classList.add("holder-animation");
  for(i=0;i<sliderContent[sliderCounter].length;i++){
    let letterDiv=Document.createElement("Div");
    letterDiv.innerHTML=sliderContent[sliderCounter][i];
    if(letterDiv.innerHTML=" "){
      letterDiv.innerHTML="&nbsp;";
    }
    if(letterDiv.innerHTML=" "){
      letterDiv.innerHTML="&nbsp;";
    }
    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay=i/10
+"S";
sliderValue.appendChild(letterDiv);
  }
  sliderCounter++;
}
slide();
setInterval(slide,4000);
// button
const button = document.querySelector(".btn");
const inner = document.querySelector(".inner");

button.addEventListener("mousemove", (e) => {
  const rect = button.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  button.style.setProperty("--mouseX", `${x}px`);
  button.style.setProperty("--mouseY", `${y}px`);
});

    function toggleMenu() {
      const navigation = document.querySelector('.navigation');
      if (navigation.classList.contains('navigation--mobile')) {
        navigation.classList.remove('navigation--mobile');
        navigation.classList.add('navigation--mobile--fadeout');
      } else {
        navigation.classList.add('navigation--mobile');
        navigation.classList.remove('navigation--mobile--fadeout');
      }
    }
