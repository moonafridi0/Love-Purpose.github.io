const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesbtn = document.querySelector(".yes-btn")
const nobtn = document.querySelector(".no-btn")

yesbtn.addEventListener("click", () => {
  question.innerHTML = "Yeyy I Love You!";
  gif.src = "https://media.tenor.com/GRQV7QeIhScAAAAi/ton-ton-friends-clapping.gif"
})

nobtn.addEventListener("mouseover", () => {
  const nobtnRect = nobtn.getBoundingClientRect();
  const maxX = window.innerWidth - nobtnRect.width;
  const maxY = window.innerHeight - nobtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  nobtn.style.left = randomX + "px";
  nobtn.style.top = randomY + "px";
})
