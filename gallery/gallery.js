gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.img',
        scrub: true
    }
})
    .to('.img', {
        stagger: .2,
        y: -700,
        scrub: true
    })

var temp = 0;
window.onscroll = function () {
    scroll = window.pageYOffset;
    console.log(scroll)
    if (scroll > temp) {
        document.getElementsByClassName("h2")[0].style.opacity = '0';
    } else if (scroll === temp){
        document.getElementsByClassName("h2")[0].style.opacity = '1';
    }
}