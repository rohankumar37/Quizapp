const startButton = document.querySelector('#start-btn');
const nextButton = document.querySelector('#next-btn');
const questionContainerElement = document.querySelector('#question-container');
const questionElement = document.querySelector('#question');
const answerButtonsElement = document.querySelector('#answer-buttons');

let shuffledQuestions, currentQuestionIndex;
nextButton.classList.add('hide');
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
	currentQuestionIndex++;
	setNextQuestion();
});
function startQuiz() {
	console.log('started');
	startButton.classList.add('hide');
	shuffledQuestions = questions.sort(() => Math.random() - 0.5);
	currentQuestionIndex = 0;
	questionContainerElement.classList.remove('hide');
	setNextQuestion();
}

function setNextQuestion() {
	resetState();
	showQuestions(shuffledQuestions[currentQuestionIndex]);
}

function showQuestions(question) {
	questionElement.innerText = question.question;
	question.answers.forEach((answer) => {
		const button = document.createElement('button');
		button.innerText = answer.text;
		button.classList.add('btn');
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click', selectAnswer);
		answerButtonsElement.appendChild(button);
	});
}

function resetState() {
	nextButton.classList.add('hide');
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild);
	}
}

function selectAnswer(e) {
	const selectedButton = e.target;
	const correct = selectedButton.dataset.correct;
	setStatusClass(document.body, correct);
	Array.from(answerButtonsElement.children).forEach((button) => {
		setStatusClass(button, button.dataset.correct);
	});
	if (shuffledQuestions.length > currentQuestionIndex + 1) {
		nextButton.classList.remove('hide');
	} else {
		startButton.innerText = `Restart Quiz`;
		startButton.classList.remove('hide');
	}
}

function setStatusClass(element, correct) {
	clearStatusClass(element);
	if (correct) {
		element.classList.add('correct');
	} else {
		element.classList.add('wrong');
	}
}

function clearStatusClass(element) {
	element.classList.remove('correct', 'wrong');
}

const questions = [
	{
		question: 'Git is',
		answers: [
			{ text: 'Open Source Project', correct: false },
			{ text: 'Distributed Version Control System', correct: false },
			{ text: 'secured by SHA1', correct: false },
			{ text: 'All of the above', correct: true },
		],
	},
	{
		question: 'Which command should you use to initialize a new git repository?',
		answers: [
			{ text: 'git bash', correct: false },
			{ text: 'git install', correct: false },
			{ text: 'git init', correct: true },
			{ text: 'git start', correct: false },
		],
	},
	{
		question:
			'Which file can you configure to ensure that certain files are never committed to the local Git repository?',
		answers: [
			{ text: 'ignore.git', correct: false },
			{ text: '.gitignore.txt', correct: false },
			{ text: '.gitignore', correct: true },
			{ text: 'git.ignore', correct: false },
		],
	},
	{
		question: 'What will the following command print to the Terminal? git remote -v',
		answers: [
			{ text: 'An inline editor for modifying remote repositories', correct: false },
			{ text: 'The current git version you are running', correct: false },
			{ text: 'A list of remote repositories you are connected to', correct: true },
			{ text: 'The last 5 git versions you have installed', correct: false },
		],
	},
	{
		question: 'Command to check the created, modified, deleted files in gitbash before Commit?',
		answers: [
			{ text: 'git branch', correct: false },
			{ text: 'git show', correct: false },
			{ text: 'git log', correct: false },
			{ text: 'git status', correct: true },
		],
	},
	{
		question: 'Which vendor acquired GitHub for $7.5 billion in June 2018?',
		answers: [
			{ text: 'IBM', correct: false },
			{ text: 'Microsoft', correct: true },
			{ text: 'Oracle', correct: false },
			{ text: 'Google', correct: false },
		],
	},
	{
		question: 'After you add a file, it becomes',
		answers: [
			{ text: 'committed', correct: false },
			{ text: 'staged', correct: true },
			{ text: 'untracked', correct: false },
			{ text: 'modified', correct: false },
		],
	},
	{
		question: 'Which programming language was used to create Git?',
		answers: [
			{ text: 'Java', correct: false },
			{ text: 'C++', correct: false },
			{ text: 'C', correct: true },
			{ text: 'Python', correct: false },
		],
	},
	{
		question: 'Which of the following is not a Git configuration scope?',
		answers: [
			{ text: 'Global', correct: false },
			{ text: 'Local', correct: false },
			{ text: 'User', correct: true },
			{ text: 'System', correct: false },
		],
	},
	{
		question: 'To make a new git branch, the git command is?',
		answers: [
			{ text: 'git -b', correct: false },
			{ text: 'git branch', correct: true },
			{ text: 'git checkout branch', correct: false },
			{ text: 'git new branch', correct: false },
		],
	},
	{
		question: 'Git commit -m < ? >, ? is for',
		answers: [
			{ text: 'file name to be committed', correct: false },
			{ text: 'comment', correct: true },
			{ text: 'repo url', correct: false },
			{ text: 'none', correct: false },
		],
	},
	{
		question: '.......... is equivalent to fetch and merge',
		answers: [
			{ text: 'Push', correct: false },
			{ text: 'Fetch', correct: false },
			{ text: 'Pull', correct: true },
			{ text: 'Syncronize', correct: false },
		],
	},
	{
		question: 'What is a shortcut to staging all the changes you have?',
		answers: [
			{ text: 'git add .', correct: true },
			{ text: 'git commit add .', correct: false },
			{ text: 'git commit .', correct: false },
			{ text: 'git stage -a', correct: false },
		],
	},
	{
		question: 'How do you supply a commit message to a commit?',
		answers: [
			{ text: 'git message "My first commit"', correct: false },
			{ text: 'git add "My first commit', correct: false },
			{ text: 'git commit "My first commit', correct: false },
			{ text: 'git commit -m "My first commit', correct: true },
		],
	},
	{
		question: 'Which of the following commands is used in switching between branches?',
		answers: [
			{ text: 'git branch', correct: false },
			{ text: 'git checkout', correct: true },
			{ text: 'git switch', correct: false },
			{ text: 'git merge', correct: false },
		],
	},
	{
		question: 'Where are files stored before they are committed to the local repository ?',
		answers: [
			{ text: 'staging area', correct: true },
			{ text: 'saved files', correct: false },
			{ text: 'github', correct: false },
			{ text: 'git documents', correct: false },
		],
	},
	{
		question: 'A command to see a repository history is?',
		answers: [
			{ text: 'git commit', correct: false },
			{ text: 'git clone', correct: false },
			{ text: 'git log', correct: true },
			{ text: 'git branch', correct: false },
		],
	},
	{
		question: 'Which command is used to merge two branches ?',
		answers: [
			{ text: 'git rebase', correct: false },
			{ text: 'git merge', correct: false },
			{ text: 'git pull', correct: false },
			{ text: 'All of the above', correct: true },
		],
	},
	{
		question: 'Who is attributed with inventing Git?',
		answers: [
			{ text: 'Junio C. Hamano', correct: false },
			{ text: 'James Gosling', correct: false },
			{ text: 'Linus Torvalds', correct: true },
			{ text: 'Kohsuke Kawaguchi', correct: false },
		],
	},
	{
		//20
		question: 'What is a commit?',
		answers: [
			{ text: 'A snapshot of just the changes from one time to the other', correct: true },
			{ text: 'A collection of branches', correct: false },
			{ text: 'A snapshot of all the files in the repository', correct: false },
			{ text: 'Another name for a repository', correct: false },
		],
	},
];
