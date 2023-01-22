


var a = document.getElementById('feature1');
var b = document.getElementById('feature2');
var c = document.getElementById('feature3');
var d = document.getElementById('feature4');
var j = document.getElementById('feature5');
var e = document.getElementById('phase1');
var f = document.getElementById('phase2');
var g = document.getElementById('phase3');
var h = document.getElementById('phase4');
var i = document.getElementById('allocation');

window.addEventListener('scroll', ()=>{
    if ((window.innerHeight + window.pageYOffset) > (a.offsetTop + 160)) {
        a.style.transform = "scale(1)";
    } else {
        a.style.transform = "scale(0)";
    }

    if ((window.innerHeight + window.pageYOffset) > (b.offsetTop + 160)) {
        b.style.transform = "scale(1)";
    } else {
        b.style.transform = "scale(0)";
    }

    if ((window.innerHeight + window.pageYOffset) > (c.offsetTop + 160)) {
        c.style.transform = "scale(1)";
    } else {
        c.style.transform = "scale(0)";
    }

    if ((window.innerHeight + window.pageYOffset) > (d.offsetTop + 160)) {
        d.style.transform = "scale(1)";
    } else {
        d.style.transform = "scale(0)";
    }

    if ((window.innerHeight + window.pageYOffset) > (j.offsetTop + 160)) {
        j.style.transform = "scale(1)";
    } else {
        j.style.transform = "scale(0)";
    }

    if ((window.innerHeight + window.pageYOffset) > (e.offsetTop + 160)) {
        e.style.transform = "translateX(0)";
    } else {
        e.style.transform = "translateX(-150%)";
    }

    if ((window.innerHeight + window.pageYOffset) > (f.offsetTop + 160)) {
        f.style.transform = "translateX(0)";
    } else {
        f.style.transform = "translateX(250%)";
    }

    if ((window.innerHeight + window.pageYOffset) > (g.offsetTop + 160)) {
        g.style.transform = "translateX(0)";
    } else {
        g.style.transform = "translateX(-150%)";
    }

    if ((window.innerHeight + window.pageYOffset) > (h.offsetTop + 160)) {
        h.style.transform = "translateX(0)";
    } else {
        h.style.transform = "translateX(250%)";
    }

    if ((window.innerHeight + window.pageYOffset) > (i.offsetTop + 240)) {
        i.style.transform = "scale(1)";
    } else {
        i.style.transform = "scale(0)";
    }

    });


    window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 12) {
document.getElementById('header').style.backgroundColor = "black";
document.getElementById('header').style.boxShadow = "1px 1px 7px 1px lightgrey";

    } else {
document.getElementById('header').style.backgroundColor = "";
document.getElementById('header').style.boxShadow = "";

    }
});

function menu() {
    document.getElementById('hamburger').classList.toggle('change');

if (document.getElementById("mobile").style.transform === "translate(0%)"){
document.getElementById("mobile").style.transform = "translate(-100%)"
} else {
    document.getElementById("mobile").style.transform = "translate(0%)" 
}

}


function copyf() {
    navigator.clipboard.writeText('0x344B106EeAF3D1E0AF69c90B3Ec538c1c8F82952');

    document.getElementById('copy-btn').innerHTML = "Copied!";
    document.getElementById('copy-btn').style.backgroundColor = "grey";

    setTimeout(()=>{document.getElementById('copy-btn').innerHTML = "Copy"; document.getElementById('copy-btn').style.backgroundColor = "";}, 3000);
}

// if (window.matchMedia("(min-width: 1200px)").matches) {
//    var a = 215;
// var b = 335;
// var c = 805;
// var d = 1155;
// var e = 1400;
// var f = 1755; 
// } 