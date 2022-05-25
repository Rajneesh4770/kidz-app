import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Home/Home';
import Footer from './Components/Footer/Footer'
import Login from './Pages/Login/Login'
function App() {
  return (
    <>
    <Navbar/>
    
    
      <Routes> 
        <Route path='/' element={<Home/>}/>
       <Route path='/Login' element={<Login/>}/> 
         </Routes>
         
         <Footer/>
    
    </>
  );
}

export default App;
