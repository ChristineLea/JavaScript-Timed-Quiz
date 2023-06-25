// TOGGLE DISPLAY ON/OFF CONSTANTS
const sectionOne = document.querySelector(".one");
const sectionTwo = document.querySelector(".two");
const sectionThree = document.querySelector(".two");
const sectionFour = document.querySelector(".two");
const sectionFive = document.querySelector(".two");

// QUIZ QA CONSTANTS
const questionEl = document.querySelector("#question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const output = document.querySelector("#output");
output.setAttribute(
	"style",
	"font-size: 24px; font-style: italic; color: #66023c; font-weight: bolder;"
);

// GLOBAL VARIABLES
let totalScore = 0;
let duplicateArr = [];
let correctAnswer;
let thisQuestion;
let timer = 0;

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
		question: "What allows data input for functions?",
		option1: "Methods",
		option2: "Index",
		option3: "Parameters",
		option4: "Expression",
		answer: "option3",
	},
	{
		question: "What will remove the last element from an array?",
		option1: ".unshift()",
		option2: ".push()",
		option3: ".shift()",
		option4: ".pop()",
		answer: "option4",
	},
	{
		question: "What parameter is used clearInterval()?",
		option1: "The ID generated by the setInterval() function",
		option2: "The boolean value of true",
		option3: "The same parameter as setInterval()",
		option4: "No parameters are needed",
		answer: "option1",
	},
	{
		question: "What parameters are required for an addEventListener?",
		option1: "event, attribute",
		option2: "event, function",
		option3: "event, method",
		option4: "event, target",
		answer: "option2",
	},
	{
		question: "What are the setItem() parameters?",
		option1: "Key",
		option2: "Variable, Value",
		option3: "Key, Value",
		option4: "URL, Value",
		answer: "option3",
	},
	{
		question: "What happens to data in local storage?",
		option1: "It expires after 24 hours",
		option2: "The data will clear after the computer is restarted",
		option3: "The data is cleared from local storage",
		option4: "The data will remain",
		answer: "option4",
	},
	{
		question: "JSON.stringify/JSON.parse are used for?",
		option1: "Storing and retrieving an object's data in local storage",
		option2: "Updating and deleting data in local storage",
		option3: "Converting data into a variable",
		option4: "Saving local storage to a server",
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

// TIMER
const setTimer = () => {
    timer = 60;

    const showTimer = document.createElement("p");
    let interval = setInterval(function () {
        if (time > 0 && duplicateArr.length !== 0) {
            timer--;
            showTimer.textContent = timer;
            countdown.appendChinld(showTimer);
        } else {
            clearInterval(interval);
        }
    }, 1000);
}