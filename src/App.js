import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import Pokedex from './components/Pokedex.js'
import Search from './components/Search.js'

function App() {
  const [pokes, setPokes] = useState([]); //esta variable tendra como estado inicial un array el cual rellenaremos con los elementos de la API
  const [query, setQuery] = useState(""); //esta variable cabia el valor del selector segun el tipo, ese valor vendra del iput en el elemento "search"

  //llamada a la API 
  useEffect(() => {
    if(query) { //si "query" tiene algun valor entonces se realizara el slice
      const promise = axios(`https://pokeapi.co/api/v2/type/${query}`)
      promise.then((res) => {
      setPokes(res.data.pokemon.slice(0, 15)); //cortamos el array de la API para que solo nos devuelva 10 elementos
      })
    }
  },[query]);

  //con este effect controlaremos el cambio de los valores en pokes
  useEffect(() => {
    console.log(pokes)
  }, [pokes]);

  //esta sera la funcion que nos permitira cambiar el valor desde el input
  const handleSearchPokemons = (value) => {
    setQuery(value)
  };

  //con esta sentencia podemos imprimir todos los valores del array
  const pokemonArr = pokes.map((value) => (  
    <Pokedex 
      name={value.pokemon.name} 
      url={value.pokemon.url} 
      key={value.pokemon.name} 
    />
  ));

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Search handleSearch={handleSearchPokemons}/>
      {/* si la siguiente condicion se cumple, es decir, el areglo es mayor a 0, mortrara los siguientes valores
      el componente pokedex se renderizara hasta que el arreglo tenga valores*/}
      {pokes.length > 0 && pokemonArr}
      {/* {pokes.length > 0 && 
      <>
        <Pokedex name={pokes[0].pokemon.name} url={pokes[0].pokemon.url} />
        <Pokedex name={pokes[1].pokemon.name} url={pokes[1].pokemon.url} />
        <Pokedex name={pokes[2].pokemon.name} url={pokes[2].pokemon.url} />
      </>
      } */}
    </div>
  );
}

export default App;
