import { useNavigate } from "react-router-dom";
import styled, { keyframes, useTheme }from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import PopupButton from "../UI/PopupButton";
import MenuOption from "./MenuOption";
import RequestPopup from "./RequestPopup";
import Popup from "../UI/Popup";
import { useState } from "react";

const buttonsData = [
  {
    name: "Get food",
    type: "food",
    materialIcon: "lunch_dining",
  },
  {
    name: "Get water",
    type: "water",
    materialIcon: "local_drink",
  },
  {
    name: "Go toilet",
    type: "toilet",
    materialIcon: "bathroom",
  },
  {
    name: "Get medication",
    type: "medication",
    materialIcon: "healing",
  },
  {
    name: "Physical assistance",
    type: "physical_assistance",
    materialIcon: "accessibility",
  },
  {
    name: "Emergency",
    type: "emergency",
    materialIcon: "emergency_home",
  },
];

function PatientScreen() {
  const navigate = useNavigate();

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

  const theme = useTheme();

  return (
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
              />
            </Style.GridItem>
          );
        })}
      </Style.HelpOptions>
      <Style.MenuOptions>
        <MenuOption
          name="Settings"
          alt="Settings icon"
          src="/assets/settings-solid.svg"
          onClick={settingsClickHandler}
          fontsize="18px"
          background={theme.colors.primary}
          borderRadius="7px"
          gradient="linear-gradient(to right,rgb(117,71,163)0%, rgb(92,46,138)50%, rgb(71,36,107)100%)"
          textGradient="white"
        ></MenuOption>
        <MenuOption
          name="Info"
          alt="Info icon"
          src="/assets/info-circle-outline.svg"
          fontsize="18px"
          background={theme.colors.primary}
          borderRadius="7px"
          gradient="linear-gradient(to right,rgb(117,71,163)0%, rgb(92,46,138)50%, rgb(71,36,107)100%)"
          textGradient="white"
          onClick={infoClickHandler}
        ></MenuOption>
      </Style.MenuOptions>

    <Popup shown={CurrentButtType !== null} closePopup={closePopup}>
      <RequestPopup closePopup={closePopup}></RequestPopup>
    </Popup>


    </Style.PatientScreen>
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
    }
  `,
};
