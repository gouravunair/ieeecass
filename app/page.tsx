'use client';

import { NavBarDemo } from "@/components/navbar-demo";
import ScrollSequenceHero from "@/components/blocks/scroll-sequence-hero";
import { Footer } from "@/components/ui/footer-taped-design";
import Image from "next/image";
import { Users, Calendar, Award, BookOpen, ArrowRight } from 'lucide-react';
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#040505] font-sans selection:bg-green-600 selection:text-white">
      <NavBarDemo />

      <ScrollSequenceHero
        frameCount={50}
        imagePath={(i) => `/sequence/ffout${String(i).padStart(3, '0')}.gif`}
        title="CASS KERALA"
        subtitle="Innovation and Reality"
      >
        <div className="max-w-7xl mx-auto py-24 px-6 bg-white dark:bg-neutral-950 rounded-t-[4rem] -mt-10 relative z-40 border-t border-white/10">

          {/* Main Info Section */}
          <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-full text-xs font-black uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-green-600 animate-ping" />
                IEEE Circuits & Systems Society
              </div>
              <h2 className="text-6xl font-black text-neutral-900 dark:text-neutral-50 tracking-tighter leading-[1.1]">
                Leading the <span className="text-green-600">Analog & Digital</span> Revolution.
              </h2>
              <p className="text-xl text-neutral-500 leading-relaxed max-w-xl font-medium">
                The IEEE CASS Kerala Chapter serves as a catalyst for technical excellence, providing researchers and students with a platform to pioneer next-gen integrated circuits.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900 dark:text-neutral-50">
                    <Award className="w-5 h-5 text-green-600" /> Vision
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-medium">
                    To be the global leader in advancing Circuits and Systems for the benefit of humanity.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900 dark:text-neutral-50">
                    <BookOpen className="w-5 h-5 text-green-600" /> Mission
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-medium">
                    Fostering a technically diverse community that advances innovation in CASS technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-green-600/10 rounded-[3rem] blur-3xl group-hover:bg-green-600/20 transition-all duration-700" />
              <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl">
                <Image
                  src="https://cas.ieeekerala.org/events/casif.jpg"
                  alt="CASIF Forum"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>
            </div>
          </section>

          {/* Quick Links Section */}
          <section className="mb-40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/events" className="group p-10 bg-neutral-50 dark:bg-neutral-900 rounded-[3rem] border border-neutral-200 dark:border-neutral-800 hover:bg-black dark:hover:bg-white transition-all duration-500">
                <Calendar className="w-10 h-10 mb-6 text-green-600" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white dark:group-hover:text-black">Explore Events</h3>
                <p className="text-neutral-500 mb-8 font-medium">Workshops, talk series, and design challenges.</p>
                <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform group-hover:text-white dark:group-hover:text-black" />
              </Link>

              <Link href="/leadership" className="group p-10 bg-neutral-50 dark:bg-neutral-900 rounded-[3rem] border border-neutral-200 dark:border-neutral-800 hover:bg-green-600 dark:hover:bg-green-600 transition-all duration-500 hover:scale-[1.02] active:scale-95 cursor-pointer">
                <Users className="w-10 h-10 mb-6 text-green-600 group-hover:text-white" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Meet our Team</h3>
                <p className="text-neutral-500 mb-8 font-medium group-hover:text-white/80 transition-colors">The experts leading the Kerala Section.</p>
                <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform group-hover:text-white" />
              </Link>

              <div className="p-10 bg-green-600 rounded-[3rem] text-white flex flex-col justify-between items-start shadow-xl shadow-green-600/20">
                <div>
                  <h3 className="text-4xl font-black mb-4 leading-tight">Join the Community.</h3>
                  <p className="text-white/80 font-medium">Become a member of IEEE CASS and unlock global opportunities.</p>
                </div>
                <a 
                  href="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMCAS004&refProd=MEMCAS004" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 px-12 py-4 bg-white text-green-600 rounded-full font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-lg text-center"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </section>

          {/* Stats / Impact Section */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-24 border-y border-neutral-100 dark:border-neutral-800 text-center">
            <div>
              <p className="text-5xl font-black text-neutral-900 dark:text-neutral-50 mb-2 tracking-tighter">15+</p>
              <p className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em]">Student Branches</p>
            </div>
            <div>
              <p className="text-5xl font-black text-neutral-900 dark:text-neutral-50 mb-2 tracking-tighter">200+</p>
              <p className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em]">Active Members</p>
            </div>
            <div>
              <p className="text-5xl font-black text-neutral-900 dark:text-neutral-50 mb-2 tracking-tighter">12</p>
              <p className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em]">Expert Talks / Yr</p>
            </div>
            <div>
              <p className="text-5xl font-black text-neutral-900 dark:text-neutral-50 mb-2 tracking-tighter">3</p>
              <p className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em]">Design Challenges</p>
            </div>
          </section>

          <Footer />
        </div>
      </ScrollSequenceHero>
    </div>
  );
}
