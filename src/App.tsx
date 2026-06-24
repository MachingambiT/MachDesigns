/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-emerald-500/30">
      {/* Simple Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight text-zinc-900">
            MachDesigns<span className="text-emerald-500">.</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-zinc-900 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-white hover:bg-zinc-800 transition-colors shadow-sm">
            Book a Call
          </a>
        </div>
      </header>

      <Hero />
      <Services />
      <div id="portfolio">
        <Portfolio />
      </div>
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200 text-center text-sm text-zinc-500 bg-white">
        <p>&copy; {new Date().getFullYear()} MachDesigns. All rights reserved.</p>
      </footer>
    </main>
  );
}

