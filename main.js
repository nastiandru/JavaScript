const liczba1 = document.querySelector('#liczba')
consile.dir(liczba1)
const przeliczBtn = document.querySelector('#przelicz')
przeliczBtn.addEventListener('click', () => {
    console.log(liczba1.value)
})
//Math.min(), .max()