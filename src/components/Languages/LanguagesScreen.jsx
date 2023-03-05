import styled from "styled-components";
import LanguageItem from "./LanguageItem";
import { LocalStorage } from "../../scripts/localStorage";
import { useNavigate } from "react-router";
import MainLayout from "../Layout/MainLayout";

function LanguagesScreen() {
  const languages = ["English", "Romanian", "French"];
  const navigate = useNavigate();

  return (
    <MainLayout>
    <Style.question>Preferred language...</Style.question>
    <Style.LanguagesList>
      {languages.map((language) => {
        const clickHandler = () => {
          LocalStorage.set("language", language);
          navigate("/login");
        };
        return <LanguageItem language={language} onClick={clickHandler} />;
      })}
    </Style.LanguagesList>
    </MainLayout>
  );
}

export default LanguagesScreen;

const Style = {

  
  question: styled.div`
  text-align: center;
  font-size: min(5vh,10vw);
`,

  LanguagesList: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};