const input = document.getElementById('input');
const hisob = document.getElementById('hisob');
const add = document.getElementById('add');
const result = document.getElementById('result');
const res = document.getElementById('res');
const kopaytrish = document.getElementById('kopaytrish');
const clear = document.getElementById('clear');
const avg = document.getElementById('avg');

const array = document.getElementById('array')

let arr = [];

const addNumber = () => {
    let newNumber = parseFloat(input.value.trim());
    if (!newNumber && newNumber !== 0) {
        alert("Maydon bo'sh bo'lmasligi kerak");
    } else {
        arr.push(newNumber);
        input.value = '';
    }
    array.textContent = arr
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') addNumber();
});

add.addEventListener('click', addNumber);

const calculateSum = () => arr.reduce((acc, num) => acc + num, 0);
const calculateProduct = () => arr.reduce((acc, num) => acc * num, 1);
const calculateAverage = () => (arr.length ? calculateSum() / arr.length : 0);

result.addEventListener('click', () => {
    res.textContent = calculateSum();
    arr = [];
});

kopaytrish.addEventListener('click', () => {
    res.textContent = calculateProduct();
});

avg.addEventListener('click', () => {
    res.textContent = calculateAverage();
});

clear.addEventListener('click', () => {
    res.textContent = 0;
    arr = [];
    input.value = '';
    array.textContent = ''
});
