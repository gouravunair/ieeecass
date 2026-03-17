'use client';

import { NavBarDemo } from "@/components/navbar-demo";
import ScrollSequenceHero from "@/components/blocks/scroll-sequence-hero";
import { Footer } from "@/components/ui/footer-taped-design";
import Image from "next/image";
import { Users, Calendar, Award, BookOpen, ArrowRight, ShieldCheck, Mail, MapPin, GraduationCap, ArrowUpRight } from 'lucide-react';
import Link from "next/link";

export default function Home() {
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
    <div className="flex min-h-screen flex-col items-center bg-background font-sans selection:bg-green-600 selection:text-white">
      <NavBarDemo />

      {/* Home / Hero Section */}
      <section id="home" className="w-full">
        <ScrollSequenceHero
          frameCount={50}
          imagePath={(i) => `/sequence/ffout${String(i).padStart(3, '0')}.gif`}
          title="CASS KERALA"
          subtitle="Innovation and Reality"
        />
      </section>

      {/* Main Content Sections */}
      <main className="w-full max-w-7xl mx-auto py-12 md:py-24 px-6 bg-white dark:bg-neutral-950 rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-10 relative z-40 border-t border-white/10 shadow-2xl">
        
        {/* About Section */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-40 pt-16">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-green-600 animate-ping" />
              IEEE Circuits & Systems Society
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground dark:text-neutral-50 tracking-tighter leading-[1.1]">
              Leading the <span className="text-green-600">Analog & Digital</span> Revolution.
            </h2>
            <p className="text-base md:text-xl text-neutral-500 leading-relaxed max-w-xl font-medium">
              The IEEE CASS Kerala Chapter serves as a catalyst for technical excellence, providing researchers and students with a platform to pioneer next-gen integrated circuits.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-3">
                <h3 className="text-xl font-bold flex items-center gap-2 text-foreground dark:text-neutral-50">
                  <Award className="w-5 h-5 text-green-600" /> Vision
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-medium">
                  To be the global leader in advancing Circuits and Systems for the benefit of humanity.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold flex items-center gap-2 text-foreground dark:text-neutral-50">
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
            <div className="relative h-[300px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl">
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

        {/* Categories Section */}
        <section className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="#events" className="group p-10 bg-white dark:bg-neutral-900 rounded-[3rem] border border-neutral-200 dark:border-neutral-800 hover:bg-black dark:hover:bg-white transition-all duration-500">
              <Calendar className="w-10 h-10 mb-6 text-green-600" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white dark:group-hover:text-black">Explore Events</h3>
              <p className="text-neutral-500 mb-8 font-medium">Workshops, talk series, and design challenges.</p>
              <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform group-hover:text-white dark:group-hover:text-black" />
            </Link>

            <Link href="#leadership" className="group p-10 bg-white dark:bg-neutral-900 rounded-[3rem] border border-neutral-200 dark:border-neutral-800 hover:bg-green-600 dark:hover:bg-green-600 transition-all duration-500 hover:scale-[1.02] active:scale-95 cursor-pointer">
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

        {/* Events Section */}
        <section id="events" className="mb-40 pt-24 prose prose-neutral dark:prose-invert max-w-none">
          <div className="mb-24 animate-in fade-in slide-in-from-left-8 duration-700">
            <span className="text-green-600 font-bold uppercase tracking-widest text-xs">Knowledge Sharing</span>
            <h2 className="text-4xl md:text-7xl font-black text-foreground mb-6 tracking-tighter !mt-0">
              Chapter <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">Events</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl leading-relaxed font-medium !text-xl">
              From state-wide design challenges to deep-dive technical workshops, we bridge the gap between theory and industry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 not-prose">
            {events.map((event, i) => (
              <div key={i} className="group relative flex flex-col lg:flex-row gap-12 items-center p-8 rounded-[3rem] bg-white border border-neutral-200 hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
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

                  <h3 className="text-2xl md:text-4xl font-extrabold text-foreground leading-tight group-hover:text-green-600 transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-lg text-neutral-400 leading-relaxed font-medium">
                    {event.desc}
                  </p>

                  <div className="flex flex-wrap gap-8 py-6 border-y border-neutral-100 dark:border-neutral-800">
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
                    <button className="flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full font-bold hover:bg-green-600 hover:text-white transition-all group/btn shadow-lg">
                      Get Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="mb-40 pt-24 prose prose-neutral dark:prose-invert max-w-none">
          <div className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-4xl md:text-7xl font-black text-foreground mb-6 tracking-tight !mt-0">
              Leadership <span className="text-green-600">Team</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl leading-relaxed font-medium !text-xl">
              Leading the charge in circuits and systems education, our Executive Committee brings together industry veterans and academic pioneers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 not-prose">
            {leaders.map((leader, i) => (
              <div
                key={i}
                className="group relative flex flex-col p-1 rounded-[2.5rem] bg-white border border-neutral-200 hover:border-green-600 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2"
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
                    <h4 className="text-2xl font-bold text-foreground tracking-tight group-hover:text-green-600 transition-colors">
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

                  <div className="flex border-t border-neutral-100 dark:border-neutral-800 pt-6 gap-4">
                    <a href="#" className="p-3 bg-neutral-100 rounded-2xl hover:bg-green-600 hover:text-white transition-all">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-3 bg-neutral-100 rounded-2xl hover:bg-green-600 hover:text-white transition-all">
                      <MapPin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chapters Section */}
        <section id="chapters" className="mb-40 pt-24 prose prose-neutral dark:prose-invert max-w-none">
          <div className="mb-24 text-center animate-in fade-in zoom-in duration-1000">
            <h2 className="text-4xl md:text-7xl font-black text-foreground mb-8 tracking-tighter !mt-0">
              Student Branch <span className="text-green-600">Chapters</span>
            </h2>
            <p className="text-neutral-400 max-w-3xl mx-auto leading-relaxed font-medium !text-xl">
              Building a localized ecosystem of circuits and systems enthusiasts. We currently support over {branches.length} premier institutions across Kerala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 not-prose">
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
          <div className="mt-32 relative group rounded-[4rem] overflow-hidden shadow-2xl shadow-green-600/10 not-prose">
            <div className="absolute inset-0 bg-green-600 group-hover:bg-green-700 transition-colors duration-700" />
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl transition-all group-hover:scale-125 duration-1000" />

            <div className="relative p-16 md:p-24 text-center">
              <GraduationCap className="w-16 h-16 text-white/40 mx-auto mb-8 animate-bounce" />
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Form a Chapter.</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-medium">
                Bring world-class CASS resources, funding, and mentorship to your college. Our team will guide you through the petition process.
              </p>
              <button className="px-12 py-5 bg-white text-green-600 rounded-full font-black text-lg hover:shadow-3xl hover:scale-105 transition-all">
                View Guidelines
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
