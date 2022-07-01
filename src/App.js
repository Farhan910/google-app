import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './Components/Calendar';
import CompletedTask from './Components/CompletedTask';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import TasksList from './Components/TasksList';
import ToDoLIst from './Components/ToDoLIst';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/toDoList" element={<ToDoLIst/>} />
      <Route path="/completedTask" element={<CompletedTask/>} />
      <Route path="/calendar" element={<Calendar/>} />
      <Route path="/toDoList/:id" element={<TasksList/>} />
     </Routes>
    </div>
  );
}

export default App;
