import './App.css';
import Addtodo from './components/Addtodo';
import Listodo from './components/Listodo';
function App() {
  return (
    <div className="App">
      <h2>Todo List</h2>
      <Addtodo/>
      <Listodo/>
    </div>
  );
}

export default App;
