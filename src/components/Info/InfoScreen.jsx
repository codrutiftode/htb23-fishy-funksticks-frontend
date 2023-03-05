import SimpleButton from "../UI/SimpleButton";
import { useNavigate } from "react-router";
import styled, { useTheme } from "styled-components";
import { useEffect, useState } from "react";
import { LocalStorage } from "../../scripts/localStorage";
import MultiChoice from "../UI/MultiChoice";
import OnOffButton from "../UI/OnOffButton";

function InfoScreen() {
  const navigate = useNavigate();
  const theme = useTheme();

  const goBackHandler = () => {
    window.history.back();
  };


  return( 
    <Style.OptionsScreen>
    <Style.OptionsHead>
        <button onClick={goBackHandler}>
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
        <h1>Info</h1>
        
      </Style.OptionsHead>
      <Style.P>Hello my dear friend. <br/><br/>Welcome to the wonderful app that is this beauty. It was developed by the fantastic
          guys over at Fishy Funksticks. Here's the low down:<br/><br/>
          You can slap a button on your home screen to add your request to the system. We then decide how important 
          it is, and eventually give it to one of our lovely nurses who will come and give you all the help you need.
          You can add info about yourself in the options menu, as well as change how the site looks, feels and smells.
          <br/><br/>But ya, that's about it. Peace out.
        </Style.P>
        <Style.btndiv>
        <SimpleButton name={"Fun Button!"} width={"10em"} height={"4em"} fontSize={"1em"} borderRadius={"1em"} background={(props) => props.theme.colors.primary}></SimpleButton>
        </Style.btndiv>
    </Style.OptionsScreen>
)
}
const Style = {

  btndiv : styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
  `,
  OptionsScreen: styled.div`
    padding: 1rem;

    & h3 {
      margin-top: 1rem;
    }
  `,

  OptionsHead: styled.div`
    display: flex;
    flex-direction: row;

    & button {
      background-color: rgba(0, 0, 0, 0.1);
      border: none;
      outline: none;
      cursor: pointer;
      padding: 0 1rem;
      margin-right: 0.4rem;
    }
  `,
  P: styled.p`
    padding: 5px;
    margin-top: 20px;
  `
};

export default InfoScreen;