
import './App.css';
import AddTodos from './components/AddTodos';
import TodosList from './components/TodosList';

  
function App() {
  return (
    <div className="App">
    <AddTodos />
    <TodosList />
    </div>
  );
}

export default App;
