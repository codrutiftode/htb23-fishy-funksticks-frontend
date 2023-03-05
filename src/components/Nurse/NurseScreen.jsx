import OnOffButton from "../UI/OnOffButton";
import { useState } from "react";
import PopUpButton from "../UI/PopupButton";
import MainLayout from "../Layout/MainLayout";

function NurseScreen() {
  const [Break, SetBreak] = useState(false)
  const [ShowPopup, SetShowPopup] = useState(false)


  return(
    <MainLayout>
    <OnOffButton NAME={"Pls Work"} STATE={Break} SetState={SetBreak}></OnOffButton>
    <PopUpButton NAME ={"sKetchy"} State={ShowPopup} SetPOP={SetShowPopup}></PopUpButton>

    </MainLayout>
  )
}

export default NurseScreen;
