'use client';

import { NavBarDemo } from "@/components/navbar-demo";
import Image from "next/image";
import { ShieldCheck, Mail, MapPin } from 'lucide-react';
import { Footer } from "@/components/ui/footer-taped-design";

export default function Leadership() {
    const leaders = [
        {
            name: "Mr Libin T.T",
            role: "Chair",
            desc: "Associate Director and Scientist 'F' at C-DAC",
            img: "https://cas.ieeekerala.org/peoples/lt.png"
        },
        {
            name: "Dr Jagdeesh Kumar P",
            role: "Vice Chair",
            desc: "Assistant Professor at Model Engineering College, Thrikkakara",
            img: "https://cas.ieeekerala.org/peoples/jk.png"
        },
        {
            name: "Dr Elizabeth George",
            role: "Secretary",
            desc: "Chief RF Solution Architect, XARK Technologies Pvt Ltd",
            img: "https://cas.ieeekerala.org/peoples/EG.jpeg"
        },
        {
            name: "Mohammed Shan",
            role: "Student Representative",
            desc: "Final Year B.Tech (ECE), CUSAT",
            img: "https://cas.ieeekerala.org/peoples/ms.JPG"
        },
        {
            name: "Lakshmi Dineshkumar",
            role: "EC Coordinator",
            desc: "B.Tech (ECE), Mar Athanasius College of Engineering",
            img: "https://cas.ieeekerala.org/peoples/ld.jpg"
        }
    ];

    return (
        <div className="flex min-h-screen flex-col items-center bg-[#040505] font-sans">
            <NavBarDemo />

            <main className="w-full max-w-7xl py-32 px-6">
                <div className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <h1 className="text-7xl font-black text-white mb-6 tracking-tight">
                        Leadership <span className="text-green-600 font-outline-2">Team</span>
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed font-medium">
                        Leading the charge in circuits and systems education, our Executive Committee brings together industry veterans and academic pioneers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leaders.map((leader, i) => (
                        <div
                            key={i}
                            className="group relative flex flex-col p-1 rounded-[2.5rem] bg-gradient-to-b from-neutral-900 to-[#040505] border border-neutral-800 hover:border-green-600 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            <div className="relative h-80 w-full overflow-hidden rounded-[2.2rem]">
                                <Image
                                    src={leader.img}
                                    alt={leader.name}
                                    fill
                                    className="object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </div>

                            <div className="p-8">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-2xl font-bold text-neutral-50 tracking-tight group-hover:text-green-600 transition-colors">
                                        {leader.name}
                                    </h4>
                                    <ShieldCheck className="w-5 h-5 text-green-600 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
                                </div>
                                <p className="text-green-600 font-black text-xs uppercase tracking-widest mb-4">
                                    {leader.role}
                                </p>
                                <p className="text-neutral-500 text-sm leading-relaxed mb-6 h-12 line-clamp-2 font-medium">
                                    {leader.desc}
                                </p>

                                <div className="flex border-t border-neutral-800 pt-6 gap-4">
                                    <a href="#" className="p-3 bg-neutral-900 rounded-2xl hover:bg-green-600 hover:text-white transition-all">
                                        <Mail className="w-4 h-4" />
                                    </a>
                                    <a href="#" className="p-3 bg-neutral-900 rounded-2xl hover:bg-green-600 hover:text-white transition-all">
                                        <MapPin className="w-4 h-4" />
                                    </a>
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
