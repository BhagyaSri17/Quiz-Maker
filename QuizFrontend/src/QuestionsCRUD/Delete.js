import React, { useState } from 'react';

function DeleteForm() {
	const [ deleteId,setdeleteId]=useState('');
	 const [message,setMessage]=useState(null);
    const handleDelete = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8082/question/delete/${deleteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.text())
            .then(result => {
                setMessage(result);
               
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error occurred while deleting question');
            });
    };
const handleChange=(e)=>{
	setdeleteId(e.target.value);
}
    
    
    return (
        <div className="delete-form-container">
            <h2>{message}</h2>
            <form onSubmit={handleDelete} className="delete-form">
                <label htmlFor="deleteId">Enter Id</label>
                <input type="text" id="deleteId" name="deleteId" value={deleteId} onChange={handleChange} required/>
                <button type="submit">Delete</button>
            </form>
        </div>
   
    );
}

export default DeleteForm;
