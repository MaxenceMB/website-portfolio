const mainDiv   = document.querySelector("#works");
const descDiv   = document.querySelector("#works-desc");
const galeryDiv = document.querySelector("#works-galery");
const sliderDiv = document.querySelector("#works-slider");

var works = [
    {"id"    : 0, 
     "title" : "titre test 1",
     "desc"  : "Test description. Lorem ipsum dolor sit amet.",
     "img"   :  {
                    0: "0.png",
                    1: "2.png",
                    2: "1.png"
                }
    },

    {"id"    : 1, 
     "title" : "titre test 2",
     "desc"  : "Test description. Lorem ipsum dolor sit amet.",
     "img"   :  {
                    0: "1.png",
                    1: "2.png",
                    2: "0.png"
                }
    },

    {"id"    : 2, 
     "title" : "titre test 3",
     "desc"  : "Test description. Lorem ipsum dolor sit amet.",
     "img"   :  {
                    0: "2.png",
                    1: "0.png",
                    2: "1.png"
                }
    },
];

function workOption(work) {
    return "<div class = 'works-slider-option' onclick = showWork("+ work["id"] +")><img class = 'works-slider-option-img' src = 'MEDIAS/WORKS/" + work["img"][0] + "'></div>";
}

function showWork(id) {
    if($(mainDiv).attr("data-work") != id) {
        $(descDiv).find("h3").fadeOut(   100, function() { $(descDiv).find("h3").text(works[id]["title"]); $(descDiv).find("h3").fadeIn(100);});
        $(descDiv).find("p").fadeOut(    100, function() { $(descDiv).find("p").text(works[id]["desc"]); $(descDiv).find("p").fadeIn(100);});
        $(galeryDiv).find("img").fadeOut(100, function() { $(galeryDiv).find("img").attr("src", "MEDIAS/WORKS/" + works[id]["img"][0]); $(galeryDiv).find("img").fadeIn(100); });

        $(mainDiv).attr("data-work", id);
        $(galeryDiv).attr("data-img", 0);
    }
}

function changeImage(step) {
    let nextStep    = 0;
    let actualStep  = $(galeryDiv).attr("data-img");
    let actualWork  = $(mainDiv).attr("data-work");
    let numberSteps = Object.keys(works[actualWork]["img"]).length;

    if(step == 1) {
        nextStep = (+actualStep + +step) >= numberSteps ? 0 : +actualStep + +step;
    } else {
        nextStep = (+actualStep + +step) < 0 ? numberSteps-1 : +actualStep + +step;
    }

    $(galeryDiv).find("img").fadeOut(100, function() { $(galeryDiv).find("img").attr("src", "MEDIAS/WORKS/" + works[actualWork]["img"][nextStep]); $(galeryDiv).find("img").fadeIn(100); });
    $(galeryDiv).attr("data-img", nextStep);
}

showWork(0);
for(i = 0; i < works.length; i++) {
    $(sliderDiv).append(workOption(works[i]));
}

