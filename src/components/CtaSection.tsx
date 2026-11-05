import React from 'react';
import { COMPANY, getWhatsAppUrl } from '../constants/company';
import { MessageCircle, Phone, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#050B1F] relative overflow-hidden">
      {/* Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-600/20 via-amber-500/15 to-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="rounded-3xl bg-gradient-to-b from-[#0A1A3F] via-[#071330] to-[#050B1F] border-2 border-amber-400/50 p-8 sm:p-14 shadow-2xl shadow-black/80">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950 border border-amber-400/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6 shadow-md">
            Atendimento Rápido em Brasília e DF
          </div>

          <h2 className="font-condensed font-extrabold italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight mb-4">
            Pronto para levar tecnologia e segurança ao seu negócio?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Fale diretamente com nossa equipe técnica especializada. Elaboramos sua proposta comercial detalhada com garantia e conformidade técnica.
          </p>

          {/* Big Golden Action Banner matching the flyer */}
          <div className="max-w-xl mx-auto mb-10">
            <a
              href={getWhatsAppUrl("Olá! Gostaria de conversar com um especialista da LT Tecnologia para um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block group overflow-hidden rounded-2xl border-2 border-amber-400/80 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all hover:scale-102 active:scale-98"
            >
              <img
                src="/assets/images/whatsapp_banner_badge.png"
                alt={`Chamar no WhatsApp: ${COMPANY.phoneFormatted}`}
                className="w-full h-auto object-contain block bg-[#0A1A3F]"
              />
            </a>
          </div>

          {/* Button Alternative for accessibility */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
            <a
              href={getWhatsAppUrl("Olá! Vim pelo site da LT Tecnologia e gostaria de solicitar um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-base tracking-wide shadow-xl shadow-amber-500/30 transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950/20 stroke-slate-950" />
              <span>Chamar no WhatsApp – {COMPANY.phoneFormatted}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 pt-6 border-t border-blue-900/60">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Atendimento Seg a Sáb (Plantão 24h)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Garantia formal em contrato</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Ligação ou WhatsApp no {COMPANY.phoneFormatted}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
