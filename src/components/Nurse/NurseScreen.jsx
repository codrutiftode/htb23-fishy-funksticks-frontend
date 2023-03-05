import OnOffButton from "../UI/OnOffButton";
import { useState } from "react";
import PopUpButton from "../UI/PopupButton";
import styled from "styled-components";
import NextTask from "./NextTask";
import MainLayout from "../Layout/MainLayout";
import Popup from "../UI/Popup";
import ScheduledBreakPopup from "./ScheduledBreakPopup";

function NurseScreen() {
  const [Break, SetBreak] = useState(false);
  const [popupShown, setPopupShown] = useState(false);

  const closePopup = () => {
    setPopupShown(false);
  };

  const openPopup = () => {
    setPopupShown(true);
  };

  return (
    <MainLayout>
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
          <PopUpButton name={"sKetchy"} onClick={openPopup}></PopUpButton>
        </Style.OtherOptions>
      </Style.NurseScreen>
      <Popup shown={popupShown} closePopup={closePopup}>
        <ScheduledBreakPopup closePopup={closePopup} />
      </Popup>
    </MainLayout>
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
