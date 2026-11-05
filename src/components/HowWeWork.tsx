import React from 'react';
import { TIMELINE_STEPS, getWhatsAppUrl } from '../constants/company';
import { MessageSquare, ClipboardCheck, FileText, Wrench, ArrowRight } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-amber-400" />;
      case 1:
        return <ClipboardCheck className="w-5 h-5 text-amber-400" />;
      case 2:
        return <FileText className="w-5 h-5 text-amber-400" />;
      case 3:
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <MessageSquare className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="como-trabalhamos" className="py-24 bg-[#050B1F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Transparência do Início ao Fim
          </span>
          <h2 className="font-condensed font-extrabold italic text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mt-2">
            Como Trabalhamos
          </h2>
          <p className="text-slate-300 text-base mt-3">
            Fluxo simplificado e sem burocracia para você resolver a tecnologia e a segurança do seu patrimônio com agilidade.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {TIMELINE_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative flex flex-col rounded-2xl bg-gradient-to-b from-[#0A1A3F] to-[#071330] p-6 border border-blue-900/50 hover:border-amber-400/50 transition-all duration-300 group shadow-lg"
            >
              {/* Top Step Number and Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#050B1F] border border-amber-400/40 flex items-center justify-center group-hover:border-amber-400 group-hover:scale-105 transition-all">
                  {getStepIcon(idx)}
                </div>
                <span className="font-condensed font-extrabold text-3xl text-amber-400/40 group-hover:text-amber-400 transition-colors">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-condensed font-bold text-xl text-white uppercase mb-2 group-hover:text-amber-300 transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                {step.description}
              </p>

              {/* Timeframe Pill */}
              <div className="pt-3 border-t border-blue-900/40 flex items-center justify-between text-xs">
                <span className="text-slate-400">Tempo estimado:</span>
                <span className="font-semibold text-amber-400">{step.timeframe}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Action Banner: Free Quote */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-blue-950/80 via-[#0A1A3F] to-blue-950/80 border border-amber-400/30 p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h4 className="font-condensed font-bold text-xl text-white uppercase">
              Deseja um Orçamento Gratuito e sem compromisso?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Envie as informações do seu projeto ou necessidade e receba uma cotação detalhada sem custo.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Olá! Gostaria de solicitar um orçamento gratuito e sem compromisso com a LT Tecnologia.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all active:scale-95 whitespace-nowrap"
          >
            <span>Pedir Orçamento Gratuito</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
