/***********************************************************

@Author: Maxence MAURY-BALIT
Fichier JavaScript pour mon site PortFolio max-mb.com

Ce fichier JavaScript est fait pour gérer la partie "works"
du site.

***********************************************************/

// Toutes les divs utilisées après
const mainDiv       = document.querySelector("#works");
const descDiv       = document.querySelector("#works-desc");
const carousselDiv  = document.querySelector("#works-caroussel");
const mediasDiv     = document.querySelector("#works-media");
const sliderDiv     = document.querySelector("#works-slider");
const dotsDiv       = document.querySelector("#works-dots");

// Mes travaux
var works = [
    {   "id"        : 0, 
        "title"     : "titre test 1",
        "desc"      : "Test description. Lorem ipsum dolor sit amet.",
        "thumbnail" : "0.png",
        "medias"    : {
                        0: "0.png",
                        1: "2.png",
                        2: "1.png",
                        3: "3.mp4"
                    }
    },

    {   "id"        : 1, 
        "title"     : "OAAAAAAAAA",
        "desc"      : "Test description. Lorem ipsum dolor sit amet.",
        "thumbnail" : "1.png",
        "medias"    : {
                        0: "1.png",
                        1: "2.png",
                        2: "0.png"
                    }
    },

    {   "id"        : 2, 
        "title"     : "titre test 3",
        "desc"      : "Test description. Lorem ipsum dolor sit amet.",
        "thumbnail" : "2.png",
        "medias"    : {
                        0: "2.png",
                        1: "0.png",
                        2: "1.png"
                    }
    }
];

function firstLoad() {
    $("#works-video-loader").hide();
    showWork(0);
    for(i = 0; i < works.length; i++) {
        $(sliderDiv).append(workOption(works[i]));
    }
}

function showWork(id) {
    if($(mainDiv).attr("data-work") != id) {
        updateWorkText(id);
        updateDots(id);
        showMedia(id, 0);

        $(mainDiv).attr("data-work", id);
        $(carousselDiv).attr("data-img", 0);
    }
}

function updateWorkText(id) {
    $(descDiv).find("h3").fadeOut(100, function() { $(descDiv).find("h3").text(works[id]["title"]); $(descDiv).find("h3").fadeIn(100);});
    $(descDiv).find("p").fadeOut(100, function() { $(descDiv).find("p").text(works[id]["desc"]); $(descDiv).find("p").fadeIn(100);});
}

function updateDots(id) {
    $(dotsDiv).empty();

    mediasNumber = Object.keys(works[id]["medias"]).length;
    for(i = 0; i < mediasNumber; i++) {
        $(dotsDiv).append(imageOption(works[id], i));
    }
}

function changeImage(step) {
    let nextStep    = 0;
    let actualStep  = $(carousselDiv).attr("data-img");
    let actualWork  = $(mainDiv).attr("data-work");
    let numberSteps = Object.keys(works[actualWork]["medias"]).length;

    nextStep = mod((+actualStep + +step), +numberSteps);
    showMedia(actualWork, nextStep);
}

function showMedia(work, number) {
    if($(carousselDiv).attr("data-img") != number || $(mainDiv).attr("data-work") != work) {
        $(mediasDiv).fadeOut(100, function() { 
            $(".selected:first").removeClass("selected");
            let format = works[work]["medias"][number].slice(-3);

            if(format == "png") {
                $("#works-video").hide();
                $("#works-img").attr("src", "MEDIAS/WORKS/" + works[work]["medias"][number]);
                $("#works-img").show();
            } else {
                $("#works-img").hide();
                $("#works-video > source").attr("src", "MEDIAS/WORKS/" + works[work]["medias"][number]);
                $("#works-video")[0].load();
                $("#works-video-loader").show();
            }         

            $(carousselDiv).attr("data-img", number);
            $(".works-dot:nth-child(" + (+number+1) + ")").addClass("selected");
            $(mediasDiv).fadeIn(100);

            $("#works-video").on("loadeddata", function() {
                $('#works-video-loader').fadeOut(100, function() { $('#works-video').fadeIn(100); });
            });
        });
    }
}

function imageOption(work, number) {
    return "<div class = 'works-dot' onclick = showMedia("+ work["id"] + '\,'  + number +")>&#x2022;</div>";
}

function workOption(work) {
    return "<div class = 'works-slider-option' onclick = showWork("+ work["id"] +")><img class = 'works-slider-option-img' src = 'MEDIAS/WORKS/" + work["thumbnail"] + "'></div>";
}

function mod(n, m) {
    return ((n % m) + m) % m;
}

firstLoad()

