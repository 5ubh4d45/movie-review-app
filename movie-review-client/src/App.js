import logo from './logo.svg';
import './App.css';
import api from './api/asiosConfig'
import { useEffect, useState } from "react";
import Layout from './components/Layout';
// import { Layout } from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';

function App() {
  
  const [movies, setMovies] = useState();

  const getMovies = async () =>{

    try {
      
      const response = await api.get("/movies");

      console.log(response.data)

      setMovies(response.data);

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getMovies();
  },[]);
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;