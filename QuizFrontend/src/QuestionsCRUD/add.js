import React, { useState } from 'react';

function QuestionForm() {
    const [formData, setFormData] = useState({
        category: '',
        questionTitle: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        rightAnswer: '',
        difficultyLevel: 'Easy',
       
    });
   const [message,setMessage]=useState(null);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8082/question/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.text())
            .then(result => {
                setMessage(result);// Show response from the server
                // Optionally, clear the form fields after successful submission
                setFormData({
                    category: '',
                    questionTitle: '',
                    option1: '',
                    option2: '',
                    option3: '',
                    option4: '',
                    rightAnswer: '',
                    difficultyLevel: 'Easy',
                    deleteId: ''
                });
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error occurred while adding question');
            });
    };

return (
    <div className="question-form-container">
     
        <h1 className='title'>Add Question</h1>
        <h3 className='title'>{message}</h3>
        <form onSubmit={handleSubmit} className="question-form">
            {/* Category Field */}
            <div className="form-group">
                <label htmlFor="category">Category:</label>
                <input 
                    type="text" 
                    id="category" 
                    name="category" 
                    value={formData.category} 
                    onChange={handleChange} 
                    required 
                   
                />
            </div>
            {/* Question Title Field */}
            <div className="form-group">
                <label htmlFor="questionTitle">Question Title:</label>
                <input 
                    type="text" 
                    id="questionTitle" 
                    name="questionTitle" 
                    value={formData.questionTitle} 
                    onChange={handleChange} 
                    required 
                 
                />
            </div>
            {/* Option 1 Field */}
            <div className="form-group">
                <label htmlFor="option1">Option 1:</label>
                <input 
                    type="text" 
                    id="option1" 
                    name="option1" 
                    value={formData.option1} 
                    onChange={handleChange} 
                    required 
                   
                />
            </div>
            {/* Option 2 Field */}
            <div className="form-group">
                <label htmlFor="option2">Option 2:</label>
                <input 
                    type="text" 
                    id="option2" 
                    name="option2" 
                    value={formData.option2} 
                    onChange={handleChange} 
                    required 
                   
                />
            </div>
            {/* Option 3 Field */}
            <div className="form-group">
                <label htmlFor="option3">Option 3:</label>
                <input 
                    type="text" 
                    id="option3" 
                    name="option3" 
                    value={formData.option3} 
                    onChange={handleChange} 
                    required 
                   
                />
            </div>
            {/* Option 4 Field */}
            <div className="form-group">
                <label htmlFor="option4">Option 4:</label>
                <input 
                    type="text" 
                    id="option4" 
                    name="option4" 
                    value={formData.option4} 
                    onChange={handleChange} 
                    required 
                    
                />
            </div>
            {/* Right Answer Field */}
            <div className="form-group">
                <label htmlFor="rightAnswer">Right Answer:</label>
                <input 
                    type="text" 
                    id="rightAnswer" 
                    name="rightAnswer" 
                    value={formData.rightAnswer} 
                    onChange={handleChange} 
                    required 
                  
                />
            </div>
            {/* Difficulty Level Field */}
            <div className="form-group">
                <label htmlFor="difficultyLevel">Difficulty Level:</label>
                <select 
                    id="difficultyLevel" 
                    name="difficultyLevel" 
                    value={formData.difficultyLevel} 
                    onChange={handleChange} 
                    required
                >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            {/* Submit Button */}
            <div className="form-group">
                <button type="submit">Submit</button>
                
            </div>
        </form>
     
    </div>
);

}

export default QuestionForm;
