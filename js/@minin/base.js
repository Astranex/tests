// 42

// --===-- ОСНОВЫ --===-- //

// 1. Переменные

// var   УСТАРЕВШАЯ ФОРМА ПЕРЕМЕННОЙ
// let   АКТУАЛЬНАЯ ФОРМА ПЕРЕМЕННОЙ
// const   НЕРЕДАКТИРУЕМАЯ ФОРМА ПЕРЕМЕННОЙ, КОНСТАНТА, ДОСТУПНА ЛИШЬ ДЛЯ ЧТЕНИЯ. КОНСТАНТА ОБЯЗАТЕЛЬНО ДОЛЖНА БЫТЬ ОБЪЯВЛЕНА

// Метод написания переменных camelCase (характерен для php, python, js). Каждое новое слово в названии пишется с большой буквы (пример: isJsDeveloper)

// Ставить ; необязательно. Есть лишь несколько исключений. Смотреть, требует ли того проект

var name = 'Vitaly' // string
const lastName = 'Galyuzin' // string 
let age = 19 // number
let isProgrammer = true // boolean
let isJsDeveloper = true

// Можно создавать переменные из одного символа, а также начинать переменную с различных символов

const _ = 'Значение переменной _'
const $ = 'Значение переменной $'

// Можно создавать переменную с цифрой в названии, однако НЕЛЬЗЯ начинать переменную с цифры

const $var2 = 'Значение переменной $var2'
// const 2$var = "Значение" // error

// Также нельзя называть переменные зарезервированными словами, которые уже используются в языке

// const if // error
// const print // error

console.log(name, lastName, age, 'какая-то строка', isProgrammer)

if (isProgrammer === true) {
	isProgrammer = 'Программист'
}

console.log(name, lastName, age, 'ещё какая-то строка', isProgrammer)

age = 20

console.log(name, lastName, age, 134.5, isProgrammer)

// 2. Мутирование

// + служит для конкатенации значений. Для объединения значений в одну строчку или другой тип данных

console.log('Имя человека:', name, 'а возраст человека:', age) // Имя человека: (string) Виталий (string) а возраст человека: (string) 20 (number)
console.log('Имя человека: ' + name + ' а возраст человека: ' + age) // Имя человека: Виталий а возраст человека: 20 (string) // Пример конкатенации

// JAVASCRIPT ДИНАМИЧЕСКИ ТИПИЗИРУЕМЫЙ ЯЗЫК, ТИП ДАННЫХ И ЗНАЧЕНИЕ ПЕРЕМЕННОЙ ВПОСЛЕДСТВИИ МОЖНО МЕНЯТЬ (пример: number > string, и так далее)

console.log(age)
console.log(age.toString()) // Тип данных number мутировал в тип данных string

age = 20
age = 'Twenty' // Меняем значение переменной с number на string

// let newLastName = prompt('Введите фамилию')
// alert(name + ' ' + newLastName)

// 3. Операторы

// = 	объявление переменной

// +	плюс, оператор конкатенации
// -	минус

// ++	инкремент
// --	дискремент

// == 	нестрогое равенство
// ===	строгое равенство
// >	больше
// <	меньше
// >=	больше либо равно
// <=	меньше либо равно

let currentYear = 2022
const birthYear = 2002

const currentAge = currentYear - birthYear // Используя числовые переменные и оператор (знак минус), мы смогли получить необходимое значение
console.log(currentAge)

const a = 10
const b = 4

let c = 32
c = c + b
// с += b // Должно работать, но почему-то синтаксическая ошибка, эквивалент тому, что выше

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(c)

// currentYear++ // Не задан приоритет для инкрементирования, поэтому значение переменной останется прежним

console.log(++currentYear) // Ставим приоритет для инкремента
console.log(--currentYear)

// Задачка на инкремент и декремент

// let value = 0
// let heading = document.getElementsByTagName('h5')[0]
// heading.innerText = value

// function incr() {
// 	++value
// 	heading.innerText = value
// }

// function decr() {
// 	--value
// 	heading.innerText = value
// }

// 4. Типы данных

// Существует 5 примитивных типов данных:

const currentString = 'Строка' // string
const currentNumber = 35 // number
const isDesigner = false // boolean
let x // undefined
// null

// object – объектный тип данных, составной

console.log(typeof currentString, typeof currentNumber, typeof isDesigner, typeof x, null) // Выведенны типы данных с помощью typeof

// 5. Приоритет операторов

const _fullAge = 19
const _birthYear = 2002
const _currentYear = 2022

const isFullAge = (_currentYear - _birthYear) >= _fullAge // Приоритет операторов можно проверять с помощью таблицы приоритетов на mdn
console.log(isFullAge)

// 6. Условия (Условные операторы)

const courseStatus = 'pending' // ready, fail, pending

if (courseStatus === 'ready') {
	console.log('Курс уже готов и его можно проходить')
} else if (courseStatus === 'pending') {
	console.log('Курс находится в разработке')
} else if (courseStatus === 'fail') {
	console.log('Курс не разработан')
} else {
	console.log('По курсу нет никакой информации')
}

num1 = 42
num2 = '42'

console.log(num1 == num2) // true, потому что нестрогое равенство, переменные приводятся к общему типу данных и проверяются по значению
console.log(num1 === num2) // false, потому что равенство строгое

const isReady = true

if (isReady === true) { // Можно также писать просто isReady, так как это boolean
	console.log('Работает')
}

if (isReady) {
	console.log('Работает')
} else {
	console.log('Не работает')
}

isReady ? console.log('Тернарное работает') : console.log('Тернарное не работает') // Тернарное выражение, где ? обозначает блок if, а : обозначает блок else

// 7. Булевая логика (Логические операторы)

// &&	И
// ||	ИЛИ
// !	НЕ

// true && true // true
// true && false // false
// false && true // false
// false && false // false

// true || true // true
// true || false // true
// false || true // true
// false || false // false

// Оператор отрицания может быть использован n-е количество раз

// 8. Функции

function calculateAge(year) { // функция(параметр, параметр), где параметры выступают в роли локальных переменных, которые можно задать при вызове функции
	return currentYear - year
}

const myAge = calculateAge(2002)
console.log(myAge)

console.log(calculateAge(2004))
console.log(calculateAge(2012))
console.log(calculateAge(1994))

function logInfoAbout(name, year) {
	const myAge = calculateAge(year)

	if (myAge > 0 && myAge <= 120) {
		console.log('Имя: ' + name + ' ' + 'Возраст: ' + myAge)
	} else {
		console.log('Имя: ' + name + ' ' + 'Возраст: недопустимый')
	}
}

logInfoAbout('Надежда', 1975)

// 9. Массивы

// const names = new Array('Сергей', 'Владислав', 'Виктор', 'Игорь')
const names = ['Сергей', 'Владислав', 'Виктор', 'Игорь'] // Создание массива

console.log(names)
console.log(names[0])
console.log(names[2])
console.log(names[1])
console.log(names[4])

console.log(names.length)

names[0] = 'V' // Внутренние элементы массивов можно редактировать (даже не смотря на то, что массив создан константой)
console.log(names[0])

// 0-n это статический индекс

names[5] = 'Олег'
names[names.length] = 'Семён' // Элемент массива с динамическим индексом arr.length всегда будет в конце массива, так как принадлежит индексу с его длиной
// ['V', 'Владислав', 'Виктор', 'Игорь', пусто, 'Олег', 'Семён']

console.log(names)

// 10. Циклы

const cars = ['Тойота', 'Мерседес', 'Мазда', 'Шевроле']

for (let i = 0; i < cars.length; i++) {
	console.log(i) // У цикла три параметра, где i - итератор с нулевым индексом. Цикл проверяет, меньше ли i, чем длина массива. Если да, то i инкрементирует и код выполняется
	console.log(cars[i])
	const car = cars[i]
	console.log(car) // тоже самое, что cars[i], но в отдельной переменной
}

cars[4] = 'БМВ'
cars[5] = 'Газель'

for (let car of cars) { // цикл для массивов for of, намного проще и лаконичней
	console.log(car)
}

// 11. Объекты (шестой тип данных)

// Объекты группируют значения и дают возможность описать модель и её свойства

// const person = new Object({})
const person = {
	firstName: 'Виталий',
	lastName: 'Галюзин',
	birthYear: 2002,
	languages: ['Русский', 'Украинский', 'Английский'],
	hasGirl: true,
	greet: function() {
		console.log('Приветствие')
	}
}

console.log(person)

console.log(person.firstName)
console.log(person['lastName'])
const key = 'languages' // Динамический ключ
console.log(person[key]) 
person.greet()

person.hasGirl = false // Параметр объекта можно менять, также как и переменную
person.isProgrammer = true // Добавление нового параметра в объект
console.log(person)

// --===-- --- --===-- //