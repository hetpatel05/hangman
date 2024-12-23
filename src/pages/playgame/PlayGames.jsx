import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButton from "../../components/LetterButton/LetterButton";
import { useState } from "react";
import HangMan from "../../components/HangMan/HangMan";
import Game from "../../components/Game/Game";
import WinGame from "../../components/WinGame/WinGame";


function PlayGame(){
const [usedLetters,setUsedLetters]=useState([]);
const[step,setstep]=useState(0);
const [gamestatus,setgamestatus]=useState(null);

const location=useLocation();
const wordSelected=location.state?.wordSelected;

const handleLetterClick = function(letter) {

    if(wordSelected.toUpperCase().includes(letter)){

        console.log("correct");

    }
    else{
        console.log("incorrect")
        setstep(step+1);
    }
    console.log('clicked');
    setUsedLetters([...usedLetters, letter]);
}






    return (
        <div>

   <h1>play game</h1>
            
  <hr/>


            <MaskedText text={wordSelected} usedLetters={usedLetters} />
            <hr/>

     
            <div className="flex justify-between items-center">
                <div className="basis-2/4">
                    <LetterButton  text={wordSelected} usedLetters={usedLetters} onLetterclick={handleLetterClick} gamestatus={gamestatus}/>
                </div>

                <div className="basis-2/4 flex justify-center items-center">
                    <HangMan step={step}/>
                </div>

            </div>
             <Game step={step}  setgamestatus={setgamestatus}/>

             <WinGame usedLetters={usedLetters} WordSelected={wordSelected} setgamestatus={setgamestatus}/>
            <Link to='/start' className="text-blue-600 underline hover:text-blue-700"> Start Game </Link>


        </div>


    );
}
export default PlayGame;