const mainDiv   = document.querySelector("#works");
const descDiv   = document.querySelector("#works-desc");
const galeryDiv = document.querySelector("#works-galery");
const sliderDiv = document.querySelector("#works-slider");

var works = [
    {"id"    : 0, 
     "title" : "titre test 1",
     "desc"  : "Test description. Lorem ipsum dolor sit amet.",
     "img"   : "0.png"},

    {"id"    : 1, 
     "title" : "titre test 2",
     "desc"  : "Test description. Lorem ipsum dolor sit amet.",
     "img"   : "1.png"},

     {"id"    : 2, 
     "title" : "titre test 3",
     "desc"  : "Test description. Lorem ipsum dolor sit amet.",
     "img"   : "2.png"}
];

function workOption(work) {
    return "<div class = 'works-slider-option' onclick = showWork("+ work["id"] +")><img class = 'works_img' src = 'MEDIAS/WORKS/" + work["img"] + "'></div>";
}

function showWork(id) {
    if($(mainDiv).attr("data-work") != id) {
        $(descDiv).find("h3").fadeOut(   100, function() { $(descDiv).find("h3").text(works[id]["title"]); $(descDiv).find("h3").fadeIn(100);});
        $(descDiv).find("p").fadeOut(    100, function() { $(descDiv).find("p").text(works[id]["desc"]); $(descDiv).find("p").fadeIn(100);});
        $(galeryDiv).find("img").fadeOut(100, function() { $(galeryDiv).find("img").attr("src", "MEDIAS/WORKS/" + works[id]["img"]); $(galeryDiv).find("img").fadeIn(100); });

        $(mainDiv).attr("data-work", id);
    }
}

showWork(0);
for(i = 0; i < works.length; i++) {
    $(sliderDiv).append(workOption(works[i]));
}

