import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Cloud, ClipboardList, Store, LineChart } from "lucide-react";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
          <div className="container mx-auto py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-kultivator-primary">Kultivátor</div>
            <div className="flex items-center gap-8">
              <LanguageSwitcher />
              <Button>Join the Waiting List</Button>
            </div>
          </div>
        </nav>
        
        <main className="pt-16">
          <Hero />
          <Features />
          
          {/* Tools Section */}
          <section className="py-24 bg-kultivator-light">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-kultivator-primary mb-4">
                  All the tools you need to grow
                </h2>
                <p className="text-lg text-gray-600">
                  We have heard the farmers needs. From seed to sell, we got you covered.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Fields Management */}
                <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                  <MapPin className="h-12 w-12 text-kultivator-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4 text-kultivator-primary">Fields management</h3>
                  <p className="text-gray-600">
                    Add your fields on the map, and gain quick insides for current weather and pending tasks.
                  </p>
                </div>

                {/* Weather */}
                <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                  <Cloud className="h-12 w-12 text-kultivator-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4 text-kultivator-primary">Weather</h3>
                  <p className="text-gray-600">
                    We have partnered with worlds leading weather servers to provide you with extremely precise weather information for each of your fields.
                  </p>
                </div>

                {/* Scouting and Notes */}
                <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                  <ClipboardList className="h-12 w-12 text-kultivator-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4 text-kultivator-primary">Scouting and notes</h3>
                  <p className="text-gray-600">
                    Monitor your plans and add notes for yourself or to share and get help
                  </p>
                </div>

                {/* Store Front */}
                <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                  <Store className="h-12 w-12 text-kultivator-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4 text-kultivator-primary">Store front</h3>
                  <p className="text-gray-600">
                    Estimated 40% of the profit is lost when you sell via big supermarkets and retailers. Change all that by selling and accepting payments online in minutes.
                  </p>
                </div>

                {/* Expenses and Income */}
                <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                  <LineChart className="h-12 w-12 text-kultivator-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4 text-kultivator-primary">Expenses and income</h3>
                  <p className="text-gray-600">
                    Track your expenses, and organize them into categories
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Clients Section */}
          <section className="py-24 bg-white">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold text-kultivator-primary text-center mb-16">
                Featured clients
              </h2>
              {/* Placeholder for client logos/testimonials */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="h-24 bg-kultivator-light rounded-lg flex items-center justify-center">
                  <span className="text-kultivator-primary/50">Client 1</span>
                </div>
                <div className="h-24 bg-kultivator-light rounded-lg flex items-center justify-center">
                  <span className="text-kultivator-primary/50">Client 2</span>
                </div>
                <div className="h-24 bg-kultivator-light rounded-lg flex items-center justify-center">
                  <span className="text-kultivator-primary/50">Client 3</span>
                </div>
                <div className="h-24 bg-kultivator-light rounded-lg flex items-center justify-center">
                  <span className="text-kultivator-primary/50">Client 4</span>
                </div>
              </div>
            </div>
          </section>

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
                Join the Waiting List <ArrowRight className="ml-2 h-4 w-4" />
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