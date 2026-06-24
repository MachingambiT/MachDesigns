import { motion } from "motion/react";
import { Check, Zap, Server, Shield } from "lucide-react";

const packages = [
  {
    name: "Essential",
    price: "80",
    description: "Perfect for personal brands and small businesses needing a clean, professional web presence.",
    features: [
      "Responsive 1-3 page website",
      "2 Months Free Hosting",
      "2 Months Free Maintenance",
      "Basic SEO Setup",
      "Contact Form Integration"
    ],
    icon: Zap,
    popular: false,
    delay: 0.1
  },
  {
    name: "Professional",
    price: "120",
    description: "Ideal for growing businesses requiring CMS capabilities or simple e-commerce functionality.",
    features: [
      "Up to 8 custom pages",
      "Content Management System",
      "E-commerce (up to 20 products)",
      "Standard SEO & Analytics",
      "3 Months Free Support"
    ],
    icon: Server,
    popular: true,
    delay: 0.2
  },
  {
    name: "Enterprise",
    price: "300+",
    description: "For large scale deployments requiring robust architecture, custom web apps, or large catalogs.",
    features: [
      "Unlimited pages & complex logic",
      "Premium 24/7 Support",
      "Advanced Analytics & Tracking",
      "Custom API Integrations",
      "Dedicated Server Setup"
    ],
    icon: Shield,
    popular: false,
    delay: 0.3
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative border-t border-zinc-200 bg-zinc-50">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-zinc-900 mb-6">Transparent Pricing</h2>
          <p className="text-zinc-600 text-lg">
            Straightforward service packages designed to scale with your business. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: pkg.delay }}
              className={`relative flex flex-col p-8 rounded-3xl border ${
                pkg.popular 
                  ? "border-emerald-500/50 bg-emerald-500/5 shadow-xl shadow-emerald-500/10" 
                  : "border-zinc-200 bg-white shadow-sm"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold tracking-wide uppercase shadow-lg shadow-emerald-500/25">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <pkg.icon className={`w-10 h-10 mb-6 ${pkg.popular ? "text-emerald-500" : "text-zinc-500"}`} />
                <h3 className="text-2xl font-display font-semibold text-zinc-900 mb-2">{pkg.name}</h3>
                <p className="text-zinc-600 text-sm h-10">{pkg.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-5xl font-display font-bold text-zinc-900">${pkg.price}</span>
                {pkg.price !== "300+" && <span className="text-zinc-500 ml-2">/project</span>}
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-zinc-700">
                    <Check className={`w-5 h-5 shrink-0 ${pkg.popular ? "text-emerald-500" : "text-zinc-400"}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`w-full py-4 rounded-xl text-center font-medium transition-colors ${
                  pkg.popular 
                    ? "bg-emerald-500 text-white hover:bg-emerald-600" 
                    : "bg-zinc-900 text-white hover:bg-zinc-800"
                }`}
              >
                Book Consultation
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
