import OnOffButton from "../UI/OnOffButton";
import { useState } from "react";
import PopUpButton from "../UI/PopupButton";
import styled from "styled-components";
import NextTask from "./NextTask";
import MainLayout from "../Layout/MainLayout";
import Popup from "../UI/Popup";
import ScheduledBreakPopup from "./ScheduledBreakPopup";
import { useTranslate } from "../../scripts/useTranslate";


function NurseScreen() {
  const t = useTranslate();
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
        <h3>{t("yournexttask")}</h3>
        <NextTask />
        <Style.OtherOptions>
          <OnOffButton
            NAME={t("break")}
            STATE={Break}
            SetState={() => SetBreak((prev) => !prev)}
          width={"100px"} 
          height={"50px"} 
          fontSize={"12px"} 
          borderRadius={"7px"}     
          gradient1={"linear-gradient(to right,rgb(117,71,163)0%, rgb(92,46,138)50%, rgb(71,36,107)100%)"}
          gradient2={"linear-gradient(to right,rgb(182,223,227)0%, rgb(152,210,216)50%, rgb(136,189,194)100%)"}
          ></OnOffButton>
          <PopUpButton 
          padding={"2rem"}
          name={t("schedulebreak")} onClick={openPopup}
          width={"100px"} 
          height={"50px"} 
          fontSize={"12px"} 
          borderRadius={"7px"}     
          gradient={"linear-gradient(to right,rgb(117,71,163)0%, rgb(92,46,138)50%, rgb(71,36,107)100%)"}
          ></PopUpButton>
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