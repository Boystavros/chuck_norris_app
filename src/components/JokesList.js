import React from "react";
import JokeItem from "./JokeItem";

const JokesList = ({jokes, onJokeClick}) => {
    
    const jokesItems = jokes.map((joke) => {
        return <JokeItem key={joke.id} joke={joke} onJokeClick={onJokeClick} />
    })

    return (
        <aside className="joke-list"> 
            <h3>Pick a Chuck for a fact:</h3>   
            <ul>
                {jokesItems}
            </ul>
            <p>Chuck Norris made you scroll this far.</p>
        </aside>
    )
}

export default JokesList;