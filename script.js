var a = document.querySelector("#elem-container")
var fix = document.querySelector("#fixed")
a.addEventListener("mouseenter",function(){
    fix.style.display="block"
})
a.addEventListener("mouseleave",function(){
    fix.style.display="none"
}) 

var elems = document.querySelectorAll(".elem")
elems.forEach(function(i){
    i.addEventListener("mouseenter",function(){
        var image = i.getAttribute("data-image")
        fix.style.backgroundImage = `url(${image})`
    })
})
function swiperAnimation() {
    var swiper = new swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}


function menuAnimation(){
    var menu = document.querySelector("nav h2")
    var full = document.querySelector("#full-scr")
    var  navimg = document.querySelector("nav img")
    var flag = 0 
    menu.addEventListener("click",function(){
        if(flag==0){
        full.style.top = 0
        navimg.style.opacity = 0
        flag=1
        }
        else{
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag=0
    
        }
    
    })
}
var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4000)