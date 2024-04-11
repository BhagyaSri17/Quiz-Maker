import { useState } from 'react'; 
import Quiz from './Questions/Quiz';
import Menu from './QuestionsCRUD/Menu';
import './Questions/Question.css'; 
import './QuestionsCRUD/Menu.css'
function App() {
const [admin, setAdmin] = useState(false); 

return (
  <div className="App">
    {!admin ? (
		<>
	
      <div className='Admin'>
     
        <button onClick={() => setAdmin(true)}>Admin</button>
      </div>
      	 <Quiz/>
      </>
    ) : (
      <Menu setAdmin={setAdmin}/>
    )}
  </div>
);
}

export default App;
