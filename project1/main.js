
const addFieldBtn = document.querySelector('#addField')
const sum = document.querySelector('#sum')
const min = document.querySelector('#min')
const max = document.querySelector('#max')
const srednia = document.querySelector("#srednia")

let numbers =[];
let nextinputNumber = 0;

addFieldBtn.addEventListener('click', () =>{
    const newField = document.createElement('input');
    newField.type = 'number';
    newField.className = 'numberInput';
    newField.id = nextinputNumber;
    newField.placeholder = 'Number ${nextinputNumber}';
    document.querySelector('#numberContainer').appendChild(newField)
    numbers.push(newField);
    nextinputNumber++;

    const newFieldDeleteBtn = document.createElement('button');
    newFieldDeleteBtn.className = 'deleteBtn';
    newFieldDeleteBtn.id = 'deleteBtn${nextinputNumber}';
    newFieldDeleteBtn.innerHTML = 'Delete';
    document.querySelector('#numberContainer').appendChild(newFieldDeleteBtn);

    
    newFieldDeleteBtn.addEventListener('click',() =>{
        newFieldDeleteBtn.remove();
        newField.remove();
        let index = numbers.indexOf(newField.value)
        numbers.splice(index,1);
        przelicz
    })

    newField.addEventListener('change', () => {
        przelicz();

    })
})

przelicz = () => {
    const numArray = numbers.map((num) => Number(num.value));
    if(numArray.length >0) {

        sum.innerHTML = numArray.reduce((a,b) => a+b, 0)
        srednia.innerHTML = numArray.reduce((a,b) => a+b, 0) /numArray.length; 
        min.innerHTML = Math.min(...numArray);
        max.innerHTML = Math.max(...numArray);
    }
    else
       zero();
};

zero = () => {
    sum.innerHTML = 0;
    srednia.innerHTML = 0;
    min.innerHTML = 0;
    max.innerHTML = 0;
}


