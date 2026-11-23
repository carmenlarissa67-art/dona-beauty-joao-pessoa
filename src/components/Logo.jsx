import React from 'react';

// Logo da Dona Beauty: "dona beauty" em serifa minúscula, dourado sobre o
// rosa claro do círculo do perfil do Instagram, com "studio de beleza" pequeno
// ao lado, como no selo original.
export default function Logo({ light = false }) {
  const gold = light ? '#d8c08a' : '#a88d55';
  const sub = light ? '#ecdad2' : '#715d54';
  return (
    <span className="inline-flex items-center gap-2.5 leading-none select-none" aria-label="Dona Beauty Studio de Beleza">
      <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex flex-col items-center justify-center shadow-sm" style={{ background: '#f2dcd7' }} aria-hidden="true">
        <span className="font-display font-medium text-[0.8rem] sm:text-[0.85rem] leading-[0.85] tracking-tight" style={{ color: '#a88d55' }}>dona</span>
        <span className="font-display font-medium text-[0.8rem] sm:text-[0.85rem] leading-[0.95] tracking-tight" style={{ color: '#a88d55' }}>beauty</span>
      </span>
      <span className="flex flex-col">
        <span className="font-display font-medium text-[1.35rem] sm:text-[1.5rem] leading-none tracking-tight" style={{ color: gold }}>dona beauty</span>
        <span className="mt-1 text-[0.55rem] sm:text-[0.6rem] font-semibold uppercase tracking-[0.32em]" style={{ color: sub }}>studio de beleza</span>
      </span>
    </span>
  );
}
