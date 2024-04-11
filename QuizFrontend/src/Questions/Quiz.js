import React, { useState } from 'react';

import Question from './Question';

const QuizApp = () => {
	const [title, setTitle] = useState('');
	const [language, setLanguage] = useState('python');
	const [numQuestions, setNumQuestions] = useState(5);
	const [quizId, setQuizId] = useState(null);
	const [enteredQuizId, setEnteredQuizId] = useState('');
	const [showQuestion, setShowQuestion] = useState(false);


	const handleStartQuiz = () => {
		// Set showQuestion to true when user clicks on Enter button
		setShowQuestion(true);
	};

	const handleCreateQuiz = async () => {
		try {
			const url = `http://localhost:8083/quiz/create?category=${encodeURIComponent(language)}&numQ=${numQuestions}&title=${encodeURIComponent(title)}`;
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();

			setQuizId(data);
		} catch (error) {
			console.error('Error creating quiz:', error);
		}
	};


	const handleQuizSubmission = (show) => {
		// Submit answers logic here
		// After submitting answers, navigate back to quiz page
		setShowQuestion(show);
	};

	return (
<>
		
			<div className="header">
				<h1>Quizzz</h1>
				<p>Perfect solution to make quiz creation easy and playing joyful for your audience.</p>
			</div>


			{!showQuestion && (
				<div className="quiz-containerquiz">
					<div className="semi-circle"></div>
					<div className="semi-circle-top"></div>
					<div className="semi-circle-right"></div>
					<div className="centered create-quiz">
						<h1>Create Quiz</h1>
						<div className="input-group">
							<label>Title:</label>
							<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
						</div>
						<div className="input-group">
							<label>Language:</label>
							<select value={language} onChange={(e) => setLanguage(e.target.value)}>
								<option value="python">Python</option>
								<option value="java">Java</option>
								<option value="cpp">C++</option>
							</select>
						</div>
						<div className="input-group">
							<label>Number of Questions:</label>
							<input type="number" value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)} />
						</div>
						<button onClick={handleCreateQuiz}>Create Quiz</button>
						{quizId && (
							<div>
								<h2>Quiz ID: {quizId}</h2>
							</div>
						)}
					</div>


					<div className="startquiz">
						<h1>Play Quiz</h1>
						<form onSubmit={handleStartQuiz}>
							<div className="input-group">
								<label>Enter Quiz ID:</label>

								<input type="text" value={enteredQuizId} onChange={(e) => setEnteredQuizId(e.target.value)} required />
							</div>
							<button type="submit">Enter</button>
						</form>
					</div>
					</div>
					)}
					{showQuestion && <Question quizId={enteredQuizId} onSubmit={handleQuizSubmission} />}

			
		
			</>
);
}
export default QuizApp;
