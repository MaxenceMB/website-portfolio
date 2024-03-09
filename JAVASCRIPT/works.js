const mainDiv   = document.querySelector("#works");
const descDiv   = document.querySelector("#works-desc");
const galeryDiv = document.querySelector("#works-galery");
const mediasDiv = document.querySelector("#works-galery-media");
const sliderDiv = document.querySelector("#works-slider");

var works = [
    {"id"    : 0, 
     "title" : "titre test 1",
     "desc"  : "Test description. Lorem ipsum dolor sit amet.",
     "img"   :  {
                    0: "3.mp4",
                    1: "2.png",
                    2: "1.png",
                    3: "3.mp4"
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

        showMedia(works[id]["img"][0].slice(-3), id, 0);

        $(mainDiv).attr("data-work", id);
        $(galeryDiv).attr("data-img", 0);
    }
}

function changeImage(step) {
    let nextStep    = 0;
    let actualStep  = $(galeryDiv).attr("data-img");
    let actualWork  = $(mainDiv).attr("data-work");
    let numberSteps = Object.keys(works[actualWork]["img"]).length;

    nextStep = mod((+actualStep + +step), +numberSteps);

    let nextFormat = works[actualWork]["img"][nextStep].slice(-3);
    showMedia(nextFormat, actualWork, nextStep);

    $(galeryDiv).attr("data-img", nextStep);
}

function showMedia(format, work, number) {
    $(mediasDiv).fadeOut(100, function() { 
        if(format == "png") {
            $("#works-video").hide();
            $("#works-img").show();
            $("#works-img").attr("src", "MEDIAS/WORKS/" + works[work]["img"][number]);
        } else {
            $("#works-img").hide();
            $("#works-video").show();
            $("#works-video").find("source").attr("src", "MEDIAS/WORKS/" + works[work]["img"][number]);
        }         
        $(mediasDiv).fadeIn(100);
    });
}

function mod(n, m) {
    return ((n % m) + m) % m;
}

showWork(0);
changeImage(0);
for(i = 0; i < works.length; i++) {
    $(sliderDiv).append(workOption(works[i]));
}

