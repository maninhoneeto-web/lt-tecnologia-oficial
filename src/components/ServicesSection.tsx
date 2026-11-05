import React, { useState } from 'react';
import { SERVICES, ServiceItem, getWhatsAppUrl } from '../constants/company';
import {
  Network,
  Video,
  Zap,
  Wrench,
  Shield,
  MessageCircle,
  ArrowRight,
  Check,
  X,
  FileCheck2,
  ExternalLink,
  Lock
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Exact icon matches from the company banner
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'redes':
        return <Network className="w-6 h-6 text-amber-400 stroke-[2.2]" />;
      case 'cctv':
        return <Video className="w-6 h-6 text-amber-400 stroke-[2.2]" />;
      case 'eletrica':
        return <Zap className="w-6 h-6 text-amber-400 fill-amber-400/20 stroke-[2.2]" />;
      case 'reformas':
        return <Wrench className="w-6 h-6 text-amber-400 stroke-[2.2]" />;
      case 'seguranca':
        return <Lock className="w-6 h-6 text-amber-400 stroke-[2.2]" />;
      default:
        return <Zap className="w-6 h-6 text-amber-400 stroke-[2.2]" />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-[#050B1F] relative">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-amber-400/40 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-md">
            Soluções Completas
          </div>
          <h2 className="font-condensed font-extrabold italic text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Conectividade, proteção patrimonial e engenharia elétrica de alto padrão para sua empresa ou residência no Distrito Federal.
          </p>
        </div>

        {/* 5 Services Grid - Styled exactly like the banner columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-2xl bg-gradient-to-b from-[#0A1A3F] via-[#071330] to-[#050B1F] border border-amber-400/30 hover:border-amber-400 shadow-xl shadow-black/50 hover:shadow-amber-500/20 transition-all duration-300 overflow-hidden relative"
            >
              {/* Photo from the official flyer */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                <img
                  src={service.imageUrl}
                  alt={`${service.titleLine1} ${service.titleLine2}`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3F] via-transparent to-transparent opacity-90" />

                {/* Golden Circular Icon Emblem overlapping the bottom of photo */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#050B1F] border-2 border-amber-400 flex items-center justify-center shadow-xl shadow-amber-500/20 z-10 group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.id)}
                </div>

                {/* Index badge */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/70 border border-blue-800/40 text-[10px] font-mono text-amber-300 font-bold">
                  0{index + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-8 px-5 pb-6 flex-1 flex flex-col justify-between text-center">
                <div>
                  {/* Two-tone Title from the banner: Line 1 White, Line 2 Yellow */}
                  <h3 className="font-condensed font-extrabold uppercase leading-tight mb-2 tracking-tight">
                    <span className="block text-white text-lg sm:text-xl">
                      {service.titleLine1}
                    </span>
                    <span className="block text-amber-400 text-base sm:text-lg drop-shadow">
                      {service.titleLine2}
                    </span>
                  </h3>

                  {/* Slogan phrase in italic */}
                  <p className="text-xs text-slate-300 font-medium italic mb-4 leading-snug">
                    "{service.subtitle}"
                  </p>

                  <p className="text-slate-400 text-xs leading-relaxed mb-5 text-left line-clamp-3">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 mb-6 text-left border-t border-blue-900/40 pt-4">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="space-y-2 pt-3 border-t border-blue-900/50">
                  <a
                    href={getWhatsAppUrl(service.quoteMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs tracking-wide shadow-md transition-all active:scale-98"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-slate-950/20" />
                    <span>Pedir Orçamento</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="w-full py-1.5 px-2 rounded-lg text-[11px] font-semibold text-slate-400 hover:text-slate-200 hover:bg-blue-950/60 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <FileCheck2 className="w-3 h-3 text-blue-400" />
                    <span>Ver especificações</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0A1A3F] border-2 border-amber-400/50 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-blue-900/50 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-950 border-2 border-amber-400 flex items-center justify-center shrink-0">
                {getServiceIcon(selectedService.id)}
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-widest text-amber-400 font-bold">
                  Especificação Técnica • LT Tecnologia
                </span>
                <h3 className="font-condensed font-extrabold text-2xl text-white uppercase leading-tight">
                  {selectedService.titleLine1}{' '}
                  <span className="text-amber-400">{selectedService.titleLine2}</span>
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              {selectedService.description}
            </p>

            {/* Complete Checklist */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                O que está incluso no escopo:
              </h4>
              <ul className="space-y-2">
                {selectedService.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specs & Norms */}
            <div className="mb-8 p-4 rounded-2xl bg-blue-950/70 border border-blue-800/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Normas Técnicas, Marcas Homologadas e Prazos
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedService.technicalSpecs.map((spec, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Bottom CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-blue-900/60">
              <a
                href={getWhatsAppUrl(selectedService.quoteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950/20" />
                <span>Solicitar Orçamento Deste Serviço</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-5 py-3.5 rounded-xl bg-blue-950 text-slate-300 hover:text-white border border-blue-800/50 text-sm font-semibold transition-colors cursor-pointer"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
