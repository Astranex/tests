// 1. Функции

// Function Declaration – функция может быть вызвана в любой части кода, повсеместно

function greet(name) {
	console.log('Привет,', name)
}

// Function Expression – создаём функцию и складываем её в переменную / функция может быть вызвана только после самой себя

const greet2 = function(name) { // Анонимная функция, не даём ей названия, так как складываем в переменную
	console.log('Привет 2,', name)
}

greet('Виталий')
greet2('Алексей')

// console.dir(greet) 

// Задаём интервал в 1000мс, и c этим кд возвращаем в консоль инкрементированную переменную counter

// 2. Анонимные функции

let counter = 0

const interval = setInterval( function() {
	if (counter === 5) {
		clearInterval(interval) // Очищает интервал, он перестаёт работать после первого использования, но можно сделать условие
	} else {
		console.log(++counter)
	}
}, 1000)

const timeout = setTimeout( function() { // Задаём ЗАДЕРЖКУ в виде 2000 мс, проигрывается один раз
	console.log(++counter) // cleartTimeout тоже есть
}, 2000)

// 3. Стрелочные функции

const arrow = (name) => {
	console.log('Привет,', name)
}

const arrow2 = name => console.log('Привет,', name) // Если параметров >1, то перечислять необходимо в круглых скобках, если параметров нет вовсе, скобки необходимы
	
arrow('Виталий')
arrow2('Сергей')

// const pow = num => {
// 	return num ** 2
// }

const pow = num => num ** 2

console.log(pow(5))

// 4. Параметры по умолчанию

// const sum = (a, b) => a + b
const sum = (a = 20, b = a - 7) => a + b

console.log(sum(12,8))
console.log(sum())

function sumAll(...all) { // Функция собирает элементы в массив
	// console.log(all) // Демонстрация массива
	let result = 0
	for (let num of all) {
		result += num
	}
	return result
}

const res = sumAll(1, 2, 3, 4, 5)
console.log(res)

// 5. Замыкания

function createMember(name) {
	return function(lastName) {
		return name + ' ' + lastName
	}
}

const logWithLastName = createMember('Виталий') // Результатом функции будет внутренняя функция, она берёт в себя заданный параметр, теперь можно вызвать функцию переменной
console.log(logWithLastName('Галюзин')) // Задаём оставшийся параметр
console.log(logWithLastName('Фролов')) 
console.log(logWithLastName('Рождественский')) 