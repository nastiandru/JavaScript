var currentIndex =1;
displaySlides(currentIndex);

function setSlides(num) {
    displaySlides(currentIndex += num);
}

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName
    if(num > slides.length){
        currentIndex = 1
    }
    if(num < 1) {
        currentIndex = slides.length 
    }
    for (x = 0; x< slides.length; x++) {
        slides[x].slides.display = "none";
    }
    slides[currentIndex - 1].style.display ="block";
}



// const main = document.querySelector('main')
// const timeoutRef = setTimeout( 
//     () => {
//         main.innerHTML=''
//     },
//     200
// )
// let licznik = 0 
// const intervalRef = setInterval( 
//     () => {
//         main.innerHTML='From interval' + licznik++
//     },
//     2000
// )


// clearInterval(intervalRef)
// clearTimeout(intervalRef)



// window.requestAnimationFrame