import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from "./views/About/About"
import Detail from "./views/Detail"
import Login from './views/Login';

function App() {

   const {pathname} = useLocation();

   const navigate = useNavigate();

   const [characters, setCharacters] = useState([])

   const [access, setAccess] = useState(false)
   
   const EMAIL = "hiperjesus17@gmail.com"
   const PASSWORD = "proyecto17"

   function login(userData) {
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true)
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id) {

      let idParsed = parseInt(id);

      setCharacters(
         characters.filter((ch)=>{
            return ch.id !== idParsed;
         })
      )
   }

   return (
      <div className='App'>

         {pathname !== '/' && <Nav onSearch={onSearch}/>}

         <Routes>
            <Route path={'/'} element={<Login login={login}></Login>}/>
            <Route path={'/home'} element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path={'/about'} element={<About></About>}/>
            <Route path={'/detail/:id'} element={<Detail></Detail>}/>   
         </Routes>
      </div>
   );
}

export default App;