import styled from "styled-components";
import LanguageItem from "./LanguageItem";
import { LocalStorage } from "../../scripts/localStorage";

function LanguagesScreen() {
  const languages = ["English", "Romanian", "French"];

  return (
    <Style.LanguagesList>
      {languages.map((language) => {
        const clickHandler = () => {
          LocalStorage.set("language", language);
        };
        return <LanguageItem language={language} onClick={clickHandler} />;
      })}
    </Style.LanguagesList>
  );
}

export default LanguagesScreen;

const Style = {
  LanguagesList: styled.div`
    display: flex;
    flex-direction: column;
  `,
};