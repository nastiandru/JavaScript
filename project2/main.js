// notatnik z zajęć
const main = document.querySelector('main')
const timeoutRef = setTimeout( 
    () => {
        main.innerHTML=''
    },
    500
)
let licznik = 0 
const intervalRef = setInterval( 
    () => {
        main.innerHTML='From interval' + licznik++
    },
    2000
)

// kasujemy setInterval
clearInterval(intervalRef)

// kasujemy setTimeout
clearTimeout(intervalRef)


// window.requestAnimationFrame