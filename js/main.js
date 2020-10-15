gsap.registerPlugin(ScrollTrigger);

function init(){
    // gsap.to('#intro img', {opacity: 0, scrollTrigger: {
    //     trigger: "#intro",
    //     start: 'top top',
    //     end: 'bottom center',
    //     scrub: true,
    //     markers: true
    // }})

    // gsap.set('#project02', {scrollTrigger: {
    //     trigger: '#project02',
    //     start: 'top bottom-=150',
    //     end: 'bottom center-=150',
    //     toggleClass: 'active',
    //     markers: true
    // }})

    // const parallaxTl = gsap.timeline({
    //     ease: 'none',
    //     scrollTrigger: {
    //         trigger: '.bcg-parallax',
    //         start: 'top bottom',
    //         scrub: true
    //     }
    // })

    // parallaxTl
    //     .from('.content-wrapper', {duration: 1, autoAlpha: 0}, 0.4)
    //     .from('.bcg', {duration: 1, y: '-30%'}, 0);

    // gsap.to(['#intro h1', '#intro p'], {
    //     autoAlpha: 0,
    //     ease: 'none',
    //     scrollTrigger: {
    //         trigger: '#intro .content',
    //         start: 'top top+=3%',
    //         pin: true,
    //         scrub: true,
    //         markers: true
    //     }
    // })

    const projects = document.querySelectorAll('.project');

    projects.forEach((project) => {
        gsap.from(project, {
            opacity: 0,
            yPercent: 5,
            scrollTrigger: {
                trigger: project.querySelector('img'),
                start: 'top bottom-=300',
                end: 'top center',
                toggleActions: 'play none none reverse',
                markers: true,
                scrub: true
            }
        })
    })
}

window.addEventListener('load', function(){
    init();
});
