import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === "hu" ? "default" : "outline"}
        onClick={() => setLanguage("hu")}
        className="w-12"
      >
        HU
      </Button>
      <Button
        variant={language === "ro" ? "default" : "outline"}
        onClick={() => setLanguage("ro")}
        className="w-12"
      >
        RO
      </Button>
    </div>
  );
};