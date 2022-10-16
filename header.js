const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');

    burger.classList.toggle('toggle');
  });
}

navSlide();

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.   body.classList.remove("resize-animation-stopper");
  }, 400);
});

