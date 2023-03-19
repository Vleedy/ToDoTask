import AddToDo from './components/AddToDo';
import ToDos from './components/ToDos';
import './styles/app.scss';

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <h2>Мои задачи</h2>
        <ToDos />
      </div>
      <div className="wrapper">
        <h2>Добавить задачу</h2>
        <AddToDo />
      </div>
    </div>
  );
}

export default App;
