import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as usersolid} from '@fortawesome/free-regular-svg-icons';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import CreateTask from './Pages/CreateTask';
import TaskList from './Pages/TaskList';
import Profile from './Pages/Profile';
import PageNotFound from './Pages/PageNotFound';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import {AuthProvider} from './Context/AuthContext';
import {TaskProvider} from './Context/TaskContext';


function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <TaskProvider>
    <Navigation />
    <Routes>
      <Route path='/' element={<Navigate to='/login'/>}></Route>
      <Route path='/' element={<Home/>}>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
   </Route>
     
      <Route path='/about' element={<About/>}></Route>
      <Route path='/create-task' element={<CreateTask/>}></Route>
      <Route path='/task-list' element={<TaskList/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/*' element={<PageNotFound/>}></Route>
    </Routes>
    </TaskProvider>
    </AuthProvider>

    </BrowserRouter>
  );
}

export default App;
