import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Register from './pages/Register';
import Profile from './pages/Profile/Profile';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import LandPage from './pages/LandPage';



function App() {
  return (
    <div>
      
  <NavBar/>
  
  <Routes>
    <Route path='/' element={<LandPage/>} />
    <Route path='signin' element={<Login/>} />
    <Route path='registerUser' element={<Register/>} />
    <Route path='profile' element={<Profile/>} />
    <Route path='posts' element={<LandPage/>} />
  </Routes>
    </div>
  );
}

export default App;
