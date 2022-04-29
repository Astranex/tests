// DOM дерево, работа с html // Document Object Model, где каждый html элемент является объектом // РАБОТА С API БРАУЗЕРА

// window.alert('Алерт') // alert – это метод глобального объекта window, так как он глобальный, мы можем его опустить (не писать)
// window.prompt('Введите данные')
// window.confirm('Подтверждение')

// document // Представляет DOM-дерево
const heading = document.getElementById('heading') // h1#heading // Поиск элемента в DOM по id
const headingParagraph = document.getElementById('headingParagraph')

console.dir(heading) // Свойства объекта h1 (все элементы html являются объектами и их свойства можно раскрывать, тем самым узнавая методы)
console.log('tag:', heading.tagName)
console.log('node:', heading.nodeName) // Важное понятие. Node – узел
console.log('id:', heading.id)
console.log('class:', heading.className)
console.log('value:', heading.innerText)

// textContent = innerText = innerHTML

console.log(heading.textContent)
console.log(heading.id)

heading.style.color = 'red' // Свойство style ведёт к множеству поднастроек, каждая из которых идёт из css

element = document.getElementById('heading')

function addStylesTo(node, text = 'Обычный текст', color = 'blue', fontSize) { // ФУНКЦИЯ
	node.innerText = text
	node.style.color = color 
	node.style.textAlign = 'center'
	node.style.backgroundColor = '#fff'

	// falsy: '', undefined, null, 0, false

	if (fontSize) { // Условие спрашивает, если fontSize не falsy
		node.style.fontSize = fontSize
	}
}

setTimeout(() => {
	addStylesTo(heading)
}, 2000)

// console.log(document.getElementsByTagName('h2') // Возвращает коллекцию элементов. Старый метод, лучше не пользоваться

console.log(document.getElementsByClassName('heading-2'))
console.log(document.getElementsByClassName('heading-2')[0])

const h2 = document.querySelector('h2')// Метод querySelector можно использовать для возвращения любого CSS селектора (как в jQuery). Возвращает ВСЕГДА 1 элемент (первый попавшийся)
const head2 = document.querySelector('#head')
const heading2 = document.querySelector('.heading-2')

console.log(h2, head2, heading2)

// КАЖДЫЙ ЭЛЕМЕНТ ЯВЛЯЕТСЯ ТАКИМ ЖЕ УЗЛОМ, КАК И DOCUMENT

// console.dir

console.log(document.querySelectorAll('h2'))
// heading3 = document.querySelectorAll('h2')[document.querySelectorAll('h2').length - 1] // last child
heading3 = document.querySelectorAll('h2')[1].children[0]
heading3.innerText = 'Другой текст'

setTimeout(() => {
	addStylesTo(heading3, undefined, 'green', '1.2rem') // Где undefined – ненайденный параметр, который заменяется на "по-умолчанию"
	heading2.nextElementSibling.children[0].textContent = 'Новый текст' // заголовок.следующийЭлемент.егоРебенок[по нулевому индексу(первый)].егоТекстовыйКонтент
}, 3000)

link = heading3 // link – a

link.addEventListener('click', (event) => { 
	event.preventDefault() // Отключение привычного события по клику на ссылку, где event – событие по умолчанию
	console.log(event)
	console.log(event.target) // Возвращает ссылку (переменную link)
	console.log('Click on link', event.target.getAttribute('href')) // Возвращает атрибут href необходимой ссылки 

	window.location = event.target.getAttribute('href') // Программный переход по ссылке
	// setAttribute
})


heading.addEventListener('dblclick', () => { // Вторым параметром указывается listener
	if (heading.style.color === 'blue') {
		heading.style.color = '#fff'
		heading.style.backgroundColor = '#000'
	} else {
 		heading.style.color = 'blue'
		heading.style.backgroundColor = '#fff'
	}
})

// console.log(days, hours, mins, secs)

// let days = document.getElementById('days')
// let hours = document.getElementById('hours')
// let mins = document.getElementById('mins')
// let secs = document.getElementById('secs')

// for (i = 0; i < 1; i++) {
// 	let sec = 0
// 	let min = 0
// 	let hour = 0
// 	let day = 0
// 	setInterval (() => {
// 		if (sec < 59) {
// 			sec++
// 			// console.log('Секунда:', sec)
// 			secs.innerHTML = sec
// 		} else if (sec == 59) {
// 			sec = 0
// 			min++
// 			if (min <= 59) {
// 				// console.log(`Прошла ${min}-я минута`)
// 				mins.innerHTML = min
// 			}
// 		} if (min == 60) {
// 			min = 0
// 			hour++
// 			if (hour <= 23) {
// 				// console.log(`Прошёл ${hour}-й час`)
// 				hours.innerHTML = hour
// 			}
// 		} if (hour == 24) {
// 			hour = 0
// 			day++
// 			// console.log(`Прошёл ${day}-й день`)
// 			days.innerHTML = day
// 		}
// 	}, 1000)
// }

