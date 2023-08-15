var tl = gsap.timeline();
tl.from("#imgs h2,#imgs img,#page2Txt h2,#page2Txt p,#page2Txt button",{
    y:100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    
})

// gsap.to("#imgs img",{
//     y:-100,
//     duration:1,
    
//     // stagger:0.3,
//     // opacity:0,
//     // markers:true,
//     scrollTrigger:{
//         markers:true,
//         trigger:"#page2Txt button",
//         scroller:"body",
        
//         start:"top 80%",
//         end:"top 50%",
//         scrub:2
//     }
// })

gsap.to("#page2",{
    y:-200,
    duration:1,
    stagger:0.2,
    
    opacity:0,
    // markers:true,
    scrollTrigger:{
        markers:true,
        trigger:"#page2Txt button",
        scroller:"body",
        
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})