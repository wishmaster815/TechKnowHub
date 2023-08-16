var tl = gsap.timeline();
tl.from("#imgs h2,#imgs img,#page2Txt h2,#page2Txt p,#page2Txt button",{
    y:100,
    
    // delay:0.5,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2",
        // start:"top 20%",
        end:"top 40%",
        markers:true,
        scrub:2
    }
    
})

