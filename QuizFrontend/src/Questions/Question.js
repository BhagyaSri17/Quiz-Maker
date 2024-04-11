import { useEffect, useState } from "react";

function Question(props) {
	const [questions, setAllQuestions] = useState([]);
	const [answers, setAnswers] = useState([]);
	const [error, setError] = useState(null);


	useEffect(() => {
		fetch(`http://localhost:8083/quiz/get/${props.quizId}`)
			.then(response => {
				if (!response.ok) {
					setError('Enter Valid Quiz Id');
				}
				return response.json();
			})
			.then(data => {
				// Set the quiz data
				setAllQuestions(data);

			})
			.catch(error => {
				console.error('Error fetchingcatsh quiz data:', error);

				setAllQuestions([]);
			});
	}, [props.quizId]);
	const handleOptionChange = (questionId, selectedOption) => {
		setAnswers(prevAnswers => ({
			...prevAnswers,
			[questionId]: {
				id: questionId,
				option: selectedOption
			}
		}));
	};
	const [score, setScore] = useState(null);

	const submitAnswers = (answers) => {
		const formattedAnswers = Object.values(answers).map(answer => ({
			id: answer.id,
			response: answer.option
		}));

		fetch(`http://localhost:8083/quiz/submit/${props.quizId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formattedAnswers)
		})
			.then(response => response.json())
			.then(message => {
				setScore(message);
			})
			.catch(error => {
				console.error('Error submitting answers:', error);
				// Handle error, display error message to the user, etc.
			});
	};

	const showQuestions = () => {
		props.onSubmit(false);
	}


	return (
		<>
			{error == null && (

				<div className="quiz-container">


					<h1 className="quiz-title">Quiz</h1>

					{Array.isArray(questions) && questions.map((question, index) => (

						<div className="question-container" key={question.id}>
							<h2 className="question-title">Question {index + 1}:</h2>
							<p className="question-text">{question.questionTitle}</p>
							<ul className="options-list">
								<li>
									<input type="radio"
										id={`option1_${question.id}`}
										name={`question${question.id}`}
										value={question.option1}
										onChange={() => handleOptionChange(question.id, question.option1)}
										checked={answers[question.id] === question.option1}
										className="hidden-radio" />
									<label htmlFor={`option1_${question.id}`} className={answers[question.id]?.option === question.option1 ? "option-label checked" : "option-label"}
									>{question.option1}</label>
								</li>
								<li>
									<input type="radio"
										id={`option2_${question.id}`}
										name={`question${question.id}`}
										value={question.option2}
										onChange={() => handleOptionChange(question.id, question.option2)}
										checked={answers[question.id] === question.option2} className="hidden-radio" />
									<label htmlFor={`option2_${question.id}`} className={answers[question.id]?.option === question.option2 ? "option-label checked" : "option-label"}
									>{question.option2}</label>
								</li>
								<li>
									<input type="radio"
										id={`option3_${question.id}`}
										name={`question${question.id}`}
										value={question.option3}
										onChange={() => handleOptionChange(question.id, question.option3)}
										checked={answers[question.id] === question.option3} className="hidden-radio" />
									<label htmlFor={`option3_${question.id}`} className={answers[question.id]?.option === question.option3 ? "option-label checked" : "option-label"}
									>{question.option3}</label>
								</li>
								<li>
									<input type="radio"
										id={`option4_${question.id}`}
										name={`question${question.id}`}
										value={question.option4}
										onChange={() => handleOptionChange(question.id, question.option4)}
										className="hidden-radio" />
									<label htmlFor={`option4_${question.id}`} className={answers[question.id]?.option === question.option4 ? "option-label checked" : "option-label"} >{question.option4}</label>
								</li>
							</ul>
						</div>
					))}
					{score ? <div className="score">Your Score is {score}</div> : null}
					<div className="btn">
						<button className="submitbtn" onClick={() => submitAnswers(answers)}>Submit</button>

						<button className="submitbtn" onClick={showQuestions}>Back</button>
					</div>

				</div>)}

			{error!==null && (<div className="error">{error}
			<button className="submitbtn" onClick={showQuestions}>Back</button>
			</div>)
			}
	</>
	);
}
export default Question;