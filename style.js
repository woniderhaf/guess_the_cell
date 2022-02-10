const input = document.querySelectorAll('.item') //блоки
const map = document.querySelector('.map') // карта
const counter = document.querySelector('.counter') // счетчик кликов
const Play = document.querySelector('.play') //время

// начало
alert('Ты готов начать играть?')
let go = confirm('После нажатия пойдет обратный отсчет. Успей найти 10 загаданных ячеек ')
let play = 60; // время игры


//считает время игры
let goes = setInterval(() => {
  play--;
  if (play > 0) {
    Play.innerHTML = play
  } else {
    alert('Вы ПРОИГРАЛИ')
    clearInterval(goes)

  }
}, 1000);


//массив рандомных чисел
const arr = []
for (let i = 0; i<10; i++) {
  let rand = Math.floor(Math.random() * 100);
  if(rand != +0) {
    arr[i] = rand
  } else {
    arr[i] = 99
  }
}

// задачем id всем ячейкам
try{
  for(let i = 0; i <= input.length; i++) {
    input[i].id = `${i+1}`
    input[i].innerHTML = input[i].id
  }
}catch(e){}


// меняем цвет на белый если промахнулись
for(let item of input) {
  item.addEventListener('click', () => {
    arr.forEach(link => {
      if(+item.id != link) {
         item.style.background = 'white'
      }
    })
  })
}


let counters = 0 // число щелчков
let count = 0 // число попаданий
for(let item of input) {
  item.addEventListener('click', () => {
    counters++
    counter.innerHTML = counters
    arr.forEach(link => {
      if(+item.id == link) {
        item.style.background = 'red';
        count++;
        if(count == 10) {
          alert('winn')
          clearInterval(goes)
        }
      }
    })
  })
}




console.log(arr);
