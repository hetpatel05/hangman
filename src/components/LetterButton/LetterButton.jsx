const ALPHABETS = new Array(26)
  .fill("")
  .map((e, index) => String.fromCharCode(65 + index));

function LetterButton({ text, usedLetters, onLetterclick, gamestatus }) {
  const originalCharacters = new Set(text.toUpperCase().split(""));
  const selectedLetters = new Set(usedLetters.join("").toUpperCase().split(""));

  const handleClick = function (event) {
    const character = event.target.value;
    onLetterclick?.(character);
  };
  const buttonStyle = function (letter) {
    if (selectedLetters.has(letter)) {
      return `${
        originalCharacters.has(letter)
          ? "bg-green-600  border-green-700"
          : "border-[#000] border-4 bg-red-600"
      }  `;
    } else {
      return "bg-blue-600 border-blue-700 hover:bg-blue-700";
    }
  };

  const buttons = ALPHABETS.map((letter) => {
    return (
      <button
        id="th"
        key={`button =${letter}`}
        value={letter}
        disabled={gamestatus != null || selectedLetters.has(letter)}
        onClick={handleClick}
        className={`h-12 w-12 m-1 rounded-md focus:outline-none text-white ${buttonStyle(
          letter
        )}`}
      >
        {letter}
      </button>
    );
  });

  return <>{buttons}</>;
}
export default LetterButton;
