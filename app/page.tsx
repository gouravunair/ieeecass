import { NavBarDemo } from "@/components/navbar-demo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white dark:bg-black font-sans scroll-smooth">
      <NavBarDemo />

      {/* Hero Section */}
      <main className="w-full">
        <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          {/* Background Image Wrapper */}
          <div className="absolute inset-0 z-0">
            {/* Using the generated image from the workspace */}
            <img
              src="/ieee_cass_hero_banner.png"
              alt="IEEE CASS Hero"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          </div>

          <div className="relative z-10 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
              IEEE Circuits and Systems Society
              <span className="block text-primary text-green-500">Kerala Chapter</span>
            </h1>

            <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-12">
              Empowering innovation and excellence in the design of circuits and systems throughout the Kerala engineering community.
            </p>

            <a href="#events" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-all hover:-translate-y-1 shadow-xl">
              View Upcoming Events
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-12 relative inline-block">
            About IEEE CASS
            <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-600 rounded-full" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 group hover:shadow-2xl transition-all">
              <h3 className="text-xl font-bold mb-4 text-green-600">The Society</h3>
              <p className="text-neutral-500 leading-relaxed">
                The leading organization that promotes the advancement of the theory, analysis, design, tools, and implementation of circuits and systems.
              </p>
            </div>
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 group hover:shadow-2xl transition-all">
              <h3 className="text-xl font-bold mb-4 text-green-600">Our Vision</h3>
              <p className="text-neutral-500 leading-relaxed">
                To advance and promote Circuits and Systems knowledge, recognized for providing solutions to humanity's challenges.
              </p>
            </div>
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 group hover:shadow-2xl transition-all">
              <h3 className="text-xl font-bold mb-4 text-green-600">Our Mission</h3>
              <p className="text-neutral-500 leading-relaxed">
                To foster technological innovation and excellence in fundamentals, emerging directions, and applications.
              </p>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-32 bg-neutral-50 dark:bg-neutral-900 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-12">Chapter Events</h2>

            <h3 className="text-2xl font-bold mb-8 text-neutral-700 dark:text-neutral-300">Upcoming Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 rounded-3xl bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 relative overflow-hidden group">
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Registration Open</div>
                <h4 className="text-xl font-bold mb-2">National Workshop on VLSI</h4>
                <p className="text-neutral-400 mb-4 text-sm font-semibold">April 15-17, 2026</p>
                <p className="text-neutral-500 mb-6">Hands-on workshop on modern VLSI design flows and tools with industry experts.</p>
                <button className="text-green-600 font-bold hover:underline transition-all">Register Now →</button>
              </div>
              <div className="p-8 rounded-3xl bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 relative overflow-hidden group">
                <div className="absolute top-4 right-4 bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-bold px-3 py-1 rounded-full">Coming Soon</div>
                <h4 className="text-xl font-bold mb-2">Student Design Competition</h4>
                <p className="text-neutral-400 mb-4 text-sm font-semibold">May 12, 2026</p>
                <p className="text-neutral-500 mb-6">Showcase your innovative designs and compete for prestigious awards.</p>
                <button className="text-green-600 font-bold opacity-50 cursor-not-allowed">Stay Tuned</button>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-8 text-neutral-700 dark:text-neutral-300">Past Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white/50 dark:bg-black/50 border border-neutral-200 dark:border-neutral-800 group">
                <h4 className="text-xl font-bold mb-2 opacity-80">Distinguished Lecture Series</h4>
                <p className="text-neutral-400 mb-4 text-sm font-semibold">Jan 20, 2026</p>
                <p className="text-neutral-500">Dr. John Doe on "Future Trends in Analog Integrated Circuits".</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/50 dark:bg-black/50 border border-neutral-200 dark:border-neutral-800 group">
                <h4 className="text-xl font-bold mb-2 opacity-80">CASCON Kerala 2025</h4>
                <p className="text-neutral-400 mb-4 text-sm font-semibold">Nov 5-6, 2025</p>
                <p className="text-neutral-500">Annual conference of the CASS Kerala Chapter featuring research papers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-32 px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-16">Executive Committee</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Arun Kumar", role: "Chair", inst: "Amrita Vishwa Vidyapeetham" },
              { name: "Prof. Meera Nair", role: "Vice Chair", inst: "NIT Calicut" },
              { name: "Dr. Sreejith S.", role: "Secretary", inst: "CET Trivandrum" },
              { name: "Ms. Anjali P.", role: "Treasurer", inst: "GEC Trichur" }
            ].map((member, i) => (
              <div key={i} className="p-8 rounded-3xl border border-neutral-100 dark:border-neutral-900 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 bg-white dark:bg-black">
                <div className="w-24 h-24 bg-neutral-100 dark:bg-neutral-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-neutral-300">{(member.name.split(' ').slice(1)[0] || member.name[0])[0]}</span>
                </div>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">{member.name}</h4>
                <p className="text-green-600 text-sm font-bold mb-2">{member.role}</p>
                <p className="text-neutral-400 text-xs">{member.inst}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
            <p className="text-xl mb-12 opacity-90">Join the Kerala Chapter of the IEEE Circuits and Systems Society today.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <h4 className="font-bold mb-2">Email Us</h4>
                <p className="opacity-80 font-mono">circuitandsystemsociety@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Call Us</h4>
                <p className="opacity-80 font-mono">+91 77362 73307</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Location</h4>
                <p className="opacity-80">IEEE Kerala Section, TVM</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 border-t border-neutral-200 dark:border-neutral-800 text-center text-neutral-400 text-sm bg-white dark:bg-black">
        © 2026 IEEE CASS Kerala. All rights reserved.
        <div className="mt-4 flex justify-center gap-6 opacity-60">
          <a href="#" className="hover:text-green-600">LinkedIn</a>
          <a href="#" className="hover:text-green-600">Instagram</a>
          <a href="#" className="hover:text-green-600">Twitter</a>
        </div>
      </footer>
    </div>
  );
}
