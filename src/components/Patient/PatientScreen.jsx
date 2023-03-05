import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import PopupButton from "../UI/PopupButton";
import MenuOption from "./MenuOption";

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

  const settingsClickHandler = () => {
    navigate("/settings");
  };

  const infoClickHandler = () => {
    navigate("/info");
  };

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
        ></MenuOption>
        <MenuOption
          name="Info"
          alt="Info icon"
          src="/assets/info-circle-outline.svg"
          onClick={infoClickHandler}
        ></MenuOption>
      </Style.MenuOptions>
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
