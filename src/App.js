import logo from './logo.svg';
import './App.css';
import Btn from './component/Btn'
import Profile from './component/Profile';

function App() {
 
  return (
    <div className='container'>
       <h1>Basic Game</h1>
      <div className='row'>
      <Profile name="Vocab" location="kausa"/>
      
      </div>
     
    
      {/* <Btn name="Sign up"/> */}
    </div>
    );
}

export default App;
