//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
const questionsElement = document.getElementById('questions');
const output = document.getElementById('score');


const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];


let userAnswers = JSON.parse(sessionStorage.getItem('answerKeys')) || [null,null, null, null, null];
sessionStorage.setItem('answerKeys', JSON.stringify(userAnswers));

// Display the quiz questions and choices
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
		choiceElement.onchange = () => {
			userAnswers[i] = choice;
			sessionStorage.setItem('answerKeys', JSON.stringify(userAnswers));
		}
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}

renderQuestions();


document.getElementById('submit').addEventListener('click', () => {
	
	let score = 0;
	let userAllAnswers = JSON.parse(sessionStorage.getItem('answerKeys'));
	for(let i=0; i<questions.length; i++) {
		if(questions[i].answer == userAllAnswers[i]) {
			score++;
		}
	}

	output.innerText = `Your score is ${score} out of 5.`;
	sessionStorage.setItem('score', JSON.stringify(score));
})

let totalScore = JSON.parse(sessionStorage.getItem('score'));
output.innerText = `Your score is ${totalScore} out of 5.`;

