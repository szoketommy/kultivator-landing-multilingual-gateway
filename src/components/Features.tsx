import { useLanguage } from "@/contexts/LanguageContext";
import { Sprout, Cloud, LayoutGrid } from "lucide-react";

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
    <div className="py-20 bg-kultivator-light">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-kultivator-primary">
          {t("features")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 text-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-kultivator-primary mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-kultivator-primary">
                {feature.title}
              </h3>
              <p className="text-kultivator-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};