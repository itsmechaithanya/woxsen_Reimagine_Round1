function loco(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  // smoothMobile: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
loco();

function swiper(){
  var swiper = new Swiper(".mySwiper", {
      // autoplay: {
      //     delay: 5000,
      //     disableOnInteraction: true,
      //   },
      spaceBetween: 2,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      keyboard: {
          enabled: true,
        },
    });
}
swiper();


// Shery.mouseFollower();

Shery.makeMagnet(".magnet");