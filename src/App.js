import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Home/Home';
import Footer from './Components/Footer/Footer'
import Login from './Pages/Login/Login'
import Blog from './Pages/Blog/Blog'
import Kidzaward from './Pages/Kidzaward/Kidzaward'
import Findactivity from './Pages/Find-activity/Findactivity'
function App() {
  return (
    <>
    <Navbar/>
    
    
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
       <Route path='/Login' element={<Login/>}/> 
       <Route path='/Blog' element={<Blog/>}/>
       <Route path='Kidzaward' element={<Kidzaward/>}/>
       <Route path='Findactivity' element={<Findactivity/>} />
       
         </Routes>

         
         <Footer/>
    
    </>
  );
}

export default App;
