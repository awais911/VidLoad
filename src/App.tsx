import { useState, useEffect } from 'react';
import { Download, Play, Zap, Shield, Github } from 'lucide-react';

export default function App() {
  const [location, setLocation] = useState('your region');
  const [visitorCount] = useState(1045);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city && data.country_name) {
          setLocation(`${data.city}, ${data.country_name}`);
        }
      })
      .catch((err) => {
        console.error("Could not fetch location", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-neutral-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-neutral-50 flex items-center justify-center">
            <Download className="w-5 h-5 text-neutral-950" />
          </div>
          <span className="text-xl font-bold font-display tracking-tight">VidLoad</span>
        </div>
        <button 
          id="header-download-btn"
          className="px-5 py-2 text-sm font-semibold text-neutral-950 bg-neutral-50 rounded-full hover:bg-neutral-200 active:scale-95 transition-all"
        >
          Download
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-20 pb-16 flex flex-col items-center text-center">
        {/* Hero Section */}
        <div className="max-w-3xl flex flex-col items-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-neutral-50 leading-[1.1] mb-6">
            The ultimate video downloader.
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-xl leading-relaxed">
            Download your favorite videos in full resolution. No watermarks, no limits. Background play and Shorts support built-in.
          </p>

          <button 
            id="hero-download-btn"
            className="flex items-center gap-3 px-8 py-4 bg-neutral-50 text-neutral-950 rounded-full font-semibold text-lg hover:bg-neutral-200 active:scale-95 transition-all mb-8 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)]"
          >
            <Download className="w-5 h-5" />
            Official APK Download
          </button>

          {/* Live Visitor & Location Counter */}
          <div 
            id="visitor-counter"
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-900/50 border border-neutral-800/50 text-sm text-neutral-400"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>You are visitor #{visitorCount.toLocaleString()} from {location}</span>
          </div>
        </div>

        {/* Ad Slot 1 (Banner) */}
        <div 
          id="ad-slot-banner"
          className="w-full max-w-3xl h-24 sm:h-32 mb-24 border border-dashed border-neutral-800 rounded-2xl flex items-center justify-center bg-neutral-900/20"
        >
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-neutral-600">
            Ad Placement (Banner)
          </span>
        </div>

        {/* Features Section */}
        <div className="w-full grid sm:grid-cols-3 gap-6 mb-24 text-left">
          {/* Card 1 */}
          <div id="feature-ad-free" className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/50 flex flex-col items-start">
            <div className="p-3 bg-neutral-800 rounded-2xl mb-6">
              <Shield className="w-6 h-6 text-neutral-50" />
            </div>
            <h3 className="text-xl font-semibold font-display tracking-tight mb-3">Ad-Free Experience</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Enjoy your downloads and playback without intrusive popups, banners, or hidden trackers ruining the flow.
            </p>
          </div>
          {/* Card 2 */}
          <div id="feature-background" className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/50 flex flex-col items-start">
            <div className="p-3 bg-neutral-800 rounded-2xl mb-6">
              <Play className="w-6 h-6 text-neutral-50" />
            </div>
            <h3 className="text-xl font-semibold font-display tracking-tight mb-3">Background Play</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Listen to your downloaded videos, music, and podcasts while seamlessly using other applications.
            </p>
          </div>
          {/* Card 3 */}
          <div id="feature-shorts" className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/50 flex flex-col items-start">
            <div className="p-3 bg-neutral-800 rounded-2xl mb-6">
              <Zap className="w-6 h-6 text-neutral-50" />
            </div>
            <h3 className="text-xl font-semibold font-display tracking-tight mb-3">Shorts Downloader</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Instantly grab vertical short-form content in the maximum available quality with a single tap.
            </p>
          </div>
        </div>

        {/* Ad Slot 2 (Square) */}
        <div 
          id="ad-slot-square"
          className="w-full max-w-[300px] h-[250px] mb-12 mx-auto border border-dashed border-neutral-800 rounded-2xl flex items-center justify-center bg-neutral-900/20"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-neutral-600">
            Ad Placement (Square)
          </span>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900/80 py-10 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="font-display font-medium text-neutral-400 tracking-tight">VidLoad</span>
            <span>&copy; {new Date().getFullYear()} VidLoad Inc.</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
