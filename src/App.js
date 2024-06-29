import './App.css';
import Ingreso from './inputintro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id='h1todo'>To Do List</h1>
        <div className='containerinput'>
        <Ingreso/>
        </div>
      </header>
    </div>
  );
}

export default App;
