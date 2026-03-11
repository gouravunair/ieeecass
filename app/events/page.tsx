'use client';

import { NavBarDemo } from "@/components/navbar-demo";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Footer } from "@/components/ui/footer-taped-design";

export default function Events() {
    const events = [
        {
            title: "Analog IC Design Challenge",
            date: "Sept 20, 2025",
            location: "Statewide, Kerala",
            desc: "Our flagship design competition for UG/PG students to design robust analog circuits using industry-standard tools.",
            img: "https://cas.ieeekerala.org/events/panel.jpg",
            status: "Flagship",
            type: "Competition"
        },
        {
            title: "SoC Design using VEGA Processors",
            date: "July 26-27, 2025",
            location: "Hybrid (Online & C-DAC)",
            desc: "Intensive training on System-on-Chip design methodology using the indigenous VEGA RISC-V processors.",
            img: "https://cas.ieeekerala.org/events/soc.png",
            status: "Upcoming",
            type: "Workshop"
        },
        {
            title: "CASIF 2025: Innovation Forum",
            date: "Oct 12, 2025",
            location: "Trivandrum",
            desc: "A collaborative forum for researchers to pitch innovations in Circuits and Systems directly to industry leaders.",
            img: "https://cas.ieeekerala.org/events/casif.jpg",
            status: "Call for Ideas",
            type: "Conference"
        },
        {
            title: "Technical Expert Talk (TEC)",
            date: "Monthly Series",
            location: "Virtual",
            desc: "Engage with global experts on emerging trends in VLSI, IoT, and AI-driven hardware.",
            img: "https://cas.ieeekerala.org/events/tec.jpg",
            status: "Active",
            type: "Expert Talk"
        }
    ];

    return (
        <div className="flex min-h-screen flex-col items-center bg-[#040505] font-sans">
            <NavBarDemo />

            <main className="w-full max-w-7xl py-32 px-6">
                <div className="mb-24 animate-in fade-in slide-in-from-left-8 duration-700">
                    <span className="text-green-600 font-bold uppercase tracking-widest text-xs">Knowledge Sharing</span>
                    <h1 className="text-7xl font-black text-white mb-6 tracking-tighter">
                        Chapter <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">Events</span>
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed font-medium">
                        From state-wide design challenges to deep-dive technical workshops, we bridge the gap between theory and industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-16">
                    {events.map((event, i) => (
                        <div key={i} className="group relative flex flex-col lg:flex-row gap-12 items-center p-8 rounded-[3rem] bg-neutral-900 border border-neutral-800 hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
                            <div className="relative w-full lg:w-1/2 h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <Image
                                    src={event.img}
                                    alt={event.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    unoptimized
                                />
                                <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                                    {event.type}
                                </div>
                            </div>

                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                                    <span className="text-green-600 font-bold text-xs tracking-widest uppercase">{event.status}</span>
                                </div>

                                <h3 className="text-4xl font-extrabold text-white leading-tight group-hover:text-green-600 transition-colors">
                                    {event.title}
                                </h3>

                                <p className="text-lg text-neutral-400 leading-relaxed font-medium">
                                    {event.desc}
                                </p>

                                <div className="flex flex-wrap gap-8 py-6 border-y border-neutral-800">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-neutral-500" />
                                        <div>
                                            <p className="text-[10px] uppercase text-neutral-500 font-bold">When</p>
                                            <p className="text-sm font-bold text-neutral-300">{event.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-neutral-500" />
                                        <div>
                                            <p className="text-[10px] uppercase text-neutral-500 font-bold">Where</p>
                                            <p className="text-sm font-bold text-neutral-300">{event.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-green-600 hover:text-white transition-all group/btn shadow-lg">
                                        Get Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Footer />
            </main>
        </div>
    );
}
        </div >
    );
}
