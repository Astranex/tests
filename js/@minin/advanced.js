// Прототипы

console.log('---------- Прототипы ----------')



const person = new Object({ // Можно опустить написание new Object, оставив только {}
	name: 'Максим',
	age: 21,
	greet() {return 'Привет!'} // По новому синтаксису можно опустить написание ключа
})

// console.log(person.greet) // Возвращается значение ключа функции
console.log(person.greet()) // Возвращается выполненная функция

// На функции, которые мы не определяли в объекте, возвращаются ошибки, ОДНАКО, на те функции, которые определены в прототипе родительского класса объекта ошибки не возвращаются
// Всё потому что объект наследует все параметры и методы своего прототипа.

Object.prototype.sayHello = function() { 
	return 'Приветики!' // Мы можем обратиться к прототипу глобального класса Object, а затем создать внутри него функцию
} 

// Теперь эта функция наследуется всеми объектами, потому что ими наследуемы все свойства их прототипа!

const human = Object.create(person) // Мы создаём новый объект с помощью метода create и в качестве прототипа нашего объекта определяем старый объект person
console.log(human)
console.log(human.name) // Теперь новый объект наследует все свойства и функции своего прототипа, и соответственно, прототипа своего прототипа
console.log(human.sayHello())

human.name = 'Алексей' // Мы задали ключ в соответствии с прототипом, если ключ будет недоступен, вернётся значение ключа из нижнего уровня (из прототипа)
console.log(human.name)

// Все типы данных в js являются на самом деле объектами и обладают своими методами

const str = new String('Строка')
console.log(str)

// Строка str обладает родительским классом String, который обладает прототипом Object, все свойства котоорого наследуются (в том числе и добавленная нами функция)



console.log('————————————————————————————————')

console.log('.')

// Контекст

console.log('----------- Контекст ----------')
 


function hello() {
	return 'Привет', this
}

// this === window

// window.hello() // Функция возвращает 'Привет' и глобальный объект window, так как находится в контексте window

const man = {
	name: 'Юрий',
	age: 25,
	sayHello: hello,

		// В данном случае функция sayHello относительно объекта man вернёт всё тот же 'Привет' и уже сам объект man, так как находится в его контексте
		// Проще говоря, this – это параметр, обозначающий ту область видимости, в контексте которой он находится

	sayHelloWindow: hello.bind(person), // МЕТОД BIND УКАЗЫВАЕТ ТОТ КОНТЕКСТ, КОТОРЫЙ БУДЕТ ПРИВЯЗАН К ЭТОЙ ФУКНЦИИ
	// Таким образом, теперь this находится не в контексте объекта man, а в контексте person

	logInfo: function(job, phone) {
	console.group('Информация о личности ⬇') // Консольный заголовок
	console.log(`Имя: ${this.name}`) // this.name в данном случае тоже самое, что и man.name. Код стал более универсальным
	console.log(`Возраст: ${this.age}`) 
	console.log(`Работа: ${job}`) 
	console.log(`Имя: ${phone}`)
	console.groupEnd()
	}
}

const woman = {
	name: 'Елена',
	age: 37
}

// Мы воспользуемся функцией объекта man для того, чтобы просчитать данные из другого объекта

logInfoWoman = man.logInfo.bind(woman) // Мы используем функцию из man в КОНТЕКСТЕ объекта woman благодаря методу bind

// Функция не вызывается а возвращается в виде новой функции. Для мгновенного вызова можно использовать метод call

logInfoWoman('Учитель', '+3805984321')

// В методе bind сразу после параметра контекста мы можем передать последующие параметры, необходимые для вложенной функции

// man.logInfo.bind(woman, 'Учитель', '+3805984321')
// man.logInfo.bind(woman, 'Учитель', '+3805984321') // Метод call отличается от bind только тем, что не возвращает функцию, а сразу вызывает
// man.logInfo.apply(woman, ['Учитель', '+3805984321']) // Метод apply отличается от call только тем, что вместо перечисленных параметров мы передаём массив этих параметров

const array = [1, 2, 3, 4, 5]

// const multiplyAll = (arr, n) => { // Чтобы сделать эту функцию адаптивней, мы можем перенести её в прототип массивов в качестве метода
// 	console.log(arr.map(num => num * n))
// }

Array.prototype.multiplyAll = function(n) { // Где n – число на которое необходимо умножить // В верхнем уровне нельзя использовать стрелочную функцию, контекст теряется
	console.log(this.map(num => num * n)) // 
}

array.multiplyAll(12)
array.multiplyAll(30)



console.log('————————————————————————————————')

console.log('.')

console.log('---------- Замыкания ----------')



function createCulcFunction(n) {
	return function() {
		console.log(1000 * n)
	}
}

createCulcFunction(12) // У этого выражения нет результата, так как функция возвращает нам новую функцию
createCulcFunction(12)()

const culcFunction = createCulcFunction(12)

culcFunction()

// Мы задаём функцию без параметров, так как функция была вызвана в контексте другой функции
// Поэтому параметр верхней функции как бы замкнулся в той функции, которую мы вернули
// Сколько бы мы не вызывали новую функцию, в ней всегда будет храниться заданное значение n

function createIncrementor(n) {
	return function(num) {
		return n + num
	}
}

const incrementOne = createIncrementor(1)
const incrementThree = createIncrementor(3)

console.log(incrementOne(3))
console.log(incrementThree(3))

function urlGenerator(domain) {
	return function(url) {
		return `http://${url}.${domain}`
	}
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')
const uaUrl = urlGenerator('ua')

console.log(comUrl('google'))
console.log(ruUrl('astranex'))

// Bind

function getLog() {
	console.log(`Информация о личности: ${this.name}, ${this.age} лет, ${this.job} по профессии.`)
}

const person1 = {name: 'Михаил', age: '17', job: 'Программист'}
const person2 = {name: 'Оксана', age: '19', job: 'Дизайнер'}

function bind(ctxt, fn) {
	return function(...args) { /// ... – оператор spread
		fn.apply(context, args)
	}
}

bind(person1, getLog())
bind(person2, getLog())