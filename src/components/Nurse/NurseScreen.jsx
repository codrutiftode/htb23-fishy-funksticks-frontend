import OnOffButton from "../UI/OnOffButton";
import { useState } from "react";

function NurseScreen() {
  const [Break, SetBreak] = useState(false)

  return(
    <OnOffButton NAME={"Pls Work"} STATE={Break} SetState={SetBreak}></OnOffButton>)
}

export default NurseScreen;
