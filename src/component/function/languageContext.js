
import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("English");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 給子元件使用的 Hook
export const useLanguage = () => useContext(LanguageContext);