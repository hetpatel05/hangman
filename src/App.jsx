

import './index2.css'
import PlayGame from  "./pages/playgame/PlayGames"

import StartGame from "./pages/startgame/StartGame";

import { Route,  Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
function App() {
  
    return (

<>

<div>
    navbar
    <Link to='/start' className="text-blue-600 underline hover:text-blue-700"> Start Game </Link>
</div>
       
        
        <Routes>

            <Route path="/play" element={<PlayGame/>}/>
            <Route path="/start" element={<StartGame/>}/>

            
        </Routes>

        </>
    );


}

export default App;