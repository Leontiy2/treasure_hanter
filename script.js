function getRandomNumber(size) {
    //Math.random() --> [0,1)
    // [0,1) * 5 = [0*5,1*5) --> [0;5)
    // [0,1) * size = [0*size,1*size) --> [0;size)
    //Math.random() * size --> [0;size)
    let num = Math.floor(Math.random() * size);
    return num;
}

// Розраховує відстань від кілку (event) до скарбу (target)
function getDistance(event, target) {
    const diffX = event.offsetX - target.x;
    const diffY = event.offsetY - target.y;
    const dist = Math.sqrt((diffX * diffX) + (diffY * diffY));
    return dist;
}

// Задання відстані для отримання підказки
function getDistanceHint(distance) {
    if (distance < 10){
        return "Пече!";
    } else if (distance < 20) {
        return "Дуже гаряче";
    } else if (distance < 40) {
        return "Гаряче";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Дуже холодно";
    } else {
        return "Можна замерзнути";
    }
}


const width = 450;
const height = 400;
let click = 0;

const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

const mapElement = document.getElementById("map")
mapElement.addEventListener("click", (event) => {
    click++; //click = click + 1
    const answer = getDistanceHint(getDistance(event, target));
    document.getElementById('distance').innerHTML = `Результат: ${answer}`;//сформатоване виводення `a ${}`
    document.getElementById('counter').innerHTML = `Кількість ходів: ${click}`;
    if (answer === 'Пече!') {
        alert('Молодець!');
    }
    if (answer === maxMoves ) {
        alert('Ти програв!');
    }
});