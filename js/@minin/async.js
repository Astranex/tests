// Event Loop

// Асинхронное программирование – стиль программирования, при котором результат работы функций доступен не сразу, а через некоторое время.
// Асинхронная функция – это функция, после вызова которой JavaScript приложение продолжает работать, потому что функция сразу выполняет возврат.

const timeout = setTimeout( () => { // Задаёт таймаут (задержку) после которой срабатывает callback функция
	console.log('Текст спустя 2.5с')
}, 2500) 

clearTimeout(timeout) // Отключает таймаут

const interval = setInterval(() => { // Задаёт интервал (цикл) с задержкой, после прохождения задержки, срабатывает callback, и так по кругу
	console.log('Текст каждые 3 секунды')
}, 2000) 

clearInterval(interval) // Отключает интервал
	
const delay = (callback, wait = 1000) => { // Функция, берущая в себя в качестве параметров аргументы функции setTimeout()
	setTimeout(callback, wait)
}

delay(() => {console.log('Текст спустя 4 секунды')}, 4000) // Первый параметр – callback функция, второй параметр – задержка

const newDelay = (wait = 1000) => {
	const promise = new Promise((resolve, reject) => { // Внутри промиса находится функция таймаут с параметрами промиса
		setTimeout(() => {
			// resolve() // Promise.resolve() – возвращает Promise выполненный с переданным значением. В качестве значения может выступать промис
			// reject('Что-то пошло не так. Повторите попытку') // Promis.reject() – возвращает ошибку в Promise и параметр err для метода catch
		}, wait)
	})
	return promise // Возвращает промис, то есть возвращает таймаут функцию
}

// newDelay(2500)
// 	.then(() => console.log('Текст спустя 2,5с'))
// 	.catch(err => console.error('Ошибка:', err))
// 	.finally(() => console.log('Успешно'))


const getData = () => new Promise(resolve => resolve( // Функция getData принимает в себя промис с методом resolve для массива чисел
	[1, 1, 2, 3, 5, 8, 13, 21, 34]
))

getData().then(data => console.log(data)) // Вызываем функцию методом then с параметром data, где data возвращает массив чисел

async function asyncExample() { // Асинхронная функция со встроенной задержкой
	try { // Нативная конструкция блок try - catch - finally
		await newDelay(3000) // await используется для ожидания окончания Promise
		const data = await getData() // Получаем данные из getData
		console.log('Данные:', data)
	} catch (e) { // Ловим ошибку
		console.log('Ошибка:', e) // где e - это значение, которое вернул промис, то есть error (reject)
	} finally {
		console.log('Успешное завершение')
	}
}

asyncExample()

// setInterval (() => {
// 	let sec = 0
// 	sec++
// 	console.log(sec)
// }, 1000) 

for (i = 0; i < 1; i++) {
	let sec = 0
	let min = 0
	let hour = 0
	let day = 0
	setInterval (() => {
		if (sec < 59) {
			sec++
			console.log('Секунда:', sec)
		} else if (sec == 59) {
			sec = 0
			min++
			if (min <= 59) {
				console.log(`Прошла ${min}-я минута`)
			}
		} else if (min == 60) {
			min = 0
			hour++
			if (hour <= 23) {
				console.log(`Прошёл ${hour}-й час`)
			}
		} else if (hour == 24) {
			hour = 0
			day++
			console.log(`Прошёл ${day}-й день`)
		}
	}, 1000)
}

// setTimeout(() => console.log('Таймер закончился!'), 10000)

// Асинхронные события – это задержки, таймеры, обновления. 
// Из других примеров – отслеживание курсора и клики тоже являются асинхронными событиями на стороне браузера
// JS async также используется для ajax запросов