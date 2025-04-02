const input = document.getElementById('input');
const hisob = document.getElementById('hisob');
const add = document.getElementById('add');
const result = document.getElementById('result');
const res = document.getElementById('res');
const kopaytrish = document.getElementById('kopaytrish');
const clear = document.getElementById('clear');
const avg = document.getElementById('avg');

let arr = [];
const addNumber = () => {
    let neww = +input.value.trim()
    if (!neww) {
        alert("Maydon bo'sh bo'lmasligi kerak")
    }
    else if (neww) {
        arr.push(neww)
    }
    input.value = ''
}
window.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        addNumber()
    }
})
add.addEventListener('click', () => {
    addNumber()
})

let sum = 0;
res.textContent = sum

result.addEventListener('click', () => {
    for (let i in arr) {
        sum += +arr[i]
    }
    res.textContent = sum
    arr = [];
    input.value = ''

})
kopaytrish.addEventListener('click', () => {
    let sum = 1
    for (let i in arr) {
        sum *= +arr[i]
        console.log(arr[i])
    }
    res.textContent = sum
    console.log(arr)
    input.value = ''
})
clear.addEventListener('click', () => {
    res.textContent = 0
    window.location.reload();
})

avg.addEventListener('click', () => {
    for (let i in arr) {
        sum += +arr[i]
    }
    let avgg = sum / arr.length
    res.textContent = avgg
    input.value = ''
})