import { useState } from "react"

const Search = ({handleSearch}) => {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div>
            {/* de esta manera obtenemos el valor que se le ingrese a el input */}
            <input onChange={(e) => setSearchTerm(e.target.value)} />
            {/* con esta sintaxis llamaremos con el boton lo que contenga el input */}
            <button onClick={() => handleSearch(searchTerm)}>Search</button>
        </div>
    )
}

export default Search