import { useNavigate } from "react-router-dom";
import styled, { keyframes, useTheme } from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import PopupButton from "../UI/PopupButton";
import MenuOption from "./MenuOption";
import RequestPopup from "./RequestPopup";
import Popup from "../UI/Popup";
import { useState } from "react";
import MainLayout from "../Layout/MainLayout";
import { useTranslate } from "../../scripts/useTranslate";


function PatientScreen() {
  const t = useTranslate();

  const buttonsData = [
    {
      name: t("food"),
      type: "FOOD",
      materialIcon: "lunch_dining",
    },
    {
      name: t("water"),
      type: "WATER",
      materialIcon: "local_drink",
    },
    {
      name: t("toilet"),
      type: "TOILET",
      materialIcon: "bathroom",
    },
    {
      name: t("meds"),
      type: "PAINKILLERS",
      materialIcon: "healing",
    },
    {
      name: t("assist"),
      type: "ASSISTANCE",
      materialIcon: "accessibility",
    },
    {
      name: t("emergency"),
      type: "EMERGENCY",
      materialIcon: "emergency_home",
    },
  ];

  const navigate = useNavigate();
  const theme = useTheme();

  const [CurrentButtType, SetCurrentButtType] = useState(null); // to do the state

  const settingsClickHandler = () => {
    navigate("/settings");
  };

  const infoClickHandler = () => {
    navigate("/info");
  };

  const GeneralClickHandler = (buttonType) => {
    SetCurrentButtType(buttonType);
  }

  const closePopup = () => SetCurrentButtType(null);

  return (
    <MainLayout>
    <Style.PatientScreen>
      <h2>Choose an option</h2>
      <Style.HelpOptions>
        {buttonsData.map((buttonData, index) => {
          return (
            <Style.GridItem index={index}>
              <PopupButton
                key={buttonData.type}
                name={buttonData.name}
                materialIcon={buttonData.materialIcon}
                onClick={() => GeneralClickHandler(buttonData.type)}
                background={theme.colors.tertiary} 
                gradient={"linear-gradient(to right,rgb(182,223,227)0%, rgb(152,210,216)50%, rgb(136,189,194)100%)"}
                width = {"100%"}
                height = {"100%"}
                fontSize = {"18px"}
                borderRadius = {"10px"}
                color = {"black"} 
                padding = {"20% 40%"}
                border = {"3px outset rgba(68, 34, 102, 0.5)"}
                //FIXME: emergency button is smaller than others
              />
            </Style.GridItem>
          );
        })}
      </Style.HelpOptions>
      <Style.MenuOptions>
        <MenuOption
          name={t("settings")}
          alt="Settings icon"
          src="/assets/settings-solid.png"
          onClick={settingsClickHandler}
          background = {theme.colors.primary}
          fontSize = "12px"
          borderRadius = "10px"
          gradient = "linear-gradient(to right,rgb(117,71,163)0%, rgb(92,46,138)50%, rgb(71,36,107)100%)"
        ></MenuOption>
        <MenuOption
          name={t("infoicon")}
          alt="Info icon"
          src="/assets/info-circle-outline.png"
          onClick={infoClickHandler}
          background = {theme.colors.primary}
          fontSize = "12px"
          borderRadius = "10px"
          gradient = "linear-gradient(to right,rgb(117,71,163)0%, rgb(92,46,138)50%, rgb(71,36,107)100%)"
        ></MenuOption>
      </Style.MenuOptions>

    <Popup shown={CurrentButtType !== null} closePopup={closePopup}>
      <RequestPopup closePopup={closePopup} typeOfRequest={CurrentButtType}></RequestPopup>
    </Popup>


    </Style.PatientScreen>
    </MainLayout>
  );
}

export default PatientScreen;

const gridItemAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0.2rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Style = {

  PatientScreen: styled.div`
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    ${breakpoint("tablet")`
      padding: 1rem 10%;
    `}

    ${breakpoint("desktop")`
      padding: 5% 30%;
    `}
  `,

  HelpOptions: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.4rem;
    flex: 1;
    margin: 1rem 0;
  `,

  MenuOptions: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1rem 20%;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  `,

  GridItem: styled.div`
    opacity: 0;
    animation: ${gridItemAnim} 0.3s ease-in-out forwards;
    animation-delay: ${(props) => props.index * 0.1}s;

  `,
};
