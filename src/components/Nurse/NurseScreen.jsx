import OnOffButton from "../UI/OnOffButton";
import { useState } from "react";
import PopUpButton from "../UI/PopupButton";
import styled from "styled-components";
import NextTask from "./NextTask";

function NurseScreen() {
  const [Break, SetBreak] = useState(false);
  const [ShowPopup, SetShowPopup] = useState(false);

  return (
    <Style.NurseScreen>
      <h2>[Nurse Name]</h2>
      <h3>Your next task</h3>
      <NextTask />
      <Style.OtherOptions>
        <OnOffButton
          NAME={"Pls Work"}
          STATE={Break}
          SetState={() => SetBreak((prev) => !prev)}
        ></OnOffButton>
        <PopUpButton name={"sKetchy"}></PopUpButton>
      </Style.OtherOptions>
    </Style.NurseScreen>
  );
}

export default NurseScreen;

const Style = {
  NurseScreen: styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: column;
  `,

  OtherOptions: styled.div`
    display: flex;
    flex-direction: row;
  `,
};
