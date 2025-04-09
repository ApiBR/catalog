import { Language } from "../types";
import { translations } from "../data/translations";
import { LanguageSelector } from "./LanguageSelector";

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  return (
    <header className="bg-[#009739] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg">
              <img
                src="https://apibr.com/ApiBRLogo.png"
                alt="API BR Logo"
                className="h-8 w-auto"
              />
            </div>
            <h1 className="text-3xl font-bold text-white">
              API BR - {translations.title[language]}
            </h1>
          </div>
          <LanguageSelector
            currentLanguage={language}
            onLanguageChange={onLanguageChange}
          />
        </div>
      </div>
    </header>
  );
}
