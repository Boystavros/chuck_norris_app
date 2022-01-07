import React from "react";
import JokeItem from "./JokeItem";

const JokesList = ({jokes, onJokeClick}) => {
    
    const jokesItems = jokes.map((joke) => {
        return <JokeItem key={joke.id} joke={joke} onJokeClick={onJokeClick} />
    })

    return (
        <ul className="joke-list">
            {jokesItems}
        </ul>
    )
}

export default JokesList;