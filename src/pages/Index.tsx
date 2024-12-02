import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <div className="absolute top-4 right-4 z-50">
          <LanguageSwitcher />
        </div>
        <Hero />
        <Features />
      </div>
    </LanguageProvider>
  );
};

export default Index;