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


function PatientScreen(props) {
  const t = useTranslate();

  const buttonsData = [
    {
      name: t("food"),
      type: "food",
      materialIcon: "lunch_dining",
    },
    {
      name: t("water"),
      type: "water",
      materialIcon: "local_drink",
    },
    {
      name: t("toilet"),
      type: "toilet",
      materialIcon: "bathroom",
    },
    {
      name: t("meds"),
      type: "medication",
      materialIcon: "healing",
    },
    {
      name: t("assist"),
      type: "physical_assistance",
      materialIcon: "accessibility",
    },
    {
      name: t("emergency"),
      type: "emergency",
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
            <Style.GridItem index={index} BACKGROUND={theme.colors.tertiary} 
            GRADIENT={"linear-gradient(to right,rgb(182,223,227)0%, rgb(152,210,216)50%, rgb(136,189,194)100%)"}>
              <PopupButton
                key={buttonData.type}
                name={buttonData.name}
                materialIcon={buttonData.materialIcon}
                onClick={() => GeneralClickHandler(buttonData.type)}
              />
            </Style.GridItem>
          );
        })}
      </Style.HelpOptions>
      <Style.MenuOptions>
        <MenuOption
          name={t("settings")}
          alt="Settings icon"
          src="/assets/settings-solid.svg"
          onClick={settingsClickHandler}
        ></MenuOption>
        <MenuOption
          name={t("infoicon")}
          alt="Info icon"
          src="/assets/info-circle-outline.svg"
          onClick={infoClickHandler}
        ></MenuOption>
      </Style.MenuOptions>

    <Popup shown={CurrentButtType !== null} closePopup={closePopup}>
      <RequestPopup closePopup={closePopup}></RequestPopup>
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

    & > button {
      width: 100%;
      height: 100%;
      font-family: ${props => props.theme.font.fontFamily};
      color: "black";
      font-size: 18px;

      background-color: ${props => props.BACKGROUND}; 
      border-radius: 10px;
      border: 3px outset rgba(68, 34, 102, 0.5);
      box-shadow:
        1.2px 1.2px 3.5px rgba(0, 0, 0, 0.028),
        2.9px 3px 8.3px rgba(0, 0, 0, 0.04),
        5.5px 5.6px 15.7px rgba(0, 0, 0, 0.05),
        9.8px 10.1px 27.9px rgba(0, 0, 0, 0.06),
        18.4px 18.8px 52.2px rgba(0, 0, 0, 0.072),
        44px 45px 125px rgba(0, 0, 0, 0.1);

      transition-duration: 0.4s;
      :hover {
        background-image: ${props => props.GRADIENT};
    }
    }
  `,
};
