import OnOffButton from "../UI/OnOffButton";
import { useState } from "react";
import PopUpButton from "../UI/PopupButton";

function NurseScreen() {
  const [Break, SetBreak] = useState(false)
  const [ShowPopup, SetShowPopup] = useState(false)


  return(
    <div>
    <OnOffButton NAME={"Pls Work"} STATE={Break} SetState={SetBreak}></OnOffButton>
    <PopUpButton NAME ={"sKetchy"} State={ShowPopup} SetPOP={SetShowPopup}></PopUpButton>

    </div>
  )
}

export default NurseScreen;
