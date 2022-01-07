import React, {useState, useEffect} from "react";
import JokesList from "../components/JokesList";
import JokeText from "../components/JokeText";

const ChuckContainer = () => {
    const [jokes, setJokes] = useState([]);
    const [selectedJoke, setSelectedJoke] = useState(null);

    useEffect(() => {
        getJokes();
    }, [])

    const getJokes = () => {
        fetch('https://api.icndb.com/jokes')
        .then(response => response.json())
        .then(collection => setJokes(collection.value))
    }

    const onJokeClick = (joke) => {
        setSelectedJoke(joke);
    }

    return (
        <div className="container">
            <JokesList jokes={jokes} onJokeClick={onJokeClick}/>
            <section className="main">
                <img src={require('../chuck_image.jpeg')} />
                { selectedJoke && <JokeText joke={selectedJoke}/>}
            </section>
        </div>
    )
}

export default ChuckContainer;