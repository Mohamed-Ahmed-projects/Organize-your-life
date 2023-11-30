// comany and features lists
let ulFeatures = document.querySelector(".nav .links .features ul.f1eatures");
let ulCompany = document.querySelector(".nav .links .company ul.c1ompany");
let svgFeaturesdown = document.querySelector(".nav .links .features svg.down");
let svgFeaturesup = document.querySelector(".nav .links .features svg.up");
let svgCompanydown = document.querySelector(".nav .links .company svg.down");
let svgCompanyup = document.querySelector(".nav .links .company svg.up");
let features = document.querySelector(".features");
let company = document.querySelector(".company");

features.onclick = function () {
    if (svgFeaturesdown.classList.contains("active")) {
        svgFeaturesdown.classList.replace("active", "inactive");
        svgFeaturesup.classList.replace("inactive", "active");
        ulFeatures.style.display= "block";
    } else {
        svgFeaturesdown.classList.replace("inactive", "active");
        svgFeaturesup.classList.replace("active", "inactive");
        ulFeatures.style.display= "none";
    }
}
company.onclick = function () {
    if (svgCompanydown.classList.contains("active")) {
        svgCompanydown.classList.replace("active", "inactive");
        svgCompanyup.classList.replace("inactive", "active");
        ulCompany.style.display= "block";
    } else {
        svgCompanydown.classList.replace("inactive", "active");
        svgCompanyup.classList.replace("active", "inactive");
        ulCompany.style.display= "none";
    }
}
//#############################################################################
let myToggle = document.querySelector(".toggle");
let myNav = document.querySelector("nav .nav")
let myImage = document.querySelector(".container .main .img img");
function changeImg() {
    if (window.innerWidth > 991) {
        myImage.src = "images/image-hero-desktop.png"
    }else {
        myImage.src = "images/image-hero-mobile.png"
    }
};
changeImg();
window.onresize = changeImg;
//#########################
function hideNav() {
    if (window.innerWidth > 991) {
        myToggle.style.display = "none";
        myNav.style.display = "flex";
    } else {
        
        myToggle.style.display = "inline-block";
        myNav.style.display = "none";
    }
};
hideNav();
window.onresize = hideNav;
let myContainer = document.querySelector("body > .container")
myToggle.onclick = () => {
    myNav.style.display = "inline-block";
}
let myClose = document.querySelector("nav .nav .close svg")
myClose.onclick = () => {
    myNav.style.display = "none";
}

//#################################3
let registerBtn = document.querySelector("nav .nav .register button");
let loginLink = document.querySelector("nav .nav .register a.log");
