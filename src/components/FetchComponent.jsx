import React, {useState} from 'react'
import axios from "axios"

const FetchComponent = () => {

const [pokemon, setPokemon]=useState()


    const fetchPokemonAxios = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=898")
        .then(response => {
            console.log(response.data)
            setPokemon(response.data)
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
        <button onClick={fetchPokemonAxios}>Fetech Pokemon</button>
        
        {
            pokemon?
        <div>
            {
                pokemon.results.map((pokemonName, i)=>{
                    return(
                        <p>{pokemonName.name}</p>
                    )
                })
            }
        </div>:
        <h1>Click button to get pokemon</h1>
        }

    </div>
  )
}

export default FetchComponent