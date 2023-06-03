import gsap from "gsap";

export const scrollAnimation = (cameraPosition, cameraTarget, isMobile, onUpdate) => {
    const timeline = gsap.timeline();

    timeline.to(cameraPosition, {
        x: !isMobile ? -3.38 : -7.0,
        y: !isMobile ? -10.74 : -12.2,
        z: !isMobile ? -5.93 : -6,
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
            x: !isMobile ? 1.52 : 0.7,
            y: !isMobile ? 0.77 : 1.9,
            z: !isMobile ? -1.08 : 0.7,
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
        .to(cameraPosition, {
            x: !isMobile ? 1.56 : 9.36,
            y: !isMobile ? 5.0 : 10.95,
            z: !isMobile ? 0.01 : 0.09,
            scrollTrigger: {
                trigger: ".display-section",
                start: "top bottom",
                end: "top top",
                scrub: 2,  // to set some delay on the animation
                immediateRender: false  // as the animation is heavy on the browser, this sets it to load on when triggered, not before
            },
            onUpdate
        })
        .to(cameraTarget, {
            x: !isMobile ? -0.55 : -1.62,
            y: !isMobile ? 0.32 : 0.02,
            z: !isMobile ? 0.0 : 0.06,
            scrollTrigger: {
                trigger: ".display-section",
                start: "top bottom",
                end: "top top",
                scrub: 2,  // to set some delay on the animation
                immediateRender: false  // as the animation is heavy on the browser, this sets it to load on when triggered, not before
            }
        })
        .to('.display-section', {
            opacity: 1,
            scrollTrigger: {
                trigger: ".display-section",
                start: "top bottom",
                end: "top top",
                scrub: 2,  // to set some delay on the animation
                immediateRender: false  // as the animation is heavy on the browser, this sets it to load on when triggered, not before
            }
        })
}
