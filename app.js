

window.onscroll = () => {

    if (window.pageYOffset > 12) {
document.getElementById('header').style.backgroundColor = "black";
document.getElementById('header').style.boxShadow = "1px 1px 7px 1px lightgrey";

    } else {
document.getElementById('header').style.backgroundColor = "";
document.getElementById('header').style.boxShadow = "";

    }
}

window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 215) {
        document.getElementById('feature1').style.transform = "scale(1)";
        document.getElementById('feature2').style.transform = "scale(1)";
        
            } else {
                document.getElementById('feature1').style.transform = "scale(0)";
                document.getElementById('feature2').style.transform = "scale(0)";

        
            }
});

window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 335) {
        document.getElementById('feature3').style.transform = "scale(1)";
        document.getElementById('feature4').style.transform = "scale(1)";
        
            } else {
                document.getElementById('feature3').style.transform = "scale(0)";
                document.getElementById('feature4').style.transform = "scale(0)";

        
            }
});

window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 805) {
        document.getElementById('phase1').style.transform = "translateX(0)";
        
            } else {
                document.getElementById('phase1').style.transform = "translateX(-150%)";

        
            }
});
window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 1155) {
        document.getElementById('phase2').style.transform = "translateX(0)";
        
            } else {
                document.getElementById('phase2').style.transform = "translateX(250%)";

        
            }
});
window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 1400) {
        document.getElementById('phase3').style.transform = "translateX(0)";
        
            } else {
                document.getElementById('phase3').style.transform = "translateX(-150%)";

        
            }
});
window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 1755) {
        document.getElementById('phase4').style.transform = "translateX(0)";
        
            } else {
                document.getElementById('phase4').style.transform = "translateX(250%)";

        
            }
});


function menu() {
    document.getElementById('hamburger').classList.toggle('change');
}