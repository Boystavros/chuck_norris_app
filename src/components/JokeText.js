import React from "react";

const JokeText = ({joke}) => {
    return (
        <>
            <h2 className="joke-text">{joke.joke}</h2>
        </>
    )
}

export default JokeText;