/***********************************************************

@Author: Maxence MAURY-BALIT
Fichier JS pour mon site PortFolio maxence-maury-balit.com

Ce fichier JS est commun pour toutes les pages du site web

***********************************************************/

const hamburger = document.querySelector("#hamburger");
const nav       = document.querySelector("nav");
const navMenu   = document.querySelector("#menu_links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav_link").forEach(l => l.addEventListener("click", () => { 
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    nav.classList.remove("active");
}));

function test() {
    alert("Test fonctionnel.");
}

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