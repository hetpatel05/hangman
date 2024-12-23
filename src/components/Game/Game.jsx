



function Game({step,setgamestatus}){


if(step>=8){

setgamestatus('lose');
    return (
        

        <h1>  Game is over  you lose the game</h1>
    )
    
}


}


export default Game;