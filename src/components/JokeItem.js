import React from "react";

const JokeItem = ({joke, onJokeClick}) => {
    
    const handleClick = () => {
        onJokeClick(joke)
    }

    return (
        <li onClick={handleClick} className="joke-name">Chuck Norris</li>
    )
}

export default JokeItem;