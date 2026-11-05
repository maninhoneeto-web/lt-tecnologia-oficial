import React, { useState } from 'react';
import { getWhatsAppUrl, COMPANY } from '../constants/company';
import { MessageCircle, ShieldCheck, Zap, ArrowRight, Network, CheckCircle2, Maximize2, X } from 'lucide-react';

export const Hero: React.FC = () => {
  const [showBannerModal, setShowBannerModal] = useState(false);

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#050B1F]"
    >
      {/* Background Graphic Elements: Digital Globe & Modern Corporate Architecture */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/assets/aistudio/Captura_de_Tela__21__724efebc.png"
          alt="LT Tecnologia Background"
          className="w-full h-full object-cover object-top opacity-20 filter blur-[1px] scale-105"
        />
        {/* Deep navy scrims and radial glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B1F]/90 via-[#050B1F]/80 to-[#050B1F]" />
        <div className="absolute inset-0 bg-radial from-blue-600/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines, Slogan & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline / Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-950/90 to-[#0A1A3F] border border-amber-400/40 backdrop-blur-sm text-xs font-semibold text-slate-200 mb-6 shadow-lg shadow-black/40">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 uppercase tracking-widest font-extrabold text-[11px]">
                Brasília & DF
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">Soluções completas em tecnologia e segurança</span>
            </div>

            {/* Main Headline replicating the banner typography */}
            <h1 className="font-condensed font-extrabold italic text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] uppercase mb-5 drop-shadow-md">
              <span className="block text-white">CONECTANDO</span>
              <span className="block text-white">SUA EMPRESA</span>
              <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,196,0,0.4)]">
                COM O FUTURO
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
              Soluções completas em <strong className="text-amber-300 font-bold">Redes Estruturadas</strong>,{' '}
              <strong className="text-amber-300 font-bold">CFTV</strong>,{' '}
              <strong className="text-amber-300 font-bold">Elétrica</strong>,{' '}
              <strong className="text-amber-300 font-bold">Reformas</strong> e{' '}
              <strong className="text-amber-300 font-bold">Segurança Eletrônica</strong> para condomínios, empresas e residências em Brasília e Região.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary Golden WhatsApp Button */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-base tracking-wide shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950/20 stroke-slate-950 transition-transform group-hover:scale-110" />
                <span>Solicitar Orçamento no WhatsApp</span>
                <ArrowRight className="w-4 h-4 stroke-[3] transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary Outline Button */}
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#0A1A3F]/80 hover:bg-[#0A1A3F] border border-blue-600/40 hover:border-amber-400/60 text-slate-200 hover:text-white font-bold text-base transition-all duration-200 backdrop-blur-sm"
              >
                <span>Conheça Nossos Serviços</span>
              </a>
            </div>

            {/* WhatsApp Quick Banner Highlight */}
            <div className="w-full max-w-md pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block group overflow-hidden rounded-xl border border-amber-400/50 shadow-lg shadow-black/60 hover:shadow-amber-500/20 transition-all hover:scale-[1.02]"
              >
                <img
                  src="/assets/images/whatsapp_banner_badge.png"
                  alt={`Chamar no WhatsApp: ${COMPANY.phoneFormatted}`}
                  className="w-full h-auto object-contain block"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Frame featuring the Official Company Banner & Logo */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full rounded-3xl p-1 bg-gradient-to-b from-amber-400/40 via-blue-600/30 to-amber-400/20 shadow-2xl shadow-black/80">
              <div className="relative rounded-[22px] overflow-hidden bg-[#0A1A3F] border border-blue-900/60 group">
                <img
                  src="/assets/aistudio/Captura_de_Tela__21__724efebc.png"
                  alt="Banner Oficial da LT Tecnologia"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-102 cursor-pointer"
                  onClick={() => setShowBannerModal(true)}
                />

                {/* Overlay Hint on hover */}
                <div
                  onClick={() => setShowBannerModal(true)}
                  className="absolute inset-0 bg-gradient-to-t from-[#050B1F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 cursor-pointer"
                >
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-amber-400/40">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Ampliar Banner Oficial
                  </span>
                  <span className="text-xs text-slate-300 font-medium">Brasília e Região</span>
                </div>
              </div>

              {/* Floating Trust Pills around the frame */}
              <div className="absolute -bottom-4 -left-3 px-3.5 py-2 rounded-xl bg-[#050B1F]/95 border border-amber-400/60 shadow-xl flex items-center gap-2 text-xs font-bold text-amber-300">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Normas ABNT & NR-10</span>
              </div>

              <div className="absolute -top-3 -right-3 px-3.5 py-2 rounded-xl bg-[#050B1F]/95 border border-blue-500/60 shadow-xl flex items-center gap-2 text-xs font-bold text-slate-200">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Atendimento Ágil no DF</span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 w-full mt-8">
              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/50 text-center">
                <p className="font-condensed font-extrabold text-2xl text-amber-400">100%</p>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Garantia em Contrato</p>
              </div>
              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/50 text-center">
                <p className="font-condensed font-extrabold text-2xl text-amber-400">+500</p>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Projetos Executados</p>
              </div>
              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/50 text-center">
                <p className="font-condensed font-extrabold text-2xl text-amber-400">24/7</p>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Plantão Emergencial</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal to view Full Official Banner in High Resolution */}
      {showBannerModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowBannerModal(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0A1A3F] border-2 border-amber-400/60 rounded-3xl p-3 sm:p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowBannerModal(false)}
              className="absolute -top-3 -right-3 p-2 rounded-full bg-amber-400 text-slate-950 hover:bg-yellow-300 font-bold shadow-xl transition-all"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-2xl overflow-hidden border border-blue-900/60">
              <img
                src="/assets/aistudio/Captura_de_Tela__21__724efebc.png"
                alt="Banner Oficial LT Tecnologia"
                className="w-full h-auto object-contain max-h-[80vh]"
              />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
              <span className="text-sm font-semibold text-slate-300">
                LT Tecnologia • Soluções completas em tecnologia e segurança
              </span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md"
              >
                Falar com a Equipe no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
