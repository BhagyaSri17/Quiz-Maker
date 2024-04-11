import DeleteForm from "./Delete";
import QuestionForm from "./add";
import Retrive from "./Retrive";
import { useState } from "react";

function Menu(props) {
	const [showQuestionForm, setShowQuestionForm] = useState(false);
   	const [showListForm, setShowListForm] = useState(false);

	const handleAddQuestionClick = () => {
		setShowQuestionForm(true);
	};
	const handleListQuestionClick = () => {
		setShowListForm(true);
	};
	return (
		<><div className="header">
                    <h1>Quizzz</h1>
                    <p>Perfect solution to make quiz creation easy and playing joyful for your audience.</p>
                        <button className="backMenu" onClick={()=>props.setAdmin(false)}>Back</button>
                </div> 
              
		<div className="container"> 
		   <div className="semi-circle"></div>
                                <div className="semi-circle-top"></div>
                                <div className="semi-circle-right"></div>
			{!showQuestionForm && !showListForm &&(
				
				<div className="Menu">
					<div className="menuBlock"><button  onClick={handleAddQuestionClick}>Add Question</button></div>
					<div className="menuBlock"><DeleteForm /></div>
					<div className="menuBlock"><button  onClick={handleListQuestionClick}>Get Data</button></div>
				</div>
			)}
			{showQuestionForm && <QuestionForm />}
			{showListForm && <Retrive/>}
        </div>  
	</>
	);
}
export default Menu;