import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="load dishwasher"/>
      <Task title="Laundry" deadline="Tomorrow"/>
      <Task title="Tidy" deadline="Today" description="Fold laundry and put away"/>
    </div>
  );
}

export default App;
