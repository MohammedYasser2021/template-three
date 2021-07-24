var slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var slides = document.getElementsByClassName("slides");
    var slideNumber = document.getElementsByClassName("slider-number");
    if(slideIndex < 1){
        slideIndex = slides.length;
    }
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        slideNumber[i].textContent = slideIndex + " / " + slides.length;
    }
    slides[slideIndex - 1].style.display = "block";
}

document.body.classList.add(localStorage.getItem("page-color"));
var colorLi = document.querySelectorAll(".color li");
var classes = [];
for(i = 0; i < colorLi.length; i++){
        classes.push(colorLi[i].getAttribute("data-color"));
        colorLi[i].addEventListener("click",function(){
        document.body.classList.remove(...classes);
        document.body.classList.add(this.getAttribute("data-color"));
        localStorage.setItem("page-color",this.getAttribute("data-color"))
    },false)
}

