import axios from 'axios'
import {useEffect, useState} from 'react'

const Pokedex = ({name, url}) => {
    const [pokemon, setPokemon] = useState(null)
    const [shiny, setShiny] = useState(null)

    useEffect(() => {
        const promise = axios(url)
        promise.then((res) => {
            console.log(res.data)
            setPokemon(res.data.sprites.front_default)
            setShiny(res.data.sprites.front_shiny)
        })
    })

    return(
        <div>
            <h1>{name}</h1>
            <img src={pokemon} alt={name} />
            <img src={shiny} alt={name} />
        </div>
    )
}

export default Pokedex