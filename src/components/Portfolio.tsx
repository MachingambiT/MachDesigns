import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Aura Fintech",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Lumina Studio",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Nexus Architecture",
    category: "Corporate Portfolio",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Verve Healthcare",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
  }
];

export default function Portfolio() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-32 relative">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-zinc-900 mb-6">Selected Works</h2>
            <p className="text-zinc-600 text-lg">
              A collection of digital experiences designed to convert and leave a lasting impression.
            </p>
          </div>
          <button 
            onClick={() => setShowMore(!showMore)}
            className="hidden md:inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            {showMore ? "Hide Extra Projects" : "View All Projects"}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 mb-6">
                <div className="absolute inset-0 bg-zinc-900/5 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-medium text-zinc-900 mb-2">{project.title}</h3>
                  <p className="text-zinc-500">{project.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="col-span-full overflow-hidden"
            >
              <div className="py-12 px-6 rounded-2xl bg-zinc-100 border border-zinc-200 text-center mb-8">
                <h3 className="text-xl font-display font-medium text-zinc-900 mb-2">More Projects Coming Soon</h3>
                <p className="text-zinc-600">We are currently updating our extended portfolio. Please check back later!</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
