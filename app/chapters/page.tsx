'use client';

import { NavBarDemo } from "@/components/navbar-demo";
import Image from "next/image";
import { GraduationCap, ArrowUpRight, Users, ArrowRight } from 'lucide-react';
import { Footer } from "@/components/ui/footer-taped-design";

export default function Chapters() {
    const branches = [
        {
            name: "CUSAT Kochi",
            advisor: "Dr. Tripti S Warrier",
            location: "Kochi",
            logo: "https://cas.ieeekerala.org/colleges/cusat.png"
        },
        {
            name: "NIT Calicut",
            advisor: "Dr. Bhuvan B",
            location: "Kozhikode",
            logo: "https://cas.ieeekerala.org/colleges/nitc.png"
        },
        {
            name: "Digital University Kerala",
            advisor: "Dr. Alex James",
            location: "Trivandrum",
            logo: "https://cas.ieeekerala.org/colleges/duk.png"
        },
        {
            name: "Model Engineering College",
            advisor: "Dr. Jagdeesh Kumar P",
            location: "Thrikkakara",
            logo: "https://cas.ieeekerala.org/colleges/model.png"
        },
        {
            name: "IIIT Kottayam",
            advisor: "TBA",
            location: "Kottayam",
            logo: "https://cas.ieeekerala.org/colleges/iitk.png"
        },
        {
            name: "IIST",
            advisor: "TBA",
            location: "Trivandrum",
            logo: "https://cas.ieeekerala.org/colleges/iist.png"
        },
        {
            name: "TKMCE",
            advisor: "TBA",
            location: "Kollam",
            logo: "https://cas.ieeekerala.org/colleges/tkm.png"
        }
    ];

    return (
        <div className="flex min-h-screen flex-col items-center bg-background font-sans">
            <NavBarDemo />

            <main className="w-full max-w-7xl py-32 px-6">
                <div className="mb-24 text-center animate-in fade-in zoom-in duration-1000">
                    <h1 className="text-7xl font-black text-foreground mb-8 tracking-tighter">
                        Student Branch <span className="text-green-600">Chapters</span>
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        Building a localized ecosystem of circuits and systems enthusiasts. We currently support over {branches.length} premier institutions across Kerala.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {branches.map((branch, i) => (
                        <div key={i} className="group relative p-10 rounded-[3rem] bg-white border border-neutral-100 hover:bg-neutral-50 transition-all duration-500 hover:shadow-2xl flex flex-col items-center text-center">
                            <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-5 h-5 text-green-600" />
                            </div>

                            <div className="relative w-24 h-24 mb-8 bg-neutral-50 rounded-3xl p-4 border border-neutral-100 shadow-sm transition-transform group-hover:scale-110 duration-500">
                                <Image
                                    src={branch.logo}
                                    alt={branch.name}
                                    fill
                                    className="object-contain p-2 transition-all duration-500"
                                    unoptimized
                                />
                            </div>

                            <h3 className="text-xl font-black text-foreground mb-6 leading-tight">
                                {branch.name}
                            </h3>

                            <div className="space-y-4 mt-auto">
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-[10px] uppercase font-black tracking-widest text-neutral-500">Advisor</span>
                                    <span className="text-sm font-bold text-neutral-600">{branch.advisor}</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-[10px] uppercase font-black tracking-widest text-neutral-500">Local Section</span>
                                    <span className="text-sm font-medium text-neutral-400">{branch.location}, Kerala</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-32 relative group rounded-[4rem] overflow-hidden shadow-2xl shadow-green-600/10">
                    <div className="absolute inset-0 bg-green-600 group-hover:bg-green-700 transition-colors duration-700" />
                    <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl transition-all group-hover:scale-125 duration-1000" />

                    <div className="relative p-16 md:p-24 text-center">
                        <GraduationCap className="w-16 h-16 text-white/40 mx-auto mb-8 animate-bounce" />
                        <h2 className="text-6xl font-black text-white mb-6 tracking-tight">Form a Chapter.</h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-medium">
                            Bring world-class CASS resources, funding, and mentorship to your college. Our team will guide you through the petition process.
                        </p>
                        <button className="px-12 py-5 bg-white text-green-600 rounded-full font-black text-lg hover:shadow-3xl hover:scale-105 transition-all">
                            View Guidelines
                        </button>
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    );
}
