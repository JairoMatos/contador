const numIn = document.querySelector('#inicio');
const numEnd = document.querySelector('#fim');
const numStep = document.querySelector('#passo');
const read = document.querySelector('.txtContador');

const count = () => {
    let start = Number(numIn.value)
    let end = Number(numEnd.value)
    let steps = Number(numStep.value) 
    if(steps == '') steps = 1
    if(read.innerHTML.length == 0) {
        while(start <= end){
            read.innerHTML += `${start}...`;
            start = start + steps;
            numEnd.value = '';
            numIn.value = '';
            numStep.value = '';
        }
        read.innerHTML += ` 🏁`
    }
}
function clean(){
    read.innerHTML = '';
}