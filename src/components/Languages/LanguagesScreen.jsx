import styled from "styled-components";
import LanguageItem from "./LanguageItem";
import { LocalStorage } from "../../scripts/localStorage";
import { useNavigate } from "react-router";
import MainLayout from "../Layout/MainLayout";
import { useTranslate } from "../../scripts/useTranslate";


// unsure whether to translate the languages - got annoyed at me when I tried
function LanguagesScreen() {
  const t = useTranslate();
  const languages = [
    { name: "English", id: "en" },
    { name: "Romanian", id: "ro" },
    { name: "French", id: "fr" },
  ];
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Style.question>{t("LanguagePref")}</Style.question>
      <Style.LanguagesList>
        {languages.map((language) => {
          const clickHandler = () => {
            LocalStorage.set("language", language.id);
            navigate("/login");
          };
          return <LanguageItem language={language.name} onClick={clickHandler} />;
        })}
      </Style.LanguagesList>
    </MainLayout>
  );
}

export default LanguagesScreen;

const Style = {
  question: styled.div`
    text-align: center;
    font-size: min(5vh, 10vw);
    margin-top: 10vh;
  `,

  LanguagesList: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
