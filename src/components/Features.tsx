import { useLanguage } from "@/contexts/LanguageContext";
import { Sprout, Cloud, LayoutGrid, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Sprout className="h-12 w-12" />,
      title: t("feature1Title"),
      description: t("feature1Desc"),
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: t("feature2Title"),
      description: t("feature2Desc"),
    },
    {
      icon: <LayoutGrid className="h-12 w-12" />,
      title: t("feature3Title"),
      description: t("feature3Desc"),
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kultivator-primary">
            {t("features")}
          </h2>
          <p className="text-lg text-gray-600">
            Streamline your farming operations with our comprehensive suite of tools
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-kultivator-light hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-kultivator-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-kultivator-primary">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <Button variant="ghost" className="text-kultivator-primary hover:text-kultivator-primary/90">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};