import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-kultivator-primary/90 to-kultivator-primary/70" />
        <img
          src="https://images.unsplash.com/photo-1595056040133-b15049f9c5bb"
          alt="Modern Greenhouse Technology"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t("welcome")}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            {t("subtitle")}
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-white text-kultivator-primary hover:bg-white/90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};