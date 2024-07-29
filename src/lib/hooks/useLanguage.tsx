"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import enTranslations from "../../lang/en.json";
import esTranslations from "../../lang/es.json";
import otTranslations from "../../lang/ot.json";

type Translations = any;

export type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  translations: Translations;
  loadTranslations: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("en");
  const [translations, setTranslations] =
    useState<Translations>(enTranslations);

  const loadTranslations = (lang: string) => {
    switch (lang) {
      case "en":
        setTranslations(enTranslations);
        break;
      case "es":
        setTranslations(esTranslations);
        break;
      case "ot":
        setTranslations(otTranslations);
        break;
      default:
        setTranslations(enTranslations);
        break;
    }
  };

  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, translations, loadTranslations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
