import React from 'react';
import { DIFFERENTIALS } from '../constants/company';
import { Award, Handshake, Cog, CheckCircle2, Shield } from 'lucide-react';

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-[#071330] relative border-y border-blue-900/60">
      {/* Decorative Network Grid lines */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1E3A8A_1px,transparent_1px),linear-gradient(to_bottom,#1E3A8A_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Exact Horizontal Bar from the Flyer */}
        <div className="rounded-2xl bg-gradient-to-r from-[#050B1F] via-[#0A1A3F] to-[#050B1F] border border-amber-400/50 p-6 sm:p-8 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-amber-400/30 gap-6 md:gap-0">
            {/* 1. Qualidade Garantida */}
            <div className="flex items-center justify-center gap-4 px-4 py-2">
              <div className="w-14 h-14 rounded-full bg-[#050B1F] border-2 border-amber-400 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
                <Award className="w-7 h-7 text-amber-400 fill-amber-400/10 stroke-[2.2]" />
              </div>
              <div className="text-left">
                <span className="font-condensed font-extrabold text-xl sm:text-2xl text-white tracking-wide uppercase block">
                  QUALIDADE
                </span>
                <span className="font-condensed font-extrabold text-lg sm:text-xl text-amber-400 tracking-wide uppercase block">
                  GARANTIDA
                </span>
              </div>
            </div>

            {/* 2. Confiança em Cada Projeto */}
            <div className="flex items-center justify-center gap-4 px-4 py-2">
              <div className="w-14 h-14 rounded-full bg-[#050B1F] border-2 border-amber-400 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
                <Handshake className="w-7 h-7 text-amber-400 stroke-[2.2]" />
              </div>
              <div className="text-left">
                <span className="font-condensed font-extrabold text-xl sm:text-2xl text-white tracking-wide uppercase block">
                  CONFIANÇA
                </span>
                <span className="font-condensed font-extrabold text-lg sm:text-xl text-amber-400 tracking-wide uppercase block">
                  EM CADA PROJETO
                </span>
              </div>
            </div>

            {/* 3. Suporte Especializado */}
            <div className="flex items-center justify-center gap-4 px-4 py-2">
              <div className="w-14 h-14 rounded-full bg-[#050B1F] border-2 border-amber-400 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
                <Cog className="w-7 h-7 text-amber-400 stroke-[2.2]" />
              </div>
              <div className="text-left">
                <span className="font-condensed font-extrabold text-xl sm:text-2xl text-white tracking-wide uppercase block">
                  SUPORTE
                </span>
                <span className="font-condensed font-extrabold text-lg sm:text-xl text-amber-400 tracking-wide uppercase block">
                  ESPECIALIZADO
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Context Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DIFFERENTIALS.map((diff, idx) => (
            <div
              key={diff.id}
              className="relative rounded-2xl bg-gradient-to-b from-[#0A1A3F] to-[#050B1F] p-8 border border-amber-400/25 hover:border-amber-400/60 shadow-xl shadow-black/40 hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-amber-400 px-2.5 py-1 rounded bg-blue-950/80 border border-blue-800/50">
                    Pilar 0{idx + 1}
                  </span>
                  <Shield className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>

                <h3 className="font-condensed font-extrabold text-2xl text-white uppercase mb-3 group-hover:text-amber-400 transition-colors">
                  {diff.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {diff.description}
                </p>
              </div>

              {/* Verified Highlight */}
              <div className="pt-4 border-t border-blue-900/60 flex items-center gap-2 text-xs font-semibold text-amber-300/90">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{diff.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
