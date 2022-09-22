import { useState } from "react";

const FIRSTSTATEMENT = [
  "The stars ",
  "The owls ",
  "Your enemies ",
  "The obelisks ",
  "The crystals ",
  "The secrets ",
  "The crows ",
  "Your teeth ",
  "The curses ",
  "The eyes ",
  "The trees ",
  "The caves ",
];
const SECONDSTATEMENT = [
  "do not know you. ",
  "are not what they seem. ",
  "cannot reach you. ",
  "are gone when you look away. ",
  "plot revenge. ",
  "are not lost but waiting. ",
];
const THIRDSTATEMENT = [
  "Prepare: ",
  "Repent: ",
  "Sleep Well: ",
  "So Look Away: ",
];
const FOURTHSTATEMENT = [
  "they'll whisper you your fate.",
  "they, too, have teeth.",
  "they lie in wait.",
  "they can still see you.",
  "they come ever faster.",
  "the clock ticks on.",
];

const GenerateStatement = () => {
  const [statement, setStatement] = useState("");

  return (
    <div className="statement-generator">
      <button
        id="generate-button"
        onClick={() =>
          setStatement(
            FIRSTSTATEMENT[Math.floor(Math.random() * FIRSTSTATEMENT.length)] +
              SECONDSTATEMENT[
                Math.floor(Math.random() * SECONDSTATEMENT.length)
              ] +
              THIRDSTATEMENT[
                Math.floor(Math.random() * THIRDSTATEMENT.length)
              ] +
              FOURTHSTATEMENT[
                Math.floor(Math.random() * FOURTHSTATEMENT.length)
              ]
          )
        }
      >
        The Answer Is Within The Question
      </button>
      <div id="statement">{statement}</div>
    </div>
  );
};

export default GenerateStatement;