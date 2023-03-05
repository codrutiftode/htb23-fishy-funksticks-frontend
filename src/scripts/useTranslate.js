import { LocalStorage } from "./localStorage";
import { romanianTranslations } from "../translations/romanian";
import { englishTranslations } from "../translations/english";
import { frenchTranslations } from "../translations/french";
import { useEffect, useState } from "react";

export function useTranslate() {
  const [language, setLanguage] = useState("en");
  let dataset;
  switch (language) {
    case "en":
      dataset = englishTranslations;
      break;
    case "fr":
      dataset = frenchTranslations;
      break;
    case "ro":
      dataset = romanianTranslations;
      break;
    default:
      dataset = englishTranslations;
  }

  useEffect(() => {
    const language = LocalStorage.get("language") || "en";
    setLanguage(language);
  }, []);

  return (translationKey) => {
    return dataset[translationKey];
  };
}
