// 1. Объекты

// const peopleArray = [
// {name: 'Виталий', lastName: 'Галюзин', profession: 'Программист'},
// {name: 'Виталий', lastName: 'Галюзин', profession: 'Программист'},
// {name: 'Виталий', lastName: 'Галюзин', profession: 'Программист'}
// ]

const person = { // В объекте мы перечисляем пару: ключ и его значение
	name: 'Виталий', 
	lastName: 'Галюзин',
	age: 19, 
	isProgrammer: true,
	languages: ['Русский', 'Украинский', 'Английский'],
	'complex key': 'complex value',
	['key_' + (1+3)]: 'Computed Key',
	greet: function(name) {return `Привет, ${name}, меня зовут ${person.name}`}, // Сложный вариант написания
	farewell(name) {return `До скорой встречи, ${name}`}, // Новый синтаксис
	gratitude(name) {return `Спасибо тебе, ${name}`},
	info() {return `Информация про человека с именем ${this.name}`} // Слово this в данном случае обозначает объект, в котором расположена функция // this = person
}

console.log(person)
console.log(person.name)
console.log(person['age'])
console.log(person['complex key'])
console.log(person.key_4) // ['key_' + (1+3)] 
console.log(person.greet('Дмитрий'))
console.log(person.farewell('Оксана'))
console.log(person.gratitude('Михаил'))

person.age++
person.languages.push('Французский')
// person['key_4'] = undefined // Удаляет значение, однако оставляет пустой ненужный ключ
delete person['key_4'] // Правильный метод удаления
console.log(person)

// const name = person.name // Старый синтаксис, ненужное дублирование
// const age = person.age
// const languages = person.languages

// person.age = undefined
const {name, age: personAge = 19, languages} = person // Деструктуризация объекта, вынесение ключей в отдельные переменные

// age: personAge – значение ключа age помещается в personAge, где 10 – значение по умолчанию (если значение ключа недоступно)

console.log(name, personAge, languages)

for (let key in person) { // IN ВМЕСТО OF. ЕСЛИ МАССИВ – OF. ЕСЛИ ОБЪЕКТ – IN. Прототип for in опасен, потому что может заходить внутрь прототипа объекта
	if (person.hasOwnProperty(key)) {
		// console.log('Ключ:', key)
		// console.log('Значение:', person[key])
	}
}

const keys = Object.keys(person) // Делает массив элементов из всех ключей объекта
keys.forEach(key => { // Метод forEach является циклом, где параметр является итерируемым, можно использовать для прохода по массиву
	console.log('Ключ:', key)
	console.log('Значение:', person[key])
})

// 2. Context. Контекст

console.log(person.info())

const logger = {
	keys(obj) {
		console.log('Object Keys: ', Object.keys(obj))
	}
}

const loggerThis = {
	keys() {
		console.log('Object Keys: ', Object.keys(this)) // This в данном случае тоже самое, что и loggerThis // 1)
		Object.keys(this)
	},
	keysAndValues() {
		// const self = this // Bсправление бага с function
		Object.keys(this).forEach(key => { // Если сделать через function, скрипт будет работать неправильно, потому что функция задаёт свой контекст (this) //
		console.log(`Ключ: ${key}. Значение: ${this[key]} `) 
	})
	}
}



// logger.keys(person)

const bound = loggerThis.keys.bind(person) // Благодаря контексту, мы можем передать для функции keys объект, о котором он ничего не знает // 2)

// Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. 
bound()

loggerThis.keys.call(person) // Метод call автоматически bind-ит функцию и сразу же её вызывает // 3)

////

loggerThis.keysAndValues.call(loggerThis) // Функция адаптивная и возвращает ключи и значения любого задаваемого объекта
loggerThis.keysAndValues.call(person) 
loggerThis.keysAndValues.call(person) // Можно также передавать параметры 
// loggerThis.keysAndValues.call(person, [true, true, true])

