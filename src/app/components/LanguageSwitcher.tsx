import React from "react";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

// Bandeiras
const flags: Record<"pt" | "en" | "es" | "ru", string> = {
    pt: "https://flagcdn.com/br.svg",
    en: "https://flagcdn.com/us.svg", // EUA
    es: "https://flagcdn.com/es.svg",
    ru: "https://flagcdn.com/ru.svg",
};

const LanguageSwitcher: React.FC = () => {
    const { t } = useTranslation();

    const changeLanguage = (lang: "pt" | "en" | "es" | "ru") => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <div className="flex gap-3 items-center justify-end">
            {(Object.keys(flags) as Array<"pt" | "en" | "es" | "ru">).map((lang) => (
                <img
                    key={lang}
                    src={flags[lang]}
                    alt={lang}
                    className={`
                        h-10 cursor-pointer rounded-full border-2 transition-transform hover:scale-110
                        ${i18n.language === lang ? "border-white" : "border-transparent"}
                        ${lang === "en" ? "max-w-[60px]" : ""}  // ajusta largura só para EUA
                    `}
                    onClick={() => changeLanguage(lang)}
                />
            ))}
        </div>
    );
};

export default LanguageSwitcher;
