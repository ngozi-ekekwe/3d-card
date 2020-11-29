const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove", (event) => {
  let Xaxis = (window.innerWidth / 2 - event.pageX) / 25;
  let Yaxis = (window.innerHeight / 2 - event.pageY) / 25;
  card.style.transform = `rotateY(${Xaxis}deg) rotateX(${Yaxis}deg)`;
});

//Animate in
container.addEventListener("mouseenter", (event) => {
  card.style.transition = 'none';
  // pop out
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg";
  purchase.style.transform = "translateZ(150px)";
  description.style.transform = "translateZ(100px)";
  sizes.style.transform = "translateZ(75px)";
});

//Animate out
container.addEventListener("mouseleave", (event) => {
  card.style.transition = `all 0.5s ease`;
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // pop back
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0) rotateZ(0)";
  purchase.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
});
