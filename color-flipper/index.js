const colors = ['red', 'white', 'blue', 'green'];

let btn = document.getElementById('btn');
let colorText = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomIndex = randomNumber(); // Fix naming conflict here
    document.body.style.backgroundColor = colors[randomIndex]; 
    colorText.textContent = colors[randomIndex]; 
});

function randomNumber() {
    return Math.floor(Math.random() * colors.length); 
}
