function WinGame({ usedLetters, WordSelected,setgamestatus }) {
    const usedLetterSet = new Set(usedLetters);
    const wordArray = WordSelected.toUpperCase().split('');

    const isWon = wordArray.every(letter => usedLetterSet.has(letter));

    if (isWon) {

        setgamestatus('win');
        return (<h1>Congratulations! You won the game!</h1>);
    }

    return null; 
}

export default WinGame;
