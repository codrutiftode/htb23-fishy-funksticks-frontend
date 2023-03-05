import { useEffect, useState } from "react";
import styled from "styled-components";
import { LocalStorage } from "../../scripts/localStorage";
import MultiChoice from "../UI/MultiChoice";
import OnOffButton from "../UI/OnOffButton";
import { useTranslate } from "../../scripts/useTranslate";



function OptionsScreen() {
  const t = useTranslate();

  const POSSIBLE_CHOICES = [ 
    {
      name: t("neurodiverse"),
      isActive: false,
    },
    {
      name: t("nonverbal"),
      isActive: false,
    },
    {
      name: t("ESL"),
      isActive: false,
    },
    {
      name: t("other"),
      isActive: false,
    },
  ];




  const [choices, setChoices] = useState(POSSIBLE_CHOICES);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const patientDetails = LocalStorage.get("patientDetails");
    const darkTheme = LocalStorage.get("darkTheme");
    if (patientDetails !== null) {
      setChoices(patientDetails);
    }
    if (darkTheme !== null) {
      setIsDarkTheme(darkTheme);
    }
  }, []);

  const addChoice = (choice) => {
    setChoices((prevChoices) => {
      const newChoices = prevChoices.map((c) => {
        if (c.name === choice.name) {
          c.isActive = true;
        }
        return c;
      });
      LocalStorage.set("patientDetails", choices);
      return newChoices;
    });
    
  };

  const removeChoice = (choice) => {
    setChoices((prevChoices) => {
      const newChoices = prevChoices.map((c) => {
        if (c.name === choice.name) {
          c.isActive = false;
        }
        return c;
      });
      LocalStorage.set("patientDetails", choices);
      return newChoices;
    });
  };

  const goBackHandler = () => {
    window.history.back();
  };

  const setTheme = () => {
    setIsDarkTheme((prev) => !prev);
    LocalStorage.set("darkTheme", !isDarkTheme);
  };

  const themeButtonText = isDarkTheme ? t("light") : t("dark");
  return (
    <Style.OptionsScreen>
      <Style.OptionsHead>
        <button onClick={goBackHandler}>
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
        <h1>{t("options")}</h1>
      </Style.OptionsHead>
      <h3>{t("Iam")}</h3>
      <MultiChoice
        choices={choices}
        addChoice={addChoice}
        removeChoice={removeChoice}
      />
      <h3>Theme</h3>
      <OnOffButton
        STATE={isDarkTheme}
        NAME={themeButtonText}
        SetState={setTheme}
        width={"20%"}
        height={"30px"}
        fontSize
        borderRadius={"10px"}
        border={"3px outset rgba(68, 34, 102, 0.5)"}
        gradient1={"linear-gradient(to right,rgb(117,71,163)0%, rgb(92,46,138)50%, rgb(71,36,107)100%)"}
            gradient2={"linear-gradient(to right,rgb(182,223,227)0%, rgb(152,210,216)50%, rgb(136,189,194)100%)"}
      />
    </Style.OptionsScreen>
  );
}

export default OptionsScreen;

const Style = { 
  OptionsScreen: styled.div`
    padding: 1rem;

    & h3 {
      margin-top: 1rem;
    }
  `,

  OptionsHead: styled.div`
    display: flex;
    flex-direction: row;

  `,
};
