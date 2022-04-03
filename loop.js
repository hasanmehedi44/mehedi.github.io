const person = ['Shujon Mahmud', 35, 'Bangladesh', 'Student', '5.3 inch'];

for (let i = 0; i < person.length; i++) {
    console.log(person[i]);
}

let element = document.querySelectorAll('.lists li');

for (let i = 0; i < element.length; i++) {
    element[i].style.fontSize = 20 + i + 'px';
}










