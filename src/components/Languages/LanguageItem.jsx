import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import { useTranslate } from "../../scripts/useTranslate";


function LanguageItem({language, onClick}) {
  return <Style.LanguageItem onClick={onClick}>
    {language}
  </Style.LanguageItem>
}

export default LanguageItem;

const Style = {
  
  LanguageItem: styled.div`
    border: 1px solid black;
    border-radius: 4px;
    padding: 8px;
  text-align: center;

        width: 80%;
        font-size: 5vh;
        margin-top: 3vh;

    ${breakpoint("tablet")`
        width: 50%;
        font-size: 5vh;
        margin-top: 2vh;
    `}

    
    ${breakpoint("desktop")`
        width: 30%;
        font-size: 3vh;
        margin-top: 1.5vh;
    `}

    &:hover {
      background-color: #eee;
      cursor: pointer;
    }
  `,
}