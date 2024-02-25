const boldBtn = document.getElementById('bold');
const italicBtn = document.getElementById('italic');
const strikeBtn = document.getElementById('strike');
const underlineBtn = document.getElementById('underline');
const caseBtn = document.getElementById('case');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const centerBtn = document.getElementById('center');
const justifyBtn = document.getElementById('justify');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
// let textArea = document.getElementById('textInputArea');

const downloadBtn = document.getElementById('downloadBtn');
const contentArea = document.querySelector('.content-area');
const textArea = document.getElementById('textInputArea');

downloadBtn.addEventListener('click', function() {
    if (typeof jsPDF !== 'undefined') {
        const pdf = new jsPDF();
        const content = textArea.value; 
        pdf.text(content, 10, 10);
        pdf.save('content.pdf');
    } else {
        console.error('jsPDF is not defined');
    }
});


let lists = document.querySelectorAll('li');
Array.from(lists).forEach(function(listItem) {
    listItem.addEventListener('click', function() {
        listItem.classList.toggle('active');
    });
});

boldBtn.addEventListener('click', function() {
    textArea.classList.toggle('bold');
});

italicBtn.addEventListener('click', function() {
    textArea.classList.toggle('italic');
});

underlineBtn.addEventListener('click', function() {
    textArea.classList.toggle('underline');
});

strikeBtn.addEventListener('click', function() {
    textArea.classList.toggle('strike');
});

caseBtn.addEventListener('click', function() {
    textArea.classList.toggle('case');
});

leftBtn.addEventListener('click', function() {
    textArea.classList.toggle('alignLeft');
});

rightBtn.addEventListener('click', function() {
    textArea.classList.toggle('alignRight');
});

centerBtn.addEventListener('click', function() {
    textArea.classList.toggle('alignCenter');
});

justifyBtn.addEventListener('click', function() {
    textArea.classList.toggle('alignJustify');
});

let size = 14;
increaseBtn.addEventListener('click', function() {
    size += 1;
    textArea.style.fontSize = size + 'px';
});

decreaseBtn.addEventListener('click', function() {
    size -= 1;
    textArea.style.fontSize = size + 'px';
});


