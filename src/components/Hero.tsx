import { motion } from "motion/react";
import AudioIntro from "./AudioIntro";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for new projects
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.1]"
          >
            Digital experiences that drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">conversion.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-600 mb-10 leading-relaxed max-w-2xl"
          >
            I design and build premium, highly-converting websites for forward-thinking brands. 
            From simple landing pages to enterprise deployments, crafted with pixel-perfect precision.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <a href="#services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
              View Packages
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <AudioIntro text="Hi, welcome to MachDesigns. I design and build premium, highly-converting websites. From simple 80 dollar websites with free hosting, to 300 dollar enterprise deployments. Let's elevate your brand." />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
