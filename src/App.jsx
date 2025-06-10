import { useState } from 'react'
import './App.css'
import Joke from './Joke'
import { useEffect} from "react"

function App() {

  

  const [jokes, setJokes] = useState([]);
  const [loading,setLoading] = useState(true);

      useEffect(() => {
        
        async function fetchJokes() {
          
          const response = await fetch(
            "http://127.0.0.1:8000/api/jokes"
          );
          const jokesFromAPI = await response.json();
          setJokes(jokesFromAPI); // stavokļa mainīgais
          setLoading(false);
        } 
        fetchJokes();
      }, []);

    
  

    

  

  return (
    <>
    <h1>Joki</h1>
    {loading ? (
      <p>Lādējas...</p>
    ) : (
      jokes.map((joke) => {
        return <Joke key={joke.id} {...joke} />;
      })
    )}
  </>
  )
}

export default App
