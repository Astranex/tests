// ПРАКТИЧЕСКИЕ ЗАДАНИЯ

// (daruse.ru)

// На основные знания //
// ---- Базовые ----  //

// 1. Написать функцию, которая принимает два числа и возращает результат их умножения

const multiply = (a, b) => a * b

console.log('Задача 1:', multiply(5, 3))

// 2. Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию)

const logAboutPerson = (personName, personLastName, age) => `Привет, ${personName +' '+ personLastName} с возрастом ${age} лет` // {} и return можно не писать

console.log('Задача 2:', logAboutPerson('Виталий', 'Галюзин', 19))

// 3. Написать функцию, которая принимает пол человека ('M','F') в виде строки, результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен"

const logAboutGender = gender => {
    if (gender == 'M' || gender == 'М') {
        return 'Ваш пол мужской'
    } else if (gender == 'F' || gender == 'Ф') {
        return 'Ваш пол женский'
    } else {
        return 'Ваш пол не опеределен'
    }
}

console.log('Задача 3:', logAboutGender('M'))

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

const dayOfWeek = num => {
    for (let day of week) {
        if (num - 1 === week.indexOf(day)) {
            return day
        } else if (num <= 0 || num >= 8) {
            return 'Недопустимое число'
        }
    }
}

console.log('Задача 4:', dayOfWeek(5))

// 5. Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), верните каждое первое слово в каждом предложении, через запятую.

const anaphora = text => {

    // text = text.replaceAll('!','.')
    // text = text.replaceAll('?','.')
    // text = text.replaceAll('?!','.')
    // text = text.replaceAll('...','.') // Вместо реплейса поставил регулярку

    let splitedText = text.split(/[?*!*.*]+/gm)

    for (i = 0; i < splitedText.length; i++) {
        if (splitedText[i] === '') {
            splitedText.splice(i, 1)
        } else {
            splitedText[i] = splitedText[i].trim()
            splitedText[i] = splitedText[i].split(' ')[0]
        }
    }
    return splitedText.join(', ')
}

console.log('Задача 5:', anaphora('Стеклянные капельки дождя стучат по крышам! Редкие прохожие спешат спрятаться от дождя в подъездах домов. По мостовой бегут ручьи.'))

// 6. Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)

let date = new Date()

const greeting = personName => {
    let greet
    let hour = date.getHours()

    if (hour >= 5 && hour < 12) {
        greet = 'Доброе утро'
    } else if (hour >= 12 && hour < 18) {
        greet = 'Добрый день'
    } else if (hour >= 18 && hour < 22) {
        greet = 'Добрый вечер'
    } else {
        greet = 'Доброй ночи'
    }

    return `${greet}, ${personName}`
}

console.log('Задача 6:', greeting('Виталий'))

// 7. Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый

const ageStatus = (age) => {

let ageState

if (age) { // Доработка функции согласно заданию 8

    for (a = age; a <= 100; a++) {
        if (a > 0 && a <= 17) {
            ageState = 'ребёнок'
        } else if (a >= 18 && a <= 30) {
            ageState = 'молодой' 
        } else if (a >= 31 && a <= 55) {
            ageState = 'зрелый'
        } else if (a > 55) {
            ageState = 'старый'
        }
        
       return ageState
    }} else {

        for (a = 1; a <= 100; a++) {
            if (a > 0 && a <= 17) {
                ageState = 'ребёнок'
            } else if (a >= 18 && a <= 30) {
                ageState = 'молодой' 
            } else if (a >= 31 && a <= 55) {
                ageState = 'зрелый'
            } else if (a > 55) {
                ageState = 'старый'
            }
            
            console.log('Задача 7:', `${a} - ${ageState}`)
        }
    }
}

ageStatus()

// 8. Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый). 
// А также вызови внутри своей функции функцию из прошлого задания

const infoAbout = (personName, personAge) => {
    let ageState = ageStatus(personAge)
    return `${personName} имеет возраст ${personAge} и он ${ageState}`
}

console.log('Задача 8:', infoAbout('Иван', 44))

// ---- Массивы ----  //

// 9. Сделай функцию, которая принимает массив любых целых чисел, которая возращает истину, если все элементы четные, если бы хотя бы один элемент не четный, то false.

const numbers = [1, 5, 8, 3, 4, 6 , 2, 0, -1] // [2, 4, 8, 8, 4, 6 , 2, 8, 10]

const isOdd = () => {
    for (let number of numbers) {
        if (number % 2 === 0 === false) { // % 2 === 0 – проверка на чётность числа (проверка остатка от деления на 2)
            return false
        } else {
            return true
        }    
    }
}

console.log('Задача 9:', isOdd())

// 10. Сделай функцию, которая принимает массив любых целых чисел, которая возращает истину, если хотя бы один элемент нечетный, если все четные, то false.

const nums = [1, 5, 8, 3, 4, 6 , 2, 0, -1] // [2, 4, 8, 8, 4, 6 , 2, 8, 10]

const isEven = () => {
    for (let number of nums) {
        if (number % 2 === 0 === false) { // % 2 === 0 – проверка на чётность числа (проверка остатка от деления на 2)
            return true
        } else {
            return false
        }    
    }
}

console.log('Задача 10:', isEven())

// 11. Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])

const numbersArray = [1, 2, 5, 12, 15, 21, 35, 55, 23, 100]

const multiplesOfFive = () => numbersArray.filter(number => number % 5 === 0)

console.log('Задача 11:', multiplesOfFive())

// 12. Написать функцию, которая принимает массив чисел, например [1, 2, 3, 4, 5] и функция возращает среднее арифметическое (округлить результат до десятых)

// const average = () => numsArray.reduce((acc, number) => { Reduce здесь не подходит
//     acc += number
//     return acc
// })

const numsArray = [1, 6.6, 3, 4.98, 5.1]
let sum = 0

const average = () => {

for (let n of numsArray) {
	sum += n
    if (numsArray.indexOf(n) === numsArray.length - 1) {
        sum /= numsArray.length
        return sum.toFixed(1)
    }
}}

console.log('Задача 12:', average())

// 13. Написать функцию, которая принимает массив чисел, например [1, 2, 3, 4, 5], и переносит первый элемент массива в конец 
// (Например можно засунуть первый элемент в конец, затем удалить первый элемент)
// Попробуй несколькими способами сделать, если догадаешься

const numsArr = [1, 2, 3, 4, 5] 
console.log('Задача 13:', numsArr)

const replace = () => {
    firstNum = numsArr.shift()
    numsArr.push(firstNum)
}

replace()
console.log('Задача 13:', numsArr)

replace()
console.log('Задача 13:', numsArr)

// 14. Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст ([{name: 'Иван', age: 23},...]) 
// и возвращает массим, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23"

const workers = [
    {personName: 'Виталий', age: 19, job: 'дизайнер'},
    {personName: 'Сергей', age: 19, job: 'программист'},
    {personName: 'Ержан', age: 19, job: 'дизайнер'},
    {personName: 'Виктор', age: 19, job: 'маркетолог'},
    {personName: 'Мария', age: 19, job: 'маркетолог'}
]

const logAboutWorkers = () => workers.map(person => `Имя: ${person.personName}, возраст: ${person.age}, специализация: ${person.job}`)
console.log('Задача 14:', logAboutWorkers())

// ---- Объекты ----  //

// 15. У нас есть объект, в котором хранятся зарплаты нашей команды: Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390
// Если объект salaries пуст, то результат должен быть 0

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

if (Object.keys(salaries).length === 0) {
    console.log('Задача 15:', 0)
} else {
    const valuesSalaries = Object.values(salaries)
    console.log('Задача 15:', valuesSalaries.reduce((acc, value) => acc += value))
}

// 16. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2

// Например:

// --- до вызова функции ---
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// --- после вызова функции ---
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект
// P.S. Используйте typeof для проверки, что значение свойства числовое

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

console.log('Задача 16:', menu)

const multiplyNumeric = (obj, multiplier) => { // Вторым параметром добавил изменяемый множитель

    const keysArray = Object.keys(obj)
    const valuesArray = Object.values(obj)

    for (i = 0; i < valuesArray.length; i++) {
        if (typeof valuesArray[i] === 'number') {
            valuesArray[i] *= multiplier
            obj[keysArray[i]] = valuesArray[i]
        }
    }
}

multiplyNumeric(menu, 5)
console.log('Задача 16:', menu)

// 17. Написать объект ladder - объект, который позволяет подниматься вверх и спускаться. Пример работы должен быть таким:

// ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
// ladder.up(); 
// ladder.up();
// ladder.showStep(); // 2
// ladder.down();
// ladder.showStep(); // 1

// let step = 0

const ladder = {
    step: 0, 
    showStep() {return this.step}, 
    up() {this.step++}, 
    down() {this.step--}
}

console.log('Задача 17:', ladder.showStep())
ladder.down()
ladder.up()
ladder.up()
ladder.up()
console.log('Задача 17:', ladder.showStep())
console.log('Задача 17:', ladder)

// ---- Работа c DOM ----  //

// 18. Вывести кнопку с текстом "Привет", при нажатии на неё выводим alert c текстом "Привет Мир!"

document.write('<button id=\'hello-btn\'>18. Привет</button><br/>')
const helloBtn = document.getElementById('hello-btn')

helloBtn.onclick = () => alert('Привет, мир!')

// 19. Выводим кнопку с текстом "Заполнить" и незаполненный инпут, при клике на кнопку, заполняем инпут текстом "test@email.ru"

document.write('<button id=\'fill-btn\'>19. Заполнить</button><br/><input type=\'text\'></input>')
const fillBtn = document.getElementById('fill-btn')
const fillInput = document.getElementsByTagName('input')[0]

fillBtn.onclick = () => fillInput.value = 'test@email.ru'

// 20. Выводим кнопку и инпут, в инпуте можно ввести любой и текст и при нажатии на кнопку, выводится алерт с текстом "Вы ввели 'текст инпута'" или "Вы ничего не ввели в поле"

document.write('<button id=\'show-btn\'>20. Показать текст инпута</button><br/><input type=\'text\'></input>')
const showBtn = document.getElementById('show-btn')
const showInput = document.getElementsByTagName('input')[1]

showBtn.onclick = () => alert(showInput.value ? `Вы ввели ${showInput.value}` : `Вы ничего не ввели в поле`)

// 21. Выводим кнопку с текстом "Поменять" и два инпута, при клике на кнопку инпуты меняются своим введеным текстом

document.write('<button id=\'replace-btn\'>21. Поменять текст инпутов</button><br/><input type=\'text\'></input><br/><input type=\'text\'></input>')
const replaceBtn = document.getElementById('replace-btn')
const replaceInput = document.getElementsByTagName('input')[2]
const replaceInputTwo = document.getElementsByTagName('input')[3]

// var a = 1,
//     b = 2,
//     tmp;
// tmp = a;
// a = b;
// b = tmp;

replaceBtn.onclick = () => [replaceInput.value, replaceInputTwo.value] = [replaceInputTwo.value, replaceInput.value]

// 22. Выводим две кнопки "заблокировать" и "разблокировать" и инпут. Одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует

document.write('<button id=\'unblock-btn\'>22. Заблокировать инпут</button><br/><button id=\'block-btn\'>22. Разблокировать инпут</button><br/><input type=\'text\'></input><br/>')

const unblockBtn = document.querySelector('#unblock-btn')
const blockBtn = document.querySelector('#block-btn')
const blockedInput = document.getElementsByTagName('input')[4]

unblockBtn.onclick = () => blockedInput.setAttribute('disabled', 'disabled')
blockBtn.onclick = () => blockedInput.removeAttribute('disabled')

// 23. Вывести любой квадрат и кнопку "скрыть квадрат". Когда мы нажимаем на скрыть, квадрат исчезает и текст кнопки меняется на "показать квадрат" 
// И так можно кликать сколько угодно раз

document.write('<button id=\'switch-btn\'>23. Скрыть квадрат</button><br/>')
document.write('<div class=\'red-square\'></div>')

const switchBtn = document.querySelector('#switch-btn')
const redSquare = document.querySelector('.red-square')

let inc = 0

switchBtn.onclick = () => {
    if (inc == 0) {
        inc++
        redSquare.style.opacity = '0'
        switchBtn.innerText = '23. Показать квадрат'
    } else if (inc == 1) {
        inc--
        redSquare.style.opacity = '1'
        switchBtn.innerText = '23. Скрыть квадрат'
    }
    // console.log(inc)
}

// 24. Выводим красный квадрат, при наведении на него он становиться зеленым, а когда уводим курсор от него, обратно красным

document.write(`<br/><div class='red-square' id='focus-square'>7</div><br/>`) // ИСПОЛЬЗУЯ `` НОВОГО СИНТАКСИСА, ЭКРАНИРОВАНИЕ УПРАВЛЯЮЩИХ КАВЫЧЕК МОЖНО ОПУСКАТЬ

let focusSquare = document.querySelector('#focus-square')
focusSquare.onmouseover = () => focusSquare.style.backgroundColor = 'green'
focusSquare.onmouseout = () => focusSquare.style.backgroundColor = 'red'

// 25. Вывести 4 красных квадрата, при клике на любой, он становиться зеленым, при этом если есть уже зеленый квадрат
// то он становится обратно красным и так можно кликать на любой квадрат, он становиться зеленым, а старый зеленый квадрат обратно крассным и тд. 
// (Сделать задачу так, чтобы можно было добавить ещё хоть 100 квадратов при этом скрипт не надо менять).

const sq = `<div class='red-square centurion-square' onclick='this.classList.contains("foo") ? this.classList.remove("foo") : this.classList.add("foo");
    for (i = 0; i < centurionSquare.length; i++) {
        if(centurionSquare[i].classList.contains("foo") && centurionSquare[i] !== this) {
            centurionSquare[i].classList.remove("foo")
        }}'>8</div>`

document.write(sq)
document.write(sq)
document.write(sq)
document.write(sq)

let centurionSquare = Array.from(document.querySelectorAll('.centurion-square')) // Создаём домассив из псевдомассива (nodeList) из всех элементов с классом centurion-square

console.log(centurionSquare)

for (i = 0; i < centurionSquare.length; i++) {
    centurionSquare[i].setAttribute('id', i)
}

// centurionSquare[0].onclick = () => centurionSquare.map(square => alert(square.getAttribute('id') == centurionSquare[0].getAttribute('id')))

// centurionSquare.onclick = () => alert('!')

    // centurionSquare[i].onclick = () => {
    //     console.log(i)
    // }

// 26. Реализовать калькулятор. Выводим 10 кнопок цифр от 0 до 10. Кнопки: умножить, поделить, сложить, вычесть, вычислить. 
// При нажатии на кнопки в любом порядке выводится в отдельном блоке строка (5-4+3*2...) и при нажатии на кнопку 'вычислить'
// заменяем в блоке данную строку на результат её вычисления, при этом можно потом дальше вычислять уже c этим вычислением.

document.write(`<div class="calculator">
                    <div class="calculator__output"></div>
                        <div class="calculator__keys">
                            <button class="calculator__key calculator__key--operator">+</button>
                            <button class="calculator__key calculator__key--operator">-</button>
                            <button class="calculator__key calculator__key--operator">*</button>
                            <button class="calculator__key calculator__key--operator">/</button>
                            <button class="calculator__key">7</button>
                            <button class="calculator__key">8</button>
                            <button class="calculator__key">9</button>
                            <button class="calculator__key">4</button>
                            <button class="calculator__key">5</button>
                            <button class="calculator__key">6</button>
                            <button class="calculator__key">1</button>
                            <button class="calculator__key">2</button>
                            <button class="calculator__key">3</button>
                            <button class="calculator__key">0</button>
                            <button class="calculator__key">.</button>
                            <button class="calculator__key">C</button>
                            <button class="calculator__key calculator__key--enter">=</button>
                        </div>
                    </div>`)

const calcKeys = Array.from(document.querySelectorAll('.calculator__key'))
let calcOutput = document.querySelector('.calculator__output')

for (i = 0; i < calcKeys.length; i++) {
    calcKeys[i].setAttribute(`onclick`, `calcOutput.innerText += this.innerText;
    if (calcOutput.innerText.endsWith(".")) {
        calcKeys[calcKeys.length - 3].setAttribute("disabled", "disabled")
    } else {
        calcKeys[calcKeys.length - 3].removeAttribute("disabled")
    }`)
}

calcKeys[calcKeys.length - 2].setAttribute(`onclick`, `calcOutput.innerText = ''`)
calcKeys[calcKeys.length - 1].setAttribute(`onclick`, `calcOutput.innerText != 0 ? calcOutput.innerText = eval(calcOutput.innerText) : calcOutput.innerText = 0`)

// ---- Регулярные выражения ----  //

// 27. Проверка URL на валидность. Передаем урл функции и проверяем валидное оно или нет (возращаем тру или фолс). Критерии: Урл должен начинаться с http:// иили https:// 
// и заканчиваться на .php или .html. Например - http://site.ru/index.php - валидный, http://site.com - не валидный, site.ru/index.php - не валидный

// Регулярные выражения – теория

// . – любой символ // I. - I и любой символ после
// [] – любой из них, диапазон // [abcd] [a-d] [0-9]
// $ – конец строки // .$ - символ в конце любой строки // \.$ - все концы строк, заканчивающиеся на точку
// \ – экранирование, замена управляющего символа на его текстовый вариант
// ^ – начало строки // ^T - те строки, что начинаются с большой буквы T
// [^] – отрицание // ^[^a] - все начала строк, которые начинают не с a
// \d – любая цифра // тоже самое, что и [0-9]
// \D – что угодно, кроме цифр
// \n – перенос строки
// \s – пробел
// \S – что угодно, кроме пробелов
// \w – буква
// \W – что угодно, кроме букв
// \b – граница слова
// \B – нет границ

// Квантификация
// n{4} – искать n подряд 4 раза
// n{4,6} – искать n от 4 до 6 раз
// * – от нуля и выше
// ? – от нуля до одного
// + – от одного и выше


const urlRe = new RegExp(/https*:\/\/[\w*,\d*]+.\w+\/\w+.(html|php)/gm)

const isValidUrl = url => url.match(urlRe) ? 'Валидная ссылка' : 'Невалидная ссылка'

console.log('Задача 27:', isValidUrl('http://astranex.ru/index.html')) // Валидная
console.log('Задача 27:', isValidUrl('https://astran3x.ru/ind3x.php')) // Валидная
console.log('Задача 27:', isValidUrl('http://astranex.com')) // Невалидня

// 28. Проверка номера телефона на валидность. Передаем телефон функции и проверяем валидное оно или нет (возращаем тру или фолс). 
// Такие номера должны быть валидными: 89991112233, 8 (999) 1112233, +7 (999) 111-22-33, +7 (999) 111 22 33. 
// Т.е. телефон может начинаться как и с +7, так и с 8. код оператора, может быть в скобках и без, и с пробелами. 
// Оставшиеся часть может быть с дефисами и пробелами

const phoneRe = new RegExp(/^\+?(7|8)\d*\s?[(?\d*)?]*\s?\d*[-?,\s?]?\d*[-?,\s?]?\d*$/gm)

const isValidPhone = phone => phone.match(phoneRe) ? 'Валидный номер телефона' : 'Невалидный номер телефона'

console.log('Задача 28', isValidPhone('89991112233'))
console.log('Задача 28', isValidPhone('8 (999) 1112233'))
console.log('Задача 28', isValidPhone('+7 (999) 111-22-33'))
console.log('Задача 28', isValidPhone('+329199) 111 22-33'))

// (learn.javascript.ru)

/*

const calculator = {
    read() {
    //   this.quantity = prompt('Сколько операндов вам необходимо?', '2')
  
      for (let i = 0; i < this.quantity; i++) {
        // this[i] = prompt(`Введите ${i+1}-е значение`, '')
      }
    },
    sum() {
      let sum = 0
  
      for (let i = 0; i < this.quantity; i++) {
        sum += +this[i]
      }
  
      return sum
    },
    mul() {
      let mul = 1
      
      for (let i = 0; i < this.quantity; i++) {
        mul *= +this[i]
      }
  
      return mul
    }
}

  // console.log(calculator)

calculator.read()
console.log(calculator.sum())

// console.log(calculator)

console.log(calculator.mul())

*/

// (old.code.mu) 

// Задачи на основы языка JavaScript

// Задача 1. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.

let str = 'abcde'
console.log(str[0])
console.log(str[1])
console.log(str[4])

// Задача 2. Напишите скрипт, который считает количество секунд в часе.

console.log(60 * 60) // Количество секунд в часе
console.log(60 * 60 * 24) // Количество секунд в сутках

// Задача 3. Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться. Код для переделки:

/* 

var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num);

*/

let newNumber = 1
newNumber += 12
newNumber -= 14
newNumber *= 5
newNumber /= 7
newNumber++
newNumber--
console.log(newNumber)

// Работа с переменными

// Задача 4. Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.

const newNum = 3

console.log(newNum) // Алёрты для педиков

// Задача 5. Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).

const aa = 10, bb = 2

console.log(aa + bb)
console.log(aa - bb)
console.log(aa * bb)
console.log(aa / bb)

// Задача 6. Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.

const c = 15, d = 2
const result = c + d

console.log(result)

// Задача 7. Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.

const an = 10, bn = 2, cn = 5
console.log(an + bn + cn)

// Задача 8. Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7.
// Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.

const ann = 17
const bnn = 10
const cnn = ann - bnn
const dnn = 7

const newResult = cnn + dnn
console.log(newResult)

// Работа со строками

// Задача 9. Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.

const newStr = 'Привет, Мир!'
console.log(newStr)

// Задача 10. Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.

const string1 = 'Привет'
const string2 = 'Мир!'

console.log(`${string1}, ${string2}`)

// Задача 11. Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.

const myName = 'Виталий'
console.log(`Привет, ${myName}!`)

// Задача 12. Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.

const myAge = 19

console.log(`Мне ${myAge} лет!`)

// Функция prompt

// Задача 13. Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.

// const userName = prompt('Введите ваше имя', '')
// alert(`Ваше имя ${userName}`)

// Задача 14. Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.

// const enteredNumber = prompt('Введите любое число', '')
// alert(enteredNumber * enteredNumber)

// Обращение к символам строки

// Задача 14. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.

const alsoNewString = 'abcde'
console.log(str[0])
console.log(str[1])
console.log(str[4])

// Задача 15. Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.

const alsoNewNumber = '12345'

console.log(alsoNewNumber[0] * alsoNewNumber[1] * alsoNewNumber[2] * alsoNewNumber[3] * alsoNewNumber[4])

// Практика 

// Задача 16. Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

const SECONDS_IN_HOUR = 60 * 60
const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24
const SECONDS_IN_MONTH = SECONDS_IN_DAY * 30

console.log(
    'Секунд в часе:', SECONDS_IN_HOUR,
    'Секунд в дне:', SECONDS_IN_DAY,
    'Секунд в месяце:', SECONDS_IN_MONTH
    )

// Задача 17. Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.

const currentHour = 8
const currentMinute = 30
const currentSecond = 52

console.log(`${currentHour}:${currentMinute}:${currentSecond}`)

// Задача 18. Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.

let alsoNewNumber2 = 4
alsoNewNumber2 **= 2

console.log(alsoNewNumber2)

// Работа с присваиванием и декрементами

// Задача 19. Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. Количество строк кода при этом не должно измениться.

/* 

var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num);

*/

let newNumber2 = 1
newNumber += 12
newNumber -= 14
newNumber *= 5
newNumber /= 7
newNumber++
newNumber--
console.log(newNumber2)

// Задача 20. Переделайте этот код так, чтобы в нем использовались операции ++ и --. Количество строк кода при этом не должно измениться.

/* 
var num = 10;
num = num + 1;
num = num + 1;
num = num - 1;
alert(num);
*/

let numberItem = 10
numberItem++
numberItem++
numberItem--
console.log(numberItem)

// Работа с массивами

// Задача 21. Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.

const arr = ['a', 'b', 'c']

console.log(arr) // Сколько раз повторять, alert для педиков

// Задача 22. С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.

console.log(arr[0], arr[1], arr[2])

// Задача 23. Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.

const newArr = ['a', 'b', 'c', 'd'] 

console.log(`${newArr[0]} + ${newArr[1]}, ${newArr[2]} + ${newArr[3]}`)

// Задача 24. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
// Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

const alsoNewArr = [2, 5, 3, 9]
const ArrResult = alsoNewArr[0] * alsoNewArr[1] + alsoNewArr[2] * alsoNewArr[3]
 
console.log(ArrResult)

// Объекты (ассоциативные массивы)

// Задача 25. Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:

const obj = {a: 1, b: 2, c: 3}

console.log(obj['c'], obj.c)

// Задача 26. Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.

const newObj = {Коля: '1000', Вася: '500', Петя: '200'}

console.log('Зарплата Пети:', newObj.Петя)
console.log('Зарплата Коли:', newObj.Коля)

// Задача 27. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

const daysOfWeek = { // В ключи нельзя задавать числа
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
}

let currentDayOfWeek = 5

console.log(daysOfWeek[currentDayOfWeek]) // Обратиться к числовому ключу можно только через скобки, также, как и к ключу из нескольких слов

// Задача 28. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

const multiArray = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]

console.log(multiArray[1][0])

// Задача 29. Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.

const newObject = {
    js:['jQuery', 'Angular'], 
    php: 'hello', 
    css: 'world'
}

console.log(newObject.js[0])

// Задача 30. Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, 
// а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).

const lang = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}

console.log(lang.ru[0])
console.log(lang.en[2])

// Задача 31.  Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня. 
// Выведите словом день недели, соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.

const getDay = (day, num) => {
  return lang[day][num - 1]
}

console.log(getDay('en', 3))

// Задачи на конструкции if-else, switch-case в JavaScript

// Работа с if-else

// Задача 32. Если переменная numberA равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

let numberA = -3

if (numberA === 0) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

// Задача 33. Если переменная numberB больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

let numberB = 1

if (numberB > 0) {
    console.log('Верно')
} else {
    console.log('Неверно')
}


// Задача 34. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

let numberC = 1 

if (numberC < 0) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

// Задча 35. Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

let numberD = 0

if (numberD >= 0) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

// Задача 36. Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

let numberE = 1

if (numberE <= 0) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

// Задача 37. Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

let numberF = 1

if (numberF != 0) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

// Задача 38. Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

let numberG = 'text'

if (numberG === 'test') {
    console.log('Верно')
} else {
    console.log('Неверно')
}

// Задача 39. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.

let alsoNumber = '2' 

if (alsoNumber === '1') {
    console.log('Верно')
} else {
    console.log('Неверно')
}

// Работа с логическими переменными

// Задача 40. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. 
// Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

// let testA = true

// if (testA === true) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }

let testA = true

console.log( testA ? 'Верно' : 'Неверно' )

// Задача 41. Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. 
// Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

// let testB = true 

// if (testB !== true) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }

let testB = true 

console.log( testB ? 'Неверно' : 'Верно')

// Работа с && (и) и || (или)

// Задача 42. Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

let numberAA = 3

if (numberAA > 0 && numberAA < 5) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

// Задача 43. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. 
// Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

let numberBB = 0

if (numberBB == 0 || numberBB == 2) {
    numberBB + 7
} else {
    numberBB / 10
}

console.log(numberBB)

// Задача 44. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). 
// Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

let numberCC = 1
let numberDD = 3

if (numberCC <= 1 && numberDD >= 3) {
    console.log(numberCC + numberDD)
} else {
    console.log(numberCC - numberDD)
}

// Задача 45. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

let numberEE = 2
let numberFF = 5

if (numberEE > 2 && numberEE < 11 || numberFF >= 6 && numberFF < 14) {
    console.log ('Верно')
} else {
    console.log('Неверно')
}

// На switch-case

// Задача 46. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', 
// если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

const num = 3
let numResult

switch (num) {
    case 1:
        numResult = 'Зима'
        break;
    case 2:
        numResult = 'Весна'
        break;
    case 3:
        numResult = 'Лето'
        break;
    case 4:
        numResult = 'Осень'
        break;
    default:
        numResult = 'Такого индекса времени года не существует'
        break;
}

console.log(numResult)

// Задача 47. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let currentDay = 11

if (currentDay > 0 && currentDay < 11) {
    console.log(`${currentDay}-е число относится к первой декаде`)
} else if (currentDay >= 11 && currentDay < 21) {
    console.log(`${currentDay}-е число относится ко второй декаде`)
} else if (currentDay >= 21 && currentDay <= 31) {
    console.log(`${currentDay}-е число относится к третьей декаде`)
} else {
    console.log('Недопустимое число')
}

// Задача 48. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = 11

switch (month) {
    case 1:
    case 2:
    case 12:
        console.log('Месяц относится к зиме')
        break;
    case 3:
    case 4: 
    case 5:
        console.log('Месяц относится к весне')
        break;
    case 6:
    case 7:
    case 8:
        console.log('Месяц относится к лету')
        break;
    case 9:
    case 10:
    case 11:
        console.log('Месяц относится к осени')
        break;
    default:
        console.log('Недопустимое число')
}

// Задача 49. Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. 
// Если это так - выведите 'да', в противном случае выведите 'нет'.

const currentString = 'abcde'

if (currentString.startsWith('a')) { // currentString[0] === 'a'
    console.log('Да')
} else {
    console.log('Нет')
}

// Задача 50. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. 
// Если это так - выведите 'да', в противном случае выведите 'нет'.

const currentNumericString = '12345'

switch (+currentNumericString[0]) {
    case 1:
    case 2:
    case 3:
        console.log('Да')
        break;
    default:
        console.log('Нет')
        break;
}

// Задача 51. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

const numString = '1453'
let numStringSum = 0

for (let i = 0; i < numString.length; i++) {
    numStringSum += +numString[i]
}

console.log(numStringSum)

// Задача 52. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
// Если это так - выведите 'да', в противном случае выведите 'нет'.

const numerString = '145334'

let firstNumerStringSum = 0
let secondNumerStringSum = 0

for (let i = 0; i < numerString.length; i++) {
    
    if (i < 3) {

        firstNumerStringSum += +numerString[i]

            // console.log(i, numerString[i])
            // console.log('Первая сумма', firstNumerStringSum)

    } else if (i >= 3 && i < 6) {

        secondNumerStringSum += +numerString[i]

            // console.log(i, numerString[i])
            // console.log('Вторая сумма', secondNumerStringSum)

    }
}

console.log(firstNumerStringSum === secondNumerStringSum)

// Задачи на циклы while, for в JavaScript

// Циклы while и for. Решите эти задачи сначала через цикл while, а затем через цикл for.

// Задача 53. Выведите столбец чисел от 1 до 100.

let newI = 1;

while (newI <= 100) {
    console.log(newI);
    newI++;
}

for (let i = 1; i <= 100; i++) { console.log(i) }

// Задача 54. Выведите столбец чисел от 11 до 33.

let alsoNewI = 11;

while (alsoNewI <= 33) {
    console.log(alsoNewI);
    alsoNewI++;
}

for (let i = 11; i <= 33; i++) { console.log(i) }

// Задача 55. Выведите столбец четных чисел в промежутке от 0 до 100.

let newIterator = 0
while (newIterator <= 100) {
    if (newIterator % 2 === 0) {
        console.log(newIterator)
    }
    newIterator++
}

for (let i = 0; i <= 100; i++) { i % 2 === 0 && console.log(i) }

// Задача 56. С помощью цикла найдите сумму чисел от 1 до 100.

let cycleSum = 0

for (let i = 1; i <= 100; i++) { cycleSum += i }
console.log(cycleSum) // 5050

// Работа с for для массивов

// Задача 57. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

const numbArr = [1, 2, 3, 4, 5]

for (let i = 0; i < numbArr.length; i++) {
    console.log(numbArr[i])
}

// Задача 58. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

let numbArrResult = 0

for (let i = 0; i < numbArr.length; i++) { 
    numbArrResult += numbArr[i] 
}

console.log(numbArrResult)

// Работа с for-in

// Задача 59. Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.

let colorObj = { green: 'зеленый', red: 'красный', blue: 'голубой' }

    for (let key in colorObj) {
        console.log(`${key}: ${colorObj[key]}`)
    }

// Задача 60. Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. 
// С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'

let salariesObj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}

for (let key in salariesObj) {
    console.log(`${key} - зарплата ${salariesObj[key]} долларов.`)
}

// ХОРОШИЕ ЗАДАЧИ

// Задача 61. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран
// столбец тех элементов массива, которые больше 3-х, но меньше 10.

let numerArr = [2, 5, 9, 15, 0, 4] 

for (let i = 0; i < numerArr.length; i++) {
    if (numerArr[i] > 3 && numerArr[i] < 10) {
        console.log(numerArr[i])
    }
}

// Задача 62. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

let anotherNumArr = [-1, -6, 2, 50, -9, 1, 0]

positiveNumbersSum = 0

for (let i = 0; i < anotherNumArr.length; i++) {
    if (anotherNumArr[i] > 0) { positiveNumbersSum += anotherNumArr[i] }
}

console.log('Сумма положительных чисел:', positiveNumbersSum)

// Задача 63. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. 
// Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

let alsoNumArr = [1, 2, 5, 9, 4, 13, 4, 10]

for (let i = 0; i < alsoNumArr.length; i++) {
    if (alsoNumArr[i] === 4) {
        console.log('Есть')
        break
    }
}

// Задача 64. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

const numericArray = [10, 20, 30, 50, 235, 3000]

for (let i = 0; i < numericArray.length; i++) {

    switch (+String(numericArray[i])[0]) {
        case 1:
        case 2:
        case 5:
            console.log(numericArray[i])
            break;

        default:
            break;
    }

}

// Задача 65. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

let alsoNumericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let alsoNumArrSum = ''

for (let i = 0; i < alsoNumericArray.length; i++) {
    alsoNumArrSum += '-' + String(alsoNumericArray[i])
}

alsoNumArrSum += '-'
console.log(alsoNumArrSum)

// Задача 66. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

let daysOfWeekArr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

for (let i = 0; i < daysOfWeekArr.length; i++) {
    if (i === 5 || i === 6) {
        console.group(daysOfWeekArr[i])
        console.groupEnd()
    } else {
        console.log(daysOfWeekArr[i])
    }
}

console.log('---------------')
// Задача 67. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите жирным. Текущий день должен храниться в переменной day.

let alsoWeekArr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
let currentDayOfAlsoWeekArr = 'Среда'

for (let i = 0; i < alsoWeekArr.length; i++) {
    if (alsoWeekArr[i] === currentDayOfAlsoWeekArr) {
        console.group(alsoWeekArr[i])
        console.groupEnd()
    } else {
        console.log(alsoWeekArr[i])
    }
}

// Задача 68. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? 
// Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

let someNum = 1000
let countOfIterations = 0

for (let i = 0; someNum >= 50; i++) {
    someNum /= 2
    countOfIterations++
} 

console.log(`Прошло ${countOfIterations} итераций`) // 5
console.log(someNum) // 31.25

// Задачи на математические функции JavaScript

// Работа с %

// Задача 69. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.

let A = 10
let B = 4

console.log(A % B)

console.log('---------------------')

// Задача 70. Даны переменные a и b. Проверьте, что a делится без остатка на b. 
// Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

if (A % B == 0) {
    console.log('Делится, результат деления:', A / B)
} else {
    console.log('Делится с остатком', A % B)
}

// Работа со степенью и корнем

// Задача 71. Возведите 2 в 10 степень. Результат запишите в переменную st.

console.log(Math.pow(2, 10))

// Задача 72. Найдите квадратный корень из 245.

console.log(Math.sqrt(245))

// Задача 73. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let nArr = [4, 2, 5, 19, 13, 0, 10]
let nArrSum = 0

for (let i = 0; i < nArr.length; i++) {
    nArrSum += Math.pow(nArr[i], 3)
}

console.log(Math.sqrt(nArrSum))

// Работа с функциями округления

// Задача 74. Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

let sqr = Math.sqrt(379)

console.log(+sqr.toFixed())
console.log(+sqr.toFixed(1))
console.log(+sqr.toFixed(2))

// Задача 75. Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

const roundedNumbers = {}
let sqrtRounded = Math.sqrt(587)

roundedNumbers.floor = Math.floor(sqrtRounded)
roundedNumbers.ceil = Math.ceil(sqrtRounded)
console.log(roundedNumbers)

// Задача 76. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

console.log(Math.max(4, -2, 5, 19, -130, 0, 10))
console.log(Math.min(4, -2, 5, 19, -130, 0, 10))

// Задача 77. Выведите на экран случайное целое число от 1 до 100.

const randomNum = () => {
    return (1 + Math.random() * (100 - 1)).toFixed() // Можно также воспользоваться Math.floor()
}

console.log(randomNum())

// Задача 78. Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while).

let numbArray = []

for (let i = 0; numbArray.length < 10; i++) {
    numbArray.push( (1 + Math.random() * (1000 - 1) ).toFixed() ) // Можно также воспользоваться Math.floor()
}

console.log(numbArray)

// Работа с модулем

// Задача 79. Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.

let varriableA = 12
let varriableB = 18

console.log(Math.abs(varriableA - varriableB))

// Задача 80. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. 
// Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. 
// Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

let varA = 6
let varB = 1

let varC = varA - varB

console.log( Math.abs(varC) ) // Разность переменных в модуле всегда равна (БОЛЬШЕЕ МИНУС МЕНЬШЕЕ) !!!!!

// Задача 81. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

let newNumbersArray = [12, 15, 20, 25, 59, 79]
let averageOfNumber = 0

for (let num of newNumbersArray) {
    averageOfNumber += num
}

console.log( averageOfNumber / newNumbersArray.length )

// Задача 82. Напишите скрипт, который будет находить факториал числа. 
// Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.

const findFactorial = enteredNumber => {

    let factorial = 1 

    for (let i = 1; i <= enteredNumber; i++) {
        factorial *= i
    }

    return factorial
}

console.log(findFactorial(12))

// Работа с регистром символов

// Задача 83. Дана строка 'js'. Сделайте из нее строку 'JS'.

console.log('js'.toUpperCase())

// Задача 84. Дана строка 'JS'. Сделайте из нее строку 'js'.

console.log('JS'.toLowerCase())

// Работа с length, substr, substring, slice. Работа с indexOf

// Задача 85. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

console.log('я учу javascript!'.length)

// Задача 86. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

let newString = 'я учу javascript'

console.log(newString.substr(2,17)) // Со второго по семнадцатый символ во всех трёх случаях // УСТАРЕВШИЙ МЕТОД
console.log(newString.substring(2,17)) // Если не задавать конец диапазона, результат будет тот же
console.log(newString.slice(2,17))

// Задача 87. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

console.log('Задача 87:', newString.indexOf('учу'))

/* Задача 88. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: 
если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str 
и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str. */

const clipping = (string, index) => {

    let clipedStr = ''

    for (let i = 0; i < index; i++) {
        clipedStr += string[i]
    }

    return clipedStr.trim() + '...'
}

console.log('Задача 88:', clipping('Съешь ещё этих мягких французских булок, да выпей чаю', 10))

// Работа с replace

// Задача 89. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.

console.log('Задача 89:', 'Я-учу-javascript!'.replaceAll('-','!'))

// Работа с split

// Задача 90. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

let stringFromArray = 'я учу javascript!'
console.log('Задача 90:', stringFromArray.split(' '))

// Задача 91. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

console.log('Задача 91:', stringFromArray.split(''))

// Задача 92. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

let currentDate = '2025-12-31'
currentDate = currentDate.split('-').reverse().join('.')

console.log('Задача 92:', currentDate)

// Работа с join

// Задача 93. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

let arrFromStr = ['я', 'учу', 'javascript', '!']

console.log('Задача 93:', arrFromStr.join('+'))

// ЗАДАЧИ

// Задача 94. Преобразуйте первую букву строки в верхний регистр.

let anotherString = 'дорогой друг, я очень рад за тебя'

anotherString = anotherString.split('')
anotherString[0] = anotherString[0].toUpperCase()
anotherString = anotherString.join('')

console.log('Задача 94:', anotherString)

// Задача 95. Преобразуйте первую букву каждого слова строки в верхний регистр.

let alsoAnotherString = 'дорогой друг, я очень рад за тебя'

alsoAnotherString = alsoAnotherString.split(' ').map( word => {
    word = word.split('')
    word[0] = word[0].toUpperCase()
    return word.join('')
})

console.log('Задача 95:', alsoAnotherString.join(' '))

// Задача 96. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
// Транспилятор переменных в camelCase

let varText = 'AnoTHer_STRange_Varriable'.toLowerCase()

varText = varText.split('_').map( word => {

        word = word.split('')

        if (word[0] != varText[0]) {
            word[0] = word[0].toUpperCase()
        }
        
    return word.join('')
})

console.log('Задача 96:', varText.join(''))

// Задачи на функции работы с массивами в JavaScript

// Работа с concat

// Задача 97. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе

console.log('Задача 97:', [1, 2, 3].concat( [4, 5, 6] ) )

// Работа с reverse

// Задача 98. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

console.log('Задача 98:', [1, 2, 3].reverse() )

// Работа с push, unshift

// Задача 99. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

let nArray = [1, 2, 3]
nArray.push(4, 5, 6)

console.log('Задача 99:', nArray)

// Задача 100. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

let mArray = [1, 2, 3]
mArray.unshift(4, 5, 6)

console.log('Задача 100:', mArray)

// Работа с shift, pop

// Задача 101. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

console.log('Задача 101:', ['js', 'css', 'jq'][0])

// Задача 102. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

console.log('Задача 102:', ['js', 'css', 'jq'][['js', 'css', 'jq'].length - 1])

// Работа с slice

// Задача 103. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

console.log('Задача 103:',[1, 2, 3, 4, 5].slice(0, 3)) // 3 элемента начиная с нулевого

// Задчаа 104. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

console.log('Задача 104:', [1, 2, 3, 4, 5].slice(3)) // Начиная с 3-го и до конца

// Работа с splice

// Задача 105. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

let qArray = [1, 2, 3, 4, 5]
qArray.splice(1, 2) // Метод возвращает вырезанное

console.log('Задача 105:', qArray)

// Задача 106. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

let wArray = [1, 2, 3, 4, 5]

console.log( 'Задача 106:', wArray.splice(1, 3) ) // Метод возвращает вырезанное)

// Задача 107. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let eArray = [1, 2, 3, 4, 5]

eArray.splice(3, 0, 'a', 'b', 'c') // Начиная с третьей позиции, вырезая 0 элементов, вставляем a, b и c в массив
console.log('Задача 107:', eArray)

// Задача 108. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let rArray = [1, 2, 3, 4, 5]

rArray.splice(1, 0, 'a', 'b')
rArray.splice(6, 0, 'c')
rArray.splice(8, 0, 'e')

console.log('Задача 108:', rArray)

// СПЛАЙС ОТЛИЧНО ПОДХОДИТ ДЛЯ ТОГО, ЧТОБЫ МЕНЯТЬ МАССИВ !!!

// Задача 109. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

console.log('Задача 109:', [3, 4, 1, 2, 7].sort() ) // МЕТОД SORT СОРТИРУЕТ МАССИВ В ЛЕКСИКОГРАФИЧЕСКОМ ИЛИ НАТУРАЛЬНОМ ПОРЯДКЕ
// ОТ А ДО Я, ОТ 0 ДО 9

// Работа с Object.keys

// Задача 110. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

let qObj = {js:'test', jq: 'hello', css: 'world'}

let qKeys = Object.keys(qObj)

console.log('Задача 110:', qKeys)

// Отработка стандартных функций JavaScript

// Задача 111. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.

let qString = 'это какой-то интересный текст с большой буквы'

qString = qString.split('')
qString[0] = qString[0].toUpperCase()
qString = qString.join('')

console.log('Задача 111:', qString)

// Второй вариант

var wString = 'это какой-то интересный текст с большой буквы';
wString = wString[0].toUpperCase() + wString.substring(1); // substr устаревший, substring делает тоже самое
console.log('Задача 111:', wString);

// Задача 112. Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.

let eString = '123456'
eString = eString.split('').reverse().join('')

console.log('Задача 112:', eString)

// Задача 113. Проверьте, что строка начинается на http://

let rString = 'http://astranex.ru/index.php'

if (rString.startsWith('http://') || rString.startsWith('https://')) {
    console.log('Задача 113:', 'Валидная ссылка')
} else {
    console.log('Задача 113:', 'Невалидная ссылка')
}

// Задача 114. Проверьте, что строка заканчивается на .html.

if (rString.endsWith('html')) {
    console.log('Задача 114:', 'Валидная ссылка')
} else {
    console.log('Задача 114:', 'Невалидная ссылка')
}

// Задачи на основы работы с пользовательскими функциями в JavaScript

// Задача 115. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

const sqrq = number => number ** 2

console.log('Задача 115:', sqrq(5))

// Задача 116. Сделайте функцию, которая возвращает сумму двух чисел.

const sumOfNums = (num1, num2) => num1 + num2

console.log('Задача 116:', sumOfNums(2, 8))

// Задача 117. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

const calculation =  (num1, num2, num3) => (num1 - num2) / num3

console.log('Задача 117:', calculation(5, 7, 2)) // - 1

// Задача 118. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

const alsoDaysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

const getDayOfWeek = index => alsoDaysOfWeek[index - 1]

console.log('Задача 118:', getDayOfWeek(5))