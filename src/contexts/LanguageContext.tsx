import React, { createContext, useContext, useState } from "react";

type Language = "hu" | "ro";

type Translations = {
  [key: string]: {
    hu: string;
    ro: string;
  };
};

export const translations: Translations = {
  welcome: {
    hu: "Üdvözöljük a Kultivátor-ban",
    ro: "Bun venit la Kultivátor",
  },
  subtitle: {
    hu: "Modern megoldások a mezőgazdaság számára",
    ro: "Soluții moderne pentru agricultură",
  },
  features: {
    hu: "Főbb funkciók",
    ro: "Caracteristici principale",
  },
  feature1Title: {
    hu: "Terméskövetés",
    ro: "Urmărirea culturilor",
  },
  feature1Desc: {
    hu: "Kövesse nyomon terményeit valós időben",
    ro: "Urmăriți culturile în timp real",
  },
  feature2Title: {
    hu: "Időjárás előrejelzés",
    ro: "Prognoză meteo",
  },
  feature2Desc: {
    hu: "Pontos időjárási adatok a területéhez",
    ro: "Date meteo precise pentru zona dvs",
  },
  feature3Title: {
    hu: "Erőforrás kezelés",
    ro: "Gestionarea resurselor",
  },
  feature3Desc: {
    hu: "Hatékony eszköz- és készletkezelés",
    ro: "Gestionarea eficientă a echipamentelor și stocurilor",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("hu");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};