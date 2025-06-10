import { useState } from 'react'
import './Joke.css'


function Joke(jokes){

    return(
        <div>
            <div className="joke-type">{jokes.type}</div>
            <div className="joke-setup">{jokes.setup}</div>
            <div className="joke-punchline">{jokes.punchline}</div>
        </div>
    )

}

export default Joke