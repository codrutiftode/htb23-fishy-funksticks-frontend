import SimpleButton from "../UI/SimpleButton";
import { useNavigate } from "react-router";
import styled, { useTheme } from "styled-components";
import { useEffect, useState } from "react";
import { LocalStorage } from "../../scripts/localStorage";
import MultiChoice from "../UI/MultiChoice";
import OnOffButton from "../UI/OnOffButton";
import { useTranslate } from "../../scripts/useTranslate";

function InfoScreen() {
  const t = useTranslate();
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
        <h1>{t("info")}</h1>
        
      </Style.OptionsHead>
      <Style.P> {t("info1")} <br/><br/> {t("info2")} <br/><br/>
          {t("info3")}
          <br/><br/>{t("info4")}
        </Style.P>
        <Style.btndiv>
        <SimpleButton 
        name={"Fun Button!"} 
        width={"10em"} 
        height={"4em"} 
        fontSize={"1em"} 
        borderRadius={"1em"} 
        background={(props) => props.theme.colors.primary}
        border={"3px outset rgba(68, 34, 102, 0.75)"}
        gradient={"linear-gradient(to right,rgb(117,71,163)0%, rgb(92,46,138)50%, rgb(71,36,107)100%)"}
        animation={"example"}
        ></SimpleButton>
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