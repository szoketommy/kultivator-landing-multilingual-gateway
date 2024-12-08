import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
          <div className="container mx-auto py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-kultivator-primary">Kultivátor</div>
            <div className="flex items-center gap-8">
              <LanguageSwitcher />
              <Button>Sign In</Button>
            </div>
          </div>
        </nav>
        
        <main className="pt-16">
          <Hero />
          <Features />
          
          {/* CTA Section */}
          <section className="py-24 bg-kultivator-primary">
            <div className="container text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Farm Management?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of farmers who are already using Kultivátor to optimize their operations
              </p>
              <Button size="lg" className="bg-white text-kultivator-primary hover:bg-white/90">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-kultivator-light py-12">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-bold text-kultivator-primary mb-4">Kultivátor</h3>
                  <p className="text-gray-600">Modern solutions for modern farming</p>
                </div>
                <div>
                  <h4 className="font-semibold text-kultivator-primary mb-4">Product</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Documentation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-kultivator-primary mb-4">Company</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-kultivator-primary mb-4">Legal</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
                © 2024 Kultivátor. All rights reserved.
              </div>
            </div>
          </footer>
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;