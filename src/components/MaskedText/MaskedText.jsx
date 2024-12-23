import { MaskedTextutility } from "./MaskedTextutility";

function MaskedText({ text, usedLetters }) {
  const letters = MaskedTextutility(text, usedLetters).split("");

  return (
    <>
      {letters.map((letter, index) => {
        return <span key={`letter=${index}`}>{letter}</span>;
      })}
    </>
  );
}
export default MaskedText;
