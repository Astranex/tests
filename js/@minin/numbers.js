// 1. Числа

// В js числовые переменные не делятся на различные типы. Они могут быть как integer, так и float

const num = 42 // integer
const floatNum = 42.5 // float
const pow = 10e3 // Результат: 10000 // 10 * (10^3)

const negative = -42
console.log(negative < 10) // Задаём вопрос, меньше ли значение переменной negative (-42), чем 10 // true

console.log(num, floatNum, pow)

// Number – встроенный js объект, который содержит в себе правила, константы и функции
// Math – встроенныq объект, хранит в своих свойствах и методах различные математические константы и функции

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log('Math.pow(2, 53)', Math.pow(2, 53) - 1)
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log('1 / 0', 1 / 0)
console.log(Number.NaN, typeof NaN) // Not a Number, при этом тип NaN – number
console.log(2 / undefined)
const weird = 2 / undefined
console.log(Number.isNaN(weird)) // Является ли проверяемое NaN // true
console.log(isNaN(42)) // Функции внутри объекта можно писать также без приставки объекта. Пример: isNan()
console.log(Number.isFinite(weird)) // Конечно ли проверяемое
console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(42))

const stringInt = '42'
const stringFloat = '42.5'
console.log(stringInt + 2) // 422 // JS конкатенирует строку, так как тип данных переменной stringInt – string
console.log(Number.parseInt(stringInt) + 2) // Функция parseInt преобразует строку в число // 44
console.log(parseInt(stringInt) + 2)
console.log(Number(stringInt) + 2)
console.log(+stringInt + 2) // Самый простой и лаконичный вариант

console.log(stringFloat + 2)
console.log(parseInt(stringFloat)) // Преобразует в число, однако убирает дробный хвост
console.log(parseFloat(stringFloat))
console.log(+stringFloat)
console.log(+stringFloat + 7)

console.log(0.4 + 0.2) // 0.6000000000000001 // Нездоровая ситуация
console.log((4 / 10) + (2 / 10))
console.log((0.4 + 0.2).toFixed(4)) // Функция toFixed сохраняет какое-то количество знаков (параметр) после запятой, однако делает число строкой
console.log(+(0.4 + 0.2).toFixed(1)) // Решение
console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// 2. BigInt

console.log(9007199254740991, typeof 9007199254740991)
console.log(900719925474099198797978987, typeof 900719925474099198797978987)
console.log(900719925474099198797978987n, typeof 900719925474099198797978987n)
console.log(-900719925474099198797978987n, typeof -900719925474099198797978987n)
// console.log(10n - 4) // error
console.log(parseInt(10n) - 4)
console.log(10n - BigInt(4))
console.log(10n - 4n)

console.log(5n / 2n) // Результат 2n, потому что big INTEGER

// 3. Math

console.log(Math.E) // Экспонента
console.log(Math.PI) // ПИ

console.log(Math.sqrt(25)) // Квадратный корень
console.log(Math.pow(5, 3)) // Возведение в степень, где первый параметр – число, а второй – степень
console.log(Math.abs(-42)) // Функция модуля, отнимает отрицательный знак, если он есть, и возвращает по итогу просто число
console.log(Math.max(42, 12, 26, 717, 9, 0, 5, 1.5)) // Максимум
console.log(Math.min(42, 12, 26, 717, 9, 0, 5, 1.5)) // Минимум
console.log(Math.floor(4.9)) // Округление в меньшую сторону
console.log(Math.ceil(4.1)) // Округление в большую сторону

console.log(Math.round(4.5)) // Вернёт 5, так как функция round округляет в большую, если 0.x >= 0.5
console.log(Math.round(4.4)) // Вернёт 4, так как функция round округляет в меньшую, если 0.x < 0.5

console.log(Math.trunc(4.5)) // Функция trunc удаляет все дробные знаки, возвращая целое число
console.log(Math.trunc(7.8451642))

console.log('------------------------------------')

const numbers = [5, 17, 23.5, 984, 1, -52, 0]
console.log(numbers)

for (let num of numbers) {
	console.log(num)
}

console.log('------------------------------------')

console.log(Math.random())

function getRandomBetween (min, max) {
	return Math.random() * (max - min) + min
}

console.log(getRandomBetween(5, 7))

function getRandomFloor (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomFloor(5, 12))