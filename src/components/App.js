// import Counter from './Counter';
// import ChangeColor from './ChangeColor';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav'
import GamesList from '../features/Games/GamesList';
import EditGame from '../features/Games/EditGame';
import GameDetails from '../features/Games/GameDetails';
import Weather from '../features/Weather/Weather';


import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return(
        <div className="container">
            {/* <Counter /> */}
            {/* <ChangeColor /> */}
            <Router>
                <Nav />
                <Route exact path="/" component={ () => <h1>Homepage</h1> } />
                <Route exact path="/games" component={ GamesList } />
                <Route exact path="/games/edit/:id" component={ EditGame } />
                <Route exact path="/games/:id" component={ GameDetails } />
                <Route exact path="/weather" component={ Weather } />
            </Router>
        </div>
    )
}

export default App;