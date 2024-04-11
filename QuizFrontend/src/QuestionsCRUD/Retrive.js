import React, { useState} from 'react';

function QuestionList({ questions }) {
    return (
        <div>
            {questions.map(question => (
                <div key={question.id} className="question">
              
                    <h3>  {question.id}.{question.questionTitle}</h3>
                    <ul>
                        <li>{question.option1}</li>
                        <li>{question.option2}</li>
                        <li>{question.option3}</li>
                        <li>{question.option4}</li>
                     
                    </ul>
                       Right Answer:{question.rightAnswer}
                </div>
            ))}
        </div>
    );
}

function Retrive() {
    const [questions, setQuestions] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
  const fetchQuestions = () => {
        if (selectedCategory === '') {
            fetch('http://localhost:8082/question/allquestions')
                .then(response => response.json())
                .then(data =>setQuestions(data))
                .catch(error => console.error('Error fetching questions:', error));
        } else {
            fetch(`http://localhost:8082/question/category/${selectedCategory}`)
                .then(response => response.json())
                .then(data => setQuestions(data))
                .catch(error => console.error(`Error fetching questions for category ${selectedCategory}:`, error));
        }
    };
    const handleAllQuestionsClick = () => {
   
        fetchQuestions();
    };
    return (
        <div className="content-container">
            <h1>Question List</h1>
            <div className="controls">
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">All</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="c++">C++</option>
                </select>
                <button onClick={handleAllQuestionsClick}>Get Questions</button>
            </div>
            <QuestionList questions={questions} />
        </div>
    );
}

export default Retrive;
