import OnOffButton from "../UI/OnOffButton";
import { useEffect, useState } from "react";
import PopUpButton from "../UI/PopupButton";
import styled, { useTheme } from "styled-components";
import NextTask from "./NextTask";
import MainLayout from "../Layout/MainLayout";
import Popup from "../UI/Popup";
import ScheduledBreakPopup from "./ScheduledBreakPopup";
import { useTranslate } from "../../scripts/useTranslate";
import { ApiController } from "../../api/apiController";
import constants from "../../constants";
import { LocalStorage } from "../../scripts/localStorage";

const getNextTask = async (saveFunc) => {
  try {
    const result = await ApiController.post(
      constants.backendURL + "/api/get_next_task"
    );
    saveFunc(result.data);
  } catch (err) {
    if (err.response.status === 405) {
      console.log(err);
      saveFunc(false);
    }
    console.error(err);
  }
};

const getNurseName = async (saveFunc) => {
  try {
    const result = await ApiController.post(
      constants.backendURL + "/api/get_nurse_info"
    , {
      nurse_id: LocalStorage.get("nurse_id"),
    });
    console.log(result);
    saveFunc(result.data);
  } catch (err) {
    console.error(err);
    saveFunc(false);
  }
};

function NurseScreen() {
  const t = useTranslate();
  const [Break, SetBreak] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const [nurseName, setNurseName] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    getNurseName(setNurseName);
    setTimeout(() => getNextTask(setCurrentTask), 1000);
  }, []);

  const closePopup = () => {
    setPopupShown(false);
  };

  const openPopup = () => {
    setPopupShown(true);
  };

  const taskDoneClickHandler = () => {
    getNextTask(setCurrentTask);
  };

  return (
    <MainLayout>
      <Style.NurseScreen>
        <h2>{nurseName ? nurseName : "Jose Swindon"}</h2>
        <h3>{t("yournexttask")}</h3>
        {currentTask === null && "Loading..."}
        {currentTask === false && "No tasks at the moment."}
        {currentTask && (
          <NextTask
            taskData={currentTask}
            taskDoneClickHandler={taskDoneClickHandler}
          />
        )}
        <Style.OtherOptions>
          <OnOffButton
            NAME={t("break")}
            STATE={Break}
            SetState={() => SetBreak((prev) => !prev)}
            width={"100px"}
            height={"50px"}
            fontSize={"12px"}
            borderRadius={"10px"}
            border={"3px outset rgba(68, 34, 102, 0.75)"}
            gradient1={
              "linear-gradient(to right,rgb(117,71,163)0%, rgb(92,46,138)50%, rgb(71,36,107)100%)"
            }
            gradient2={
              "linear-gradient(to right,rgb(182,223,227)0%, rgb(152,210,216)50%, rgb(136,189,194)100%)"
            }
          ></OnOffButton>
          <PopUpButton
            padding={"1rem"}
            name={t("schedulebreak")}
            onClick={openPopup}
            width={"150px"}
            height={"50px"}
            fontSize={"12px"}
            color={theme.colors.secondary}
            borderRadius={"10px"}
            background={theme.colors.primary}
            border={"3px outset rgba(68, 34, 102, 0.75)"}
            gradient={
              "linear-gradient(to right,rgb(117,71,163)0%, rgb(92,46,138)50%, rgb(71,36,107)100%)"
            }
            //FIXME: text slightly low
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
    grid-gap: 0.4rem;
    justify-content: center;
    padding: 1rem 20%;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  `,
};
