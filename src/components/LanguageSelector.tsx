import { Globe } from "lucide-react";
import { Language } from "../types";

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "pt-BR", label: "Português", flag: "🇧🇷" },
  { code: "en-US", label: "English", flag: "🇺🇸" },
  { code: "es-ES", label: "Español", flag: "🇪🇸" },
];

export function LanguageSelector({
  currentLanguage,
  onLanguageChange,
}: LanguageSelectorProps) {
  return (
    <div className="relative inline-block">
      <select
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        aria-label="Select language"
        className="appearance-none bg-white border border-[#007d30] rounded-lg pl-10 pr-8 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#007d30] cursor-pointer"
      >
        {languages.map((lang) => (
          <option
            key={lang.code}
            value={lang.code}
            className="bg-white text-gray-700"
          >
            {lang.flag} {lang.label}
          </option>
        ))}
      </select>
      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#009739]" />
    </div>
  );
}
