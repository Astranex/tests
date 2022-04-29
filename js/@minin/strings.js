// Строки

const name = 'Виталя'
const age = '19'

function getAge(currentYear, birthYear) {
	const myAge = currentYear - birthYear
	return myAge
}

// const output = 'Привет, меня зовут ' + name + ' и мне ' + age + ' лет' // СТАРЫЙ ФОРМАТ
const output = `Привет, меня зовут ${name} и мне ${getAge(2021, 2002)} лет` // Новый облегчённый формат, в котором можно использовать динамические выражения

// В данном формате можно поставить даже тернарное выражение. Пример age <= 0 ? 'Я ещё не родился' : 'Обычная работа функции'

// const html = `<h1>Заголовок H1</h1><br><p>Параграф</p>`

console.log(output)

const word = "Слово"
console.log(word.length) // Длина строки
console.log(word.toUpperCase()) // Преобразование в верхний регистр
console.log(word.toLowerCase()) // Преобразование в нижний регистр
console.log(word.charAt(2)) // Возвращение символа на позиции n
console.log(word.indexOf('ов')) // Поиск и возвращение позиции с которой начинается определенная фраза
console.log(word.startsWith('Сл')) // Проверка, начинается ли слово с определенной фразы
console.log(word.toLowerCase().startsWith('слов')) // Приводим "Слово" к нижнему регистру, а затем проверяем
console.log(word.endsWith('ва')) // Проверка, заканчивается ли слово с определенной фразы
console.log(word.repeat(3)) // Метод повторения

const string = '     Строка      '
console.log(string.trim()) // Удаляет пробельные символы с начала и конца строки
console.log(string.trimLeft())
console.log(string.trimRight())

function logAboutPerson(a, name, age) {
	if (age <= 0) {
		age = 'невозможный'
	}
	// console.log(a, name, age)
	return `${a[0]}${name}${a[1]}${age}${a[2]}` // <--! Формат записи, который включает в себя 3 незаданных параметра в виде псевдоцикла a[] и 3 параметра
}

const personName = 'Виталий'
const personAge = '19'

const personName2 = 'Владимир'
const personAge2 = '-1'

const logOutput = logAboutPerson`Имя: ${personName}, Возраст: ${personAge}!` // <--! Строки вне js кода переносятся в псевдоцикл
const logOutput2 = logAboutPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(logOutput)
console.log(logOutput2)