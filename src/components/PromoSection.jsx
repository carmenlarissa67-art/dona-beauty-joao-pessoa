import React from 'react';
import { studioConfig } from '../data/studioData';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

// Combos Black November, no mesmo clima dos stories do studio:
// fundo escuro, título em serifa fina e o preço numa etiqueta areia.
const brl = (v) => `R$ ${v}`;

export default function PromoSection({ onSelectProcedure }) {
  const cat = studioConfig.categories.find((c) => c.promo);
  if (!cat) return null;

  const pick = (item) => onSelectProcedure({ ...item, category: cat.title, categoryId: cat.id, duration: item.duration || cat.duration });

  return (
    <section id="black" className="relative overflow-hidden bg-brand-950 text-brand-50 py-20 sm:py-28 scroll-mt-16">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(700px circle at 85% 0%, rgba(233,203,163,.14), transparent 60%), radial-gradient(500px circle at 0% 100%, rgba(242,220,215,.08), transparent 60%)' }} />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-sand">Só em novembro</p>
          <h2 className="mt-4 font-display font-normal uppercase text-5xl sm:text-6xl leading-[0.92] tracking-tight">
            Black<br />November
          </h2>
          <div className="mt-5 flex items-center gap-4 text-brand-200">
            <span className="h-px w-10 bg-brand-200/50" />
            <span className="text-xs uppercase tracking-[0.35em]">chegou no {studioConfig.name}</span>
          </div>
          <div className="mt-8 relative rounded-[1.75rem] overflow-hidden hidden lg:block">
            <img src={cat.image} alt="Cabelo feito no studio" className="w-full h-[22rem] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 to-transparent" />
          </div>
          <p className="mt-6 text-xs text-brand-200/80 leading-relaxed">
            Valores para cabelo médio. Mega e longo sob consulta. No cartão há acréscimo da taxa.
          </p>
        </Reveal>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {cat.items.map((item, i) => (
            <Reveal key={item.id} delay={i * 70}>
              <button
                onClick={() => pick(item)}
                className="group h-full w-full text-left flex flex-col justify-between gap-6 p-5 sm:p-6 rounded-3xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-sand/40 transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-serif text-xl sm:text-2xl leading-snug text-brand-50">{item.title}</span>
                  <ArrowUpRight className="w-5 h-5 shrink-0 text-sand/70 group-hover:text-sand group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="flex items-end gap-3">
                  <span className="inline-flex items-baseline gap-1.5 bg-sand text-brand-950 px-3.5 py-1.5 rounded-md font-display text-2xl leading-none">
                    <span className="text-sm">por</span>{brl(item.price)}
                  </span>
                  {item.oldPrice && (
                    <span className="text-xs uppercase tracking-[0.2em] text-brand-300 line-through decoration-sand/70 pb-1">de {brl(item.oldPrice)}</span>
                  )}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
