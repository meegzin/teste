const check1 = document.querySelector('.btn1');
const check2 = document.querySelector('.btn2');
const check3 = document.querySelector('.btn3');
const check4 = document.querySelector('.btn4');

if (document.getElementById('radio1').checked) {
    check1.classList.toggle('manual-btn--ativo');
}

if (document.getElementById('radio2').checked) {
    check2.classList.toggle('manual-btn--ativo');
}

if (document.getElementById('radio3').checked) {
    check3.classList.toggle('manual-btn--ativo');
}

if (document.getElementById('radio4').checked) {
    check4.classList.toggle('manual-btn--ativo');
}

let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);