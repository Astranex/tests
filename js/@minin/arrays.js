// 1. Массивы

const cars = ['Тойота', 'Мерседес', 'Мазда', 'Шевроле']
const people = [
	{name: 'Виталий', budget: 1200}, // people[0].name & people[0].budget
	{name: 'Сергей', budget: 2700},
	{name: 'Владислав', budget: 4450},
	{name: 'Олег', budget: 100},
	{name: 'Артём', budget: 0}
]

// Функция

function addItemToEnd() {
	// метод push
}

// Метод – обращается к объекту. Это объектные функции

cars.push('Седан') // Добавляет элемент в конец массива
cars.unshift('БМВ') // Добавляет элемент в начало массива

const lastCarsItem = cars.pop() // Убирает элемент из конца массива
const firstCarsItem = cars.shift() // Убирает элемент из начала массива

console.log(firstCarsItem, cars, lastCarsItem)
console.log(cars.reverse())
console.log(cars)

console.log('------------------------------------')

// Задача №1

const text = 'Привет, мы изучаем JavaScript'

const reverseText = text.split('').reverse().join('') // Раскладываем текст на массив букв, разворачиваем массив и собираем обратно в текст
console.log(reverseText)

console.log('------------------------------------')

const index = cars.indexOf('Шевроле') // Позиция 3
cars[index] = 'Порше' // Программно находим индекс слова и меняем слово на другое
console.log(cars)

console.log('------------------------------------')

let findedPerson

function findPerson(budget) {
	for (const person2 of people) { // 1. // ДЛЯ НАГЛЯДНОСТИ
		if (person2.budget === budget) {
			findedPerson = person2
		}
	}
	return findedPerson
}

console.log('Функция findPerson', findPerson(2700))

console.log('------------------------------------')

const indexPerson = people.findIndex(function(person) { // 2. // Метод findIndex цикличен, он проходит по всему массиву самостоятельно
	return person.budget === 2700
})
console.log(people[indexPerson])


const person = people.find(function(person) { // 3. // Метод findIndex цикличен, он проходит по всему массиву самостоятельно
	return person.budget === 1200
})
console.log(person)


const person3 = people.find((person3) => { // 4.
	return person3.budget === 100
})
console.log(person3)


const person4 = people.find(person4 => person4.budget === 0) // 5. НАГЛЯДНЫЙ ПРИМЕР УПРОЩЕНИЯ
console.log(person4)



console.log(cars.includes('Мазда')) // boolean. expected result: true

const upperCaseCars = cars.map(car => car.toUpperCase()) // {return ...} тоже самое, что и ...
console.log(upperCaseCars)


// -------------Р-И-Ф-М-А--------------- //

// const currentWord = prompt().toLowerCase();
const currentWord = 'слова'.toLowerCase();
const endOfWord = [currentWord.substr(length-3), currentWord.substr(length-2)]

// Ударения а́ о́ и́ е́ у́ ы́ э́ ю́ я́ – в этой версии не используются

const words = ['казанова', 'василек', 'улова', 'пир', 'собор', 'зажигалка', 'сова', 'жир', 'Алексей', 'Быстрова', 'маргинал', 'обнова', 'мир', 'Добродир', 'благодарность', 'коленвал']
const strictRhymeWords = []
const unstrictRhymeWords = []

	const strictRhymes = words.map(word => { // Метод map берёт массив, раскладывает его на элементы, к каждому из которых применяет функцию, а затем собирает новый массив
		return word.endsWith(endOfWord[0])
	})

	const unstrictRhymes = words.map(word => {
		return word.endsWith(endOfWord[1])
	})
	
	for (i = 0; i < words.length; i++) {

		if (words[i] !== currentWord) {

			if (strictRhymes[i] === true) {
				strictRhymeWords.push(words[i])
			}

			if (unstrictRhymes[i] === true) {
				unstrictRhymeWords.push(words[i])
			}
		}

	}

	for (i = 0; i < strictRhymeWords.length; i++) { // Удаление повторяющихся строгих рифм из массива нестрогих
		let indexOfRhyme = unstrictRhymeWords.indexOf(strictRhymeWords[i])
		unstrictRhymeWords.splice(indexOfRhyme, 1)
	}

// console.log(strictRhymes)
// console.log(unstrictRhymes)
console.log('Строгие рифмы:', strictRhymeWords)
console.log('Нестрогие рифмы:', unstrictRhymeWords)


// ------------------------------------- //

// --- Последовательность фибоначчи --- //

const fib = [1, 1]

for (let num of fib) {
	if (fib.length < 30) {
		fib.push(fib[fib.length - 1] + fib[fib.length - 2])
	}
}

console.log(fib)

// ------------------------------------- // 

const pow = (num, degree) => num ** degree // Декларативное и лаконичное оформление
console.log(pow(2, 4))

const powFib = fib.map(pow) // Берём массив чисел, раскладываем его на элементы num и при каждой итерации map возводим элементы в степень, затем собираем массив

const filteredNumbers = powFib.filter(num => num >= 7921 && num <= 6677056) // Фильтрует данные, оставляет лишь те, что больше или равны 7921 и меньше или равны 6677056
console.log(powFib)
console.log(filteredNumbers)

// --------------------- //

const numbers = [0, 1, 3, -1, 2] // В сумме 5

let sum = 0

for (let n of numbers) {
	sum += n
	console.log('Сумма на итерации', n, ':', sum)
}

console.log('Конечная сумма:', sum)

const reducedNumbers = numbers.reduce((acc, number) => { // Метод reduce цикличен. Он выполняет callback функцию для каждого перебираемого элемента массива
	return acc + number
}, 'A') // Вторым параметром можно указать значение аккумулятора по умолчанию, в таком случае значение number будет начинаться с первого элемента массива
// Если же не задавать initialValue, аккумулятор будет назначен первым элементом перебираемого массива а currentValue последующим

console.log('Конечный аккумулятор:', reducedNumbers)

// Подобную функцию можно использовать и для вычисления в работе со всем массивом и для генератора рандомных ключей

// --------------------- //

const allBudget = people.reduce((acc, person) => { // Для каждого итерируемого объекта массива people вызывается фукнция, которая суммирует бюджет всех людей
	acc += person.budget
	return acc
}, 0)

console.log(allBudget)

const filteredBudget = people.reduce((acc, person) => {
	if (person.budget > 1000) {
		acc += person.budget
	}
	return acc
}, 0)

console.log(filteredBudget)

const newFilteredBudget = people.filter(person => person.budget > 1000).reduce((acc, person) => { // Чейнинг, несколько методов подряд
	acc += person.budget
	return acc
}, 0)

console.log(newFilteredBudget)