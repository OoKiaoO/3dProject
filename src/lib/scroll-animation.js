import gsap from "gsap";

export const scrollAnimation = (cameraPosition, cameraTarget, onUpdate) => {
    const timeline = gsap.timeline();

    timeline.to(cameraPosition, {
        x: -3.38,
        y: -10.74,
        z: -5.93,
        scrollTrigger: {
            trigger: ".sound-section",
            start: "top bottom",
            end: "top top",
            scrub: 2,  // to set some delay on the animation
            immediateRender: false  // as the animation is heavy on the browser, this sets it to load on when triggered, not before
        },
        onUpdate
    })
        .to(cameraTarget, {
            x: 1.52,
            y: 0.77,
            z: -1.08,
            scrollTrigger: {
                trigger: ".sound-section",
                start: "top bottom",
                end: "top top",
                scrub: 2,  // to set some delay on the animation
                immediateRender: false  // as the animation is heavy on the browser, this sets it to load on when triggered, not before
            }
        })
        .to('.jumbotron-section', {
            opacity: 0,
            scrollTrigger: {
                trigger: ".sound-section",
                start: "top bottom",
                end: "top top",
                scrub: 2,  // to set some delay on the animation
                immediateRender: false  // as the animation is heavy on the browser, this sets it to load on when triggered, not before
            }
        })
        .to('.sound-section .content', {
            opacity: 1,
            scrollTrigger: {
                trigger: ".sound-section",
                start: "top bottom",
                end: "top top",
                scrub: 2,  // to set some delay on the animation
                immediateRender: false  // as the animation is heavy on the browser, this sets it to load on when triggered, not before
            }
        })
}
