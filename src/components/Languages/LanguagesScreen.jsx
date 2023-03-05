import styled from "styled-components";
import LanguageItem from "./LanguageItem";
import { LocalStorage } from "../../scripts/localStorage";
import MainLayout from "../Layout/MainLayout";

function LanguagesScreen() {
  const languages = ["English", "Romanian", "French"];

  return (
    <MainLayout>
    <Style.LanguagesList>
      {languages.map((language) => {
        const clickHandler = () => {
          LocalStorage.set("language", language);
        };
        return <LanguageItem language={language} onClick={clickHandler} />;
      })}
    </Style.LanguagesList>
    </MainLayout>
  );
}

export default LanguagesScreen;

const Style = {
  LanguagesList: styled.div`
    display: flex;
    flex-direction: column;
  `,
};