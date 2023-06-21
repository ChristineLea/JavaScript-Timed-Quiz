// TOGGLE DISPLAY ON/OFF
const app = document.getElementById("app");
const quiz = document.getElementById("quiz");
const resultWin = document.getElementById("resultWin");
const resultLose = document.getElementById("resultLose");
const score = document.getElementById("score");

// VARIABLES FOR QUIZ QA
const questionEl = document.getElementById("question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const output = document.getElementById("output");

// VARIABLES
let totalScore = 0;
let questionsLeft = 9;
let duplicateArr = [];
let correctAnswer;
let thisQuestion;
let timer = 100;

// QUESTION ARRAY
let questionArray = [
	{
		question: "What functionality does JavaScript provide?",
		option1: "Structure",
		option2: "Layout",
		option3: "Wifi",
		option4: "Interactivity",
		answer: "option4",
	},
	{
		question: "What allows code blocks to be reusable?",
		option1: "Functions",
		option2: "Objects",
		option3: "Arrays",
		option4: "For loops",
		answer: "option1",
	},
	{
		question:
			"When arguments are passed into a function call, they are known as?",
		option1: "Methods",
		option2: "Index",
		option3: "Parameters",
		option4: "Expression",
		answer: "option3",
	},
	{
		question: "What method will remove the last element from an array?",
		option1: ".unshift()",
		option2: ".push()",
		option3: ".shift()",
		option4: ".pop()",
		answer: "option4",
	},
	{
		question: "What parameter is required when using clearInterval()?",
		option1: "The ID generated by the setInterval() function",
		option2: "The boolean value of true",
		option3: "The same parameter as setInterval()",
		option4: "No parameters are needed",
		answer: "option1",
	},
	{
		question:
			"What parameters are required for an addEventListener method?",
		option1: "event, attribute",
		option2: "event, function",
		option3: "event, method",
		option4: "event, target",
		answer: "option2",
	},
	{
		question:
			"What parameter/s are required for local storage setItem() method?",
		option1: "Key",
		option2: "Variable, Value",
		option3: "Key, Value",
		option4: "URL, Value",
		answer: "option3",
	},
	{
		question:
			"What happens to data stored in local storage when the browser is closed?",
		option1: "It expires after 24 hours",
		option2: "Nothing. The data will clear after the computer is restarted",
		option3: "The data is cleared from local storage",
		option4: "Nothing. The data will remain",
		answer: "option4",
	},
	{
		question: "Match the JSON & Local Storage methods correctly?",
		option1: "JSON.stringify / setItem() & JSON.parse / getItem()",
		option2: "JSON.stringify  / setItem() & JSON.stringify / getItem()",
		option3: "JSON.parse / setItem() & JSON.parse / getItem()",
		option4: "JSON.parse / setItem() & JSON.stringify / getItem()",
		answer: "option1",
	},
	{
		question: "What is the method .trim() used for?",
		option1: "Trim arguments from a function call",
		option2: "Trim whitespace in HTML",
		option3: "Trim whitespace from a string",
		option4: "Trim unused elements in an array",
		answer: "option3",
	},
];

// START GAME (EVENT)
document.getElementById("startBtn").addEventListener("click", () => {
	// HIDE APP Page / SHOW QUIZ Page
	myFunction(app);
	myFunction(quiz);

	output.hidden = true;

	setTimer();

	// RESET
	questionsLeft = 9;
	totalScore = 0;

	// COPY question array
	duplicateArr = [...questionArray];

	showQuestion();
});

const showQuestion = () => {
	let randomIndex = Math.floor(Math.random() * duplicateArr.length);
	thisQuestion = duplicateArr[randomIndex];

	questionEl.textContent = thisQuestion.question;
	option1.textContent = thisQuestion.option1;
	option2.textContent = thisQuestion.option2;
	option3.textContent = thisQuestion.option3;
	option4.textContent = thisQuestion.option4;

	correctAnswer = thisQuestion.answer;

	// Remove used question from array
	duplicateArr.splice([randomIndex], 1);

	// myFunction(quiz); // HIDE QUIZ
	// DIRECT TO END GAME

	questionsLeft--;
};

// EVENT FUNCTION
const checkAnswer = (e) => {
	const selectOption = e.target;
	const selectAnswer = selectOption.dataset["number"];
	acceptAnswer = false;

	if (selectAnswer === correctAnswer) {
		output.hidden = false;
		output.textContent = "That's Correct";
		totalScore++;
	} else {
		output.hidden = false;
		output.textContent = "That's Incorrect";
		timer--;
	}

	delay();
};

//  DELAY ON ANSWER RESPONSE
const delay = () => {
	let second = 1;

	let addDelay = setInterval(function () {
		if (second > 0) {
			second--;
		} else {
            clearInterval(addDelay);
            output.hidden = true;
			showQuestion();
		}
	}, 500);
};

// QUIZ ANSWER EVENTS
option1.addEventListener("click", checkAnswer);
option2.addEventListener("click", checkAnswer);
option3.addEventListener("click", checkAnswer);
option4.addEventListener("click", checkAnswer);

// QUIZ TIMER
const setTimer = () => {
	let sec = timer;

	setInterval(function () {
		if (sec > 0) {
			sec--;
			// console.log(sec); //TEST
		} else {
		}
	}, 1000);
};

// TOGGLE DISPLAY ON/OFF FUNCTION
function myFunction(x) {
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

// myFunction(app); // SHOW THIS PAGE
myFunction(quiz);
myFunction(resultWin);
myFunction(resultLose);
myFunction(score);
