// Учебные проекты, которые успел сделать за курс

// --------------- Рифма --------------- //

// const currentWord = prompt().toLowerCase();
const currentWord = 'слово'.toLowerCase();
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



// ---------------- Часы --------------- //

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

// ------------------------------------- //