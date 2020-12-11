//Marvel quiz - Assignment for level One
const readlineSync = require('readline-sync');
const chalk = require('chalk');

userName = readlineSync.question(
	chalk.hex('#FFA500').bold('Welcome to CLI Quiz game, Enter your name: ')
);
console.log(chalk.red.bold('\nHello'), userName);

var quiz = -1;
quiz = ['Iron Man', 'Captain America', 'Thor', 'Marvel Quiz'];
quizNo = readlineSync.keyInSelect(quiz, 'Which quiz would you like to play ?');

console.log(
	chalk.blue.bold(
		'\nThere are two simple rules to play this game.\n1.Answer the questions asked\n2.Press Enter\n(Make sure you type first letter of each word in Caps)\n'
	)
);

var score = 0;

function play(question, answer) {
	console.log(chalk.yellow.bold(question));
	var userAnswer = readlineSync.question(chalk.bgMagenta('Answer ? '));
	if (userAnswer === answer) {
		console.log(chalk.green('You were right!\n'));
		score = score + 1;
	} else {
		console.log(chalk.hex('#FF0000').bold('Oops!, you were wrong.'));
		console.log('Right answer is ' + chalk.hex('#FFFF00')(answer + '\n'));
	}
}
switch (quizNo) {
	//ironmanQuestions
	case 0:
		questions = [
			{
				question: 'What year did the first Iron Man movie come out?',
				answer: '2008'
			},
			{ question: "What is Iron Man's alter ego?", answer: 'Tony Stark' },
			{
				question: 'Which actor plays the role of Iron Man ?',
				answer: 'Robert Downey Junior'
			},
			{ question: 'What is the chemical symbol for Iron', answer: 'Fe' },
			{
				question: "What is Tony Stark's business empire called?",
				answer: 'Stark Industries'
			},
			{ question: 'What is Virginia Potts nickname ?', answer: 'Pepper' },
			{
				question: "What does Harley Call Tony In 'Iron Man 3'?",
				answer: 'The Mechanic'
			},
			{
				question: "What does Stark Drink In 'Iron Man 2'?",
				answer: 'Chlorophyll'
			},
			{
				question: "Which Brand Of Hamburgers Was Tony Eating In 'Iron Man'?",
				answer: 'Burger King'
			},
			{
				question: 'Who did Iron Man face off against in Civil War?',
				answer: 'Captain America'
			}
		];
		break;
	//capAmericaQuestions
	case 1:
		questions = [
			{
				question: 'What year did the first Captain America movie come out?',
				answer: '2011'
			},
			{
				question: "What symbol is on Captain America's shield?",
				answer: 'Star'
			},
			{
				question: "What's Captain America's real name in movie ?",
				answer: 'Steve Rogers'
			},
			{
				question: 'In Avengers: Civil War, who does Captain America fight?',
				answer: 'Iron Man'
			},
			{
				question: "What is Captain America's shield made out of?",
				answer: 'Vibranium'
			},
			{
				question: "Who is Captain America's best friend?",
				answer: 'Bucky Barnes'
			},
			{
				question: 'What does Steve promise Peggy before he gets frozen?',
				answer: 'A Dance'
			},
			{ question: 'What year was Captain America unfrozen?', answer: '2011' },
			{
				question: 'Where is Captain America living when The Avengers starts?',
				answer: 'Manhattan'
			},
			{
				question:
					'True or False: Steve is the one who directs The Avengers during the Battle of New York',
				answer: 'True'
			}
		];
		break;
	//thorQuestions
	case 2:
		questions = [
			{
				question: 'What year did the first Thor’s movie come out?',
				answer: '2011'
			},
			{ question: 'Which Actor Plays Thor?', answer: 'Chris Hemsworth' },
			{ question: 'Where Is Thor From?', answer: 'Asgard' },
			{ question: "Who Is Thor's Sister?", answer: 'Hela' },
			{
				question: 'What Nickname Does Stark Give To Thor?',
				answer: 'Point Break'
			},
			{ question: 'Who Controls The Bifrost?', answer: 'Heimdall' },
			{ question: "at Is Thor's Axe Called?", answer: 'Stormbreaker' },
			{
				question: 'On Which Planet Do We Find Hulk In Ragnarok?',
				answer: 'Sakaar'
			},
			{
				question: 'How Many Movies Has Jane Foster Appeared In?',
				answer: 'Two'
			},
			{ question: 'What Does Thor call Rocket?', answer: 'Rabbit' }
		];
		break;
	//marvelQuestions
	case 3:
		questions = [
			{ question: 'In which continent is Wakanda located ?', answer: 'Africa' },
			{
				question:
					'What is the name of the marvel comic legend who has made an appearance in all the films of the MCU ?',
				answer: 'Stan Lee'
			},
			{
				question:
					'Thor’s hammer mjölnir is made of metal from the heart of a dying what ? ',
				answer: 'Star'
			},
			{
				question: 'What is the name of the villain in ant-man ? ',
				answer: 'Yellow Jacket'
			},
			{
				question:
					'What is the name of the set of documents that regulate the activities of enhanced persons ? ',
				answer: 'Sokovia Accords'
			},
			{
				question:
					'Which avenger does loki briefly take the form of in thor: the dark world ? ',
				answer: 'Captain America'
			},
			{
				question: 'What is the name of star-lord/peter quill’s mother?',
				answer: 'Meredith'
			},
			{
				question: 'How does yondu and guys refer them to as ? ',
				answer: 'Space Pirates'
			},
			{
				question: 'What did Scott Lang sell in Ant-Man ? ',
				answer: 'Ice Cream'
			},
			{
				question: 'What on Earth one thing is Pepper Pots allergic to ?',
				answer: 'Strawberries'
			}
		];
		break;
	default:
		console.log('Invalid Choice');
		process.exit(); // To terminate the program when user enters cancel
}
//High Scores
var highScores = [
	{ name: 'Ramesh', score: '9', quiz: 'Iron Man' },
	{ name: 'Ramesh', score: '10', quiz: 'Thor' },
	{ name: 'Mukesh', score: '8', quiz: 'Captain America' },
	{ name: 'Suresh', score: '6', quiz: 'Marvel' }
];
for (var i = 0; i < questions.length; i = i + 1) {
	currentQuestion = questions[i];
	play(currentQuestion.question, currentQuestion.answer);
}

console.log('You scored ' + chalk.green.bold(score) + ' out of 10.');
if (score > 5) {
	switch (quizNo) {
		case 0:
			console.log(chalk.hex('#00FDFD')('You are truly an Iron Man fan.'));
			break;
		case 1:
			console.log(chalk.hex('#00FDFD')('You are truly a Captain America fan.'));
			break;
		case 2:
			console.log(chalk.hex('#00FDFD')('You are truly a Thor fan.'));
			break;
		case 3:
			console.log(chalk.hex('#00FDFD')('You are truly a Marvel fan.'));
	}
} else {
	console.log(chalk.hex('#31DE7C')('Try again next time!'));
}
console.log(chalk.green('\nPrevious High Scores : '));
for (var i = 0; i < highScores.length; i++) {
	console.log(
		chalk.green(
			highScores[i].name +
				' - ' +
				highScores[i].score +
				' - ' +
				highScores[i].quiz +
				' Quiz'
		)
	);
}

var like = readlineSync.keyInYN('\nDid you like this game ?');
if (like === true) {
	console.log(
		chalk.hex('#9536b6')(
			'Good to hear that you liked this quiz.\nThanks for playing.'
		)
	);
} else if (like === false) {
	console.log(
		chalk.hex('#964B00')("Sorry, we couldn't meet your expectations")
	);
}
