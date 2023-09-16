/***********************************************************

@Author: Maxence MAURY-BALIT
Fichier JS pour mon site PortFolio maxence-maury-balit.com

Ce fichier JS est commun pour toutes les pages du site web

***********************************************************/

var tabLinks = document.getElementsByClassName("about-tab-title");
var tabContents = document.getElementsByClassName("about-tab-content");

function openAboutTab(tabName) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

function test() {
    alert("Test fonctionnel.");
}

function translation() {
    let btn = document.getElementById("language-button");

    if (btn.innerText == "English") {
        btn.innerText = "Français";

        document.querySelectorAll('.fr').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.en').forEach(function(el) {
            el.style.display = 'inline-block';
        });

        document.getElementsByClassName("about-tab-title")[3].classList.add("active-link");
        document.getElementById("about-skills-en").classList.add("active-tab");
    } else {
        btn.innerText = "English";

        document.querySelectorAll('.fr').forEach(function(el) {
            el.style.display = 'inline-block';
        });
        document.querySelectorAll('.en').forEach(function(el) {
            el.style.display = 'none';
        });

        document.getElementsByClassName("about-tab-title")[0].classList.add("active-link");
        document.getElementById("about-skills-fr").classList.add("active-tab");
    }
}

// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// } 