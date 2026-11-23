import React, { useState } from 'react';
import { studioConfig } from '../data/studioData';
import { Calendar, MapPin, Clock, Star, ArrowDown } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const [spot, setSpot] = useState({ x: 70, y: 30 });

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setSpot({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  const headline = ['Beleza', 'bem', 'feita', 'não', 'é', 'sorte,'];

  return (
    <section
      onMouseMove={handleMove}
      className="grain relative overflow-hidden -mt-20 pt-28 pb-16 md:pt-36 md:pb-24"
      style={{ background: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, rgba(194,167,111,.18), transparent 60%), linear-gradient(180deg,#f4e3de 0%,#f8eeea 50%,#fbf6f3 82%)` }}
    >
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blush/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Texto */}
        <div className="lg:col-span-7">
          <div className="word-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-brand-200 text-brand-800 text-xs font-semibold uppercase tracking-wider" style={{ animationDelay: '0ms' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <span>Studio de beleza em {studioConfig.neighborhood}</span>
          </div>

          <h1 className="mt-6 font-display text-[2.6rem] sm:text-6xl lg:text-[4.4rem] leading-[1.04] text-brand-950 tracking-tight">
            {headline.map((w, i) => (
              <span key={w} className="word-in mr-[0.25em]" style={{ animationDelay: `${120 + i * 100}ms` }}>{w}</span>
            ))}
            <span className="word-in italic text-champagne-dark" style={{ animationDelay: '820ms' }}>é técnica.</span>
          </h1>

          <p className="word-in mt-6 text-base sm:text-lg text-brand-900/75 max-w-xl leading-relaxed" style={{ animationDelay: '950ms' }}>
            {studioConfig.subtitle}
          </p>

          <div className="word-in mt-8 flex flex-col sm:flex-row gap-3 sm:items-center" style={{ animationDelay: '1050ms' }}>
            <button
              onClick={() => onOpenBooking(null)}
              className="shine group flex items-center justify-center gap-3 bg-brand-800 hover:bg-brand-900 text-white px-8 py-4 rounded-full text-base font-medium shadow-xl shadow-brand-900/20 hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-5 h-5 group-hover:rotate-[-8deg] transition-transform" />
              <span>Agendar meu horário</span>
            </button>
            <a href="#servicos" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-brand-900 text-sm font-semibold border border-brand-300 bg-white/50 hover:bg-white transition-colors">
              Ver valores
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          <div className="word-in mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-brand-800" style={{ animationDelay: '1150ms' }}>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-champagne-dark" />{studioConfig.workingHoursShort}</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-champagne-dark" />{studioConfig.addressShort}</span>
          </div>
        </div>

        {/* Fotos */}
        <div className="lg:col-span-5 relative h-[420px] sm:h-[480px]">
          <div className="word-in absolute right-0 top-0 w-[68%]" style={{ animationDelay: '300ms' }}>
            <div className="float-slow"><div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-900/20 border-[6px] border-white rotate-[3deg]">
              <img src="/images/cabelo-nanokeratin.webp" alt="Cabelo liso com Nanokeratin no studio Dona Beauty" className="w-full h-72 sm:h-80 object-cover object-center" />
            </div></div>
          </div>
          <div className="word-in absolute left-0 bottom-0 w-[58%]" style={{ animationDelay: '520ms' }}>
            <div className="float-slower"><div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-900/20 border-[6px] border-white -rotate-[4deg]">
              <img src="/images/unhas-milky.webp" alt="Unhas em gel nude leitoso" className="w-full h-60 sm:h-64 object-cover" />
            </div></div>
          </div>
          <div className="word-in absolute right-2 bottom-6 sm:bottom-10 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-brand-100 flex items-center gap-3" style={{ animationDelay: '900ms' }}>
            <div className="w-10 h-10 rounded-full bg-champagne-light/60 flex items-center justify-center">
              <Star className="w-5 h-5 text-champagne-dark fill-champagne" />
            </div>
            <div>
              <p className="text-xs font-bold text-brand-950">Nota 4,7 no Google</p>
              <p className="text-[11px] text-brand-700">13 mil seguidoras no Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
