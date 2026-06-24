import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, CheckCircle, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative border-t border-zinc-200 bg-zinc-50">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column: Form */}
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-zinc-900 mb-6">Let's build something exceptional.</h2>
            <p className="text-zinc-600 text-lg mb-12">
              Book your initial consultation today. Whether you need a simple landing page or an enterprise solution, I'm ready to help.
            </p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-600">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-zinc-900 outline-none transition-all shadow-sm"
                    placeholder="Tendai Moyo"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-600">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-zinc-900 outline-none transition-all shadow-sm"
                    placeholder="tendai@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-600">Service of Interest</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-zinc-900 outline-none transition-all appearance-none shadow-sm">
                  <option>Essential Package ($80)</option>
                  <option>Professional Package ($120)</option>
                  <option>Enterprise Package ($300+)</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-600">Project Details</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-zinc-900 outline-none transition-all resize-none shadow-sm"
                  placeholder="Tell me a bit about your goals..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={formStatus !== "idle"}
                className="w-full flex items-center justify-center py-4 rounded-xl bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === "idle" && "Request Consultation"}
                {formStatus === "submitting" && "Sending Request..."}
                {formStatus === "success" && (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Request Sent
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Right Column: Contact Info */}
          <div className="lg:pl-12 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50"
            >
              <h3 className="text-2xl font-display font-medium text-zinc-900 mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-zinc-600" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">T. Machingambi</p>
                    <div className="flex items-center gap-3 mb-1">
                      <a href="tel:+263718820024" className="text-zinc-900 font-medium hover:text-emerald-600 transition-colors">+263 71 882 0024</a>
                      <a href="https://wa.me/263718820024" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-600 transition-colors" title="Message on WhatsApp">
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <a href="tel:+263776734907" className="text-zinc-900 font-medium hover:text-emerald-600 transition-colors">+263 77 673 4907</a>
                      <a href="https://wa.me/263776734907" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-600 transition-colors" title="Message on WhatsApp">
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-zinc-100">
                      <p className="text-sm text-zinc-500 mb-1">A. Mpangeri</p>
                      <div className="flex items-center gap-3">
                        <a href="tel:+263715772159" className="text-zinc-900 font-medium hover:text-emerald-600 transition-colors">+263 71 577 2159</a>
                        <a href="https://wa.me/263715772159" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-600 transition-colors" title="Message on WhatsApp">
                          <MessageSquare className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-zinc-600" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Harare Offices</p>
                    <p className="text-zinc-900 font-medium leading-relaxed">
                      Crn Robert Mugabe and Leopold<br />
                      Takawira Karimapondo<br />
                      First Floor G53
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-zinc-600" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Email</p>
                    <a href="mailto:tatendm12@gmail.com" className="text-zinc-900 font-medium hover:text-emerald-600 transition-colors">tatendm12@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-8 pt-8 border-t border-zinc-100">
                <p className="text-sm text-zinc-500 mb-4">Location Map</p>
                <div className="w-full h-48 rounded-2xl overflow-hidden border border-zinc-200">
                  <iframe 
                    src="https://www.google.com/maps?q=Karimapondo,Corner+Robert+Mugabe+and+Leopold+Takawira,Harare,Zimbabwe&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
