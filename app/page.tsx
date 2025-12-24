"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scale, Shield, Users, BookOpen, ArrowRight, Phone, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const serifFont = "font-serif"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-slate-900 font-sans selection:bg-[#1E3A8A]/30">
      
      {/* Top Bar */}
      <div className="bg-[#0F172A] text-slate-400 text-xs py-2 px-6 hidden md:block border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone className="w-3 h-3" /> +852 2345 6789</span>
            <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> Mon - Fri: 9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex gap-4">
             <Link href="#" className="hover:text-white transition">Client Portal</Link>
             <Link href="#" className="hover:text-white transition">Careers</Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-[#0F172A] text-[#D4AF37] flex items-center justify-center rounded-sm">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <span className={cn("text-2xl font-bold tracking-tight text-[#0F172A] leading-none block", serifFont)}>
                Aurelius & Partners
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Est. 1985</span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-[#0F172A] uppercase tracking-wider">
            {['Practice Areas', 'Attorneys', 'Insights', 'Contact'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#D4AF37] transition-colors relative group py-2">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex bg-[#D4AF37] hover:bg-[#B5952F] text-white px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-widest transition"
          >
            Consultation
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#1E293B] to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
            <h1 className={cn("text-5xl md:text-7xl font-bold text-white mb-6 leading-tight", serifFont)}>
              Justice served with <br/>
              <span className="text-[#D4AF37] italic">unwavering integrity.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed font-light">
              We provide world-class legal representation for corporations and individuals facing complex litigation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#0F172A] px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-slate-100 transition flex items-center justify-center gap-3">
                Our Practice Areas <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-white/5 transition">
                Meet the Team
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:block relative h-[600px] w-full bg-slate-800 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
          >
             <div className="absolute inset-0 bg-[#0F172A] flex items-center justify-center text-white/20 font-serif text-4xl">
               [Office Interior Image]
             </div>
             <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#0F172A] to-transparent">
                <div className="text-[#D4AF37] text-lg font-serif italic">&quot;Excellence is not an act, but a habit.&quot;</div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Strip */}
      <section className="bg-[#D4AF37] py-12">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-[#0F172A]">
          {[
            { label: "Years of Experience", value: "35+" },
            { label: "Cases Won", value: "98%" },
            { label: "Attorneys", value: "40+" },
            { label: "Recovered for Clients", value: "$500M+" }
          ].map((stat, i) => (
            <div key={i} className="border-r border-[#0F172A]/10 last:border-0">
              <div className={cn("text-4xl md:text-5xl font-bold mb-2", serifFont)}>{stat.value}</div>
              <div className="text-sm font-bold uppercase tracking-wider opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
            <h2 className={cn("text-4xl md:text-5xl font-bold text-[#0F172A] mb-6", serifFont)}>Comprehensive Legal Solutions</h2>
            <p className="text-slate-600 text-lg">We specialize in high-stakes litigation and complex corporate matters.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Corporate Litigation", desc: "Defending business interests in complex commercial disputes and arbitration." },
              { icon: Users, title: "Family Law", desc: "Compassionate representation for divorce, custody, and estate planning matters." },
              { icon: Scale, title: "Criminal Defense", desc: "Aggressive defense strategies for federal and state criminal charges." },
              { icon: BookOpen, title: "Intellectual Property", desc: "Protecting your innovations through patents, trademarks, and copyright law." },
              { icon: MapPin, title: "Real Estate", desc: "Navigating commercial and residential property transactions and zoning laws." },
              { icon: Clock, title: "Employment Law", desc: "Representing both employers and employees in workplace dispute resolution." }
            ].map((area, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 bg-[#F9F8F6] hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-white border border-slate-200 flex items-center justify-center text-[#0F172A] mb-6 group-hover:bg-[#0F172A] group-hover:text-[#D4AF37] transition-colors">
                  <area.icon className="w-7 h-7" />
                </div>
                <h3 className={cn("text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#D4AF37] transition-colors", serifFont)}>{area.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{area.desc}</p>
                <Link href="#" className="text-sm font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2 group-hover:gap-4 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1E293B]/50 skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className={cn("text-4xl font-bold mb-8", serifFont)}>Client Success Stories</h2>
               <div className="space-y-8">
                 <blockquote className="border-l-4 border-[#D4AF37] pl-6 py-2 italic text-xl text-slate-300">
                   &quot;Aurelius & Partners handled our merger with absolute precision. Their attention to detail saved us millions in potential liability.&quot;
                 </blockquote>
                 <div>
                   <div className="font-bold text-[#D4AF37]">James Sterling</div>
                   <div className="text-sm text-slate-500">CEO, Sterling Logistics</div>
                 </div>
               </div>
             </div>
             
             <div className="bg-white text-[#0F172A] p-10 shadow-2xl rounded-sm">
               <h3 className={cn("text-3xl font-bold mb-2", serifFont)}>Request Consultation</h3>
               <p className="text-slate-500 mb-8">Case evaluations are confidential and free of charge.</p>
               <form className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                   <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-[#F9F8F6] border-b-2 border-slate-200 focus:border-[#D4AF37] outline-none transition" />
                   <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-[#F9F8F6] border-b-2 border-slate-200 focus:border-[#D4AF37] outline-none transition" />
                 </div>
                 <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-[#F9F8F6] border-b-2 border-slate-200 focus:border-[#D4AF37] outline-none transition" />
                 <select className="w-full px-4 py-3 bg-[#F9F8F6] border-b-2 border-slate-200 focus:border-[#D4AF37] outline-none transition text-slate-600">
                   <option>Select Practice Area</option>
                   <option>Corporate Litigation</option>
                   <option>Family Law</option>
                 </select>
                 <textarea placeholder="Brief details of your case..." rows={4} className="w-full px-4 py-3 bg-[#F9F8F6] border-b-2 border-slate-200 focus:border-[#D4AF37] outline-none transition"></textarea>
                 <button className="w-full bg-[#0F172A] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#1E293B] transition">
                   Submit Request
                 </button>
               </form>
             </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0F1C] text-slate-500 py-16 border-t border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">
          <div>
            <div className={cn("text-2xl font-bold text-white mb-6", serifFont)}>Aurelius & Partners</div>
            <p className="mb-6 leading-relaxed">Defending your rights with over 35 years of legal excellence. Licensed in Hong Kong, London, and New York.</p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Office</h4>
            <p>Level 45, Finance Centre</p>
            <p>8 Finance Street, Central</p>
            <p>Hong Kong</p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contact</h4>
            <p>info@aurelius.legal</p>
            <p>+852 2345 6789</p>
            <p>Fax: +852 2345 6790</p>
          </div>
          <div>
             <h4 className="text-white font-bold uppercase tracking-widest mb-6">Legal</h4>
             <ul className="space-y-2">
               <li><Link href="#" className="hover:text-[#D4AF37]">Privacy Policy</Link></li>
               <li><Link href="#" className="hover:text-[#D4AF37]">Terms of Service</Link></li>
               <li><Link href="#" className="hover:text-[#D4AF37]">Disclaimer</Link></li>
             </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 pt-8 mt-8 border-t border-white/5 text-center text-xs">
          © 2024 KainuoTech Demo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
