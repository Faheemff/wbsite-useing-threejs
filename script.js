// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


gsap.from(".nlink", {
    stagger: .3,
    y: 10,
    opacity: 0,
    ease: Power3,
    duration: 1,
})

Shery.textAnimate("#heading h1", {
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});


gsap.from(".anim2", {
    y: 30,
    stagger: .3,
    opacity: 0,
    ease: Power4,
    duration: 2,
});

Shery.imageEffect("#imagetext img", {
    style: 3, config: {
        "uFrequencyX": { "value": 10.69, "range": [0, 100] },
        "uFrequencyY": { "value": 6.87, "range": [0, 100] },
        "uFrequencyZ": { "value": 51.15, "range": [0, 100] },
        "geoVertex": { "range": [1, 64], "value": 14.47 },
        "zindex": { "value": -9996999, "range": [-9999999, 9999999] },
        "aspect": { "value": 0.75001725923369 },
        "ignoreShapeAspect": { "value": true },
        "shapePosition": { "value": { "x": 0, "y": 0 } },
        "shapeScale": { "value": { "x": 0.5, "y": 0.5 } },
        "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] },
        "shapeRadius": { "value": 0, "range": [0, 2] },
        "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 },
        "gooey": { "value": false }, "infiniteGooey": { "value": false },
        "growSize": { "value": 4, "range": [1, 15] },
        "durationOut": { "value": 1, "range": [0.1, 5] },
        "durationIn": { "value": 1.5, "range": [0.1, 5] },
        "displaceAmount": { "value": 0.5 }, "masker": { "value": true },
        "maskVal": { "value": 1.24, "range": [1, 5] },
        "scrollType": { "value": 0 }, "noEffectGooey": { "value": true },
        "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] },
        "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": {
            "value": 0.5,
            "range": [0, 1]
        }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] },
        "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": {
            "value": 10,
            "range": [0, 100]
        }
    },
});

Shery.imageEffect(".imageff img", {
    style: 5, config: {
        "a": { "value": 2, "range": [0, 30] }, "b": {
            "value": -0.69,
            "range": [-1, 1]
        }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] },
        "aspect": { "value": 0.6666849315068493 }, "ignoreShapeAspect": { "value": true },
        "shapePosition": { "value": { "x": 0, "y": 0 } },
        "shapeScale": { "value": { "x": 0.5, "y": 0.5 } },
        "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] },
        "shapeRadius": { "value": 0, "range": [0, 2] },
        "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 },
        "gooey": { "value": false },
        "infiniteGooey": { "value": false },
        "growSize": { "value": 4, "range": [1, 15] },
        "durationOut": { "value": 1, "range": [0.1, 5] },
        "durationIn": { "value": 1.5, "range": [0.1, 5] },
        "displaceAmount": { "value": 0.5 }, "masker": { "value": true },
        "maskVal": { "value": 1.55, "range": [1, 5] },
        "scrollType": { "value": 0 }, "geoVertex": {
            "range": [1, 64],
            "value": 1
        }, "noEffectGooey": { "value": true },
        "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] },
        "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": {
            "value": 0.5,
            "range": [0, 1]
        }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] },
        "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": {
            "value": 10, "range": [0, 100]

        }
    },
});

Shery.imageEffect("#bimg", {
    style: 5,
    config: {
        "a": { "value": 2, "range": [0, 30] }, "b": {
            "value": 0.75,
            "range": [-1, 1]
        }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] },
        "aspect": { "value": 2.0661242603550294 }, "ignoreShapeAspect": { "value": true },
        "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } },
        "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] },
        "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 },
        "scrollLerp": { "value": 0.07 }, "gooey": { "value": true },
        "infiniteGooey": { "value": true }, "growSize": {
            "value": 4,
            "range": [1, 15]
        }, "durationOut": { "value": 1.56, "range": [0.1, 5] },
        "durationIn": { "value": 0.96, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 },
        "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] },
        "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 },
        "noEffectGooey": { "value": true }, "onMouse": { "value": 0 },
        "noise_speed": { "value": 0.76, "range": [0, 10] }, "metaball": {
            "value": 0.2,
            "range": [0, 2], "_gsap": { "id": 32 }
        }, "discard_threshold": {
            "value": 0.66,
            "range": [0, 1]
        }, "antialias_threshold": {
            "value": 0.01,
            "range": [0, 0.1]
        }, "noise_height": { "value": 0.56, "range": [0, 2] },
        "noise_scale": {
            "value": 13.74, "range": [0, 100]

        }
    },
    gooey:true,
});

gsap.from("#imagetext img", {
    y: -17,
    opacity: 0,
    duration: 2,
    ease: Expo,
});


document.querySelector("#ftext button")
.addEventListener("mouseover", function(){
    gsap.to("#future video", {
        opacity:1,
        duration:1.5,
        ease: Power4
    });
});

document.querySelector("#ftext button")
.addEventListener("mouseleave", function(){
    gsap.to("#future video", {
        opacity:0,
        duration:1.5,
        ease: Power4
    });
});