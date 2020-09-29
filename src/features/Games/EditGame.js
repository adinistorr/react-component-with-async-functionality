import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function EditGame() {
    const [game, setGame] = useState(null);
    const [alert, setAlert] = useState(null);
    const [isValid, setIsValid] = useState({
        title: true,
        genre: true,
        description: true,
    });

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://games-app-siit.herokuapp.com/games/${id}`)
            .then(res => res.json())
            .then(data => setGame(data));
    }, [id]);

    if (!game) {
        return <h1>Loading...</h1>
    }

    function handleInputChange(e) {
        // const newGame = {...game};
        // newGame[e.target.name] = e.target.value;
        // setGame(newGame);
        setGame({ ...game, [e.target.name]: e.target.value });

        if (!e.target.value) {
            setAlert({
                type: 'danger',
                message: 'All fields are mandatory!'
            })

            setIsValid({...isValid, [e.target.name]: false});
        } else {
            setAlert(null);
            setIsValid({...isValid, [e.target.name]: true});
        }
    }

    function isFormValid() {
        for(const field in isValid) {
            if(!isValid[field]) {
                return false;   
            }
        }
        return true;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const { _id, ...newGame } = game;

        if (isFormValid()) {
            fetch(`https://games-app-siit.herokuapp.com/games/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(newGame)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.message) {
                        setAlert({
                            type: 'danger',
                            message: data.message
                        })
                    } else {
                        setAlert({
                            type: 'success',
                            message: 'The game was updated successfully!'
                        })
                    }
                });
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            {alert && alert.message ? (
                <div className={`alert alert-${alert.type}`} role="alert">
                    {alert.message}
                </div>
            ) : null
            }

            <h1>Editing {game.title}</h1>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={game.title} onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <input type="text" className="form-control" id="genre" name="genre" placeholder="Genre" value={game.genre} onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea type="text" className="form-control" id="description" name="description" placeholder="Description" value={game.description} onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn btn-primary">Edit</button>
        </form>
    )
}
