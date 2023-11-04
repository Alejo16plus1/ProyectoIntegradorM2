import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from "./views/About/About"
import Detail from "./views/Detail"
import Login from './views/Login';
import Favorites from './components/Favorites/Favorites';

function App() {

   const {pathname} = useLocation();

   const navigate = useNavigate();

   const [characters, setCharacters] = useState([])

   const [access, setAccess] = useState(false)
   
   const EMAIL = "hiperjesus17@gmail.com"
   const PASSWORD = "proyecto17"

   // function login(userData) {
   //    if(userData.password === PASSWORD && userData.email === EMAIL){
   //       setAccess(true)
   //       navigate('/home')
   //    }
   // }
// ! Promesas
   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

// ! Async / Await

   async function login(userData) {

      const URL = 'http://localhost:3001/rickandmorty/login/';

      try{

         const { email, password } = userData;

         const {data} = await axios(URL + `?email=${email}&password=${password}`)

         setAccess(data.access);
         // access && navigate('/home');

      }catch(error){
         window.alert('Datos incorrectos');
      }

   }

   useEffect(() => {
      access? navigate('/home') : navigate('/');
   }, [access]);

   //! Promesas
   // function onSearch(id) {
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }

   //! Asyn / Await

   async function onSearch(id){

      try{

         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

         if(data.name){
            setCharacters((oldChars) => [...oldChars, data]);
         }

      }catch(error){
         window.alert('¡No hay personajes con este ID!');
      }

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
            <Route path={'/favorites'} element={<Favorites></Favorites>}/>    
         </Routes>
      </div>
   );
}

export default App;