import React, { useState } from 'react';
import { AUDIENCES, getWhatsAppUrl } from '../constants/company';
import { Building2, Store, Home, Building, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

export const Audiences: React.FC = () => {
  const [activeTab, setActiveTab] = useState(AUDIENCES[0].id);

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'empresas':
        return <Building2 className="w-5 h-5" />;
      case 'comercios':
        return <Store className="w-5 h-5" />;
      case 'condominios':
        return <Building className="w-5 h-5" />;
      case 'residencias':
        return <Home className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  const activeAudience = AUDIENCES.find((a) => a.id === activeTab) || AUDIENCES[0];

  return (
    <section className="py-24 bg-[#071330] relative border-b border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Atendimento Personalizado
          </span>
          <h2 className="font-condensed font-extrabold italic text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mt-2">
            Para Quem Atendemos
          </h2>
          <p className="text-slate-300 text-base mt-3">
            Estrutura sob medida para cada tipo de ambiente, com conformidade e pontualidade.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {AUDIENCES.map((audience) => {
            const isActive = audience.id === activeTab;
            return (
              <button
                key={audience.id}
                type="button"
                onClick={() => setActiveTab(audience.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-102'
                    : 'bg-[#0A1A3F] text-slate-300 hover:text-white hover:bg-blue-900/40 border border-blue-900/50'
                }`}
              >
                {getTabIcon(audience.id)}
                <span>{audience.name}</span>
              </button>
            );
          })}
        </div>

        {/* Audience Detail Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#0A1A3F] to-[#050B1F] border border-blue-800/60 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b border-blue-900/50">
            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-blue-950 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-800/60">
                Segmento {activeAudience.badge}
              </span>
              <h3 className="font-condensed font-extrabold text-2xl sm:text-3xl text-white uppercase">
                {activeAudience.name}
              </h3>
            </div>
            <a
              href={getWhatsAppUrl(`Olá! Gostaria de um orçamento especializado para ${activeAudience.name}. Poderia me orientar?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all active:scale-95 shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950/20" />
              <span>Orçamento para {activeAudience.name}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-base sm:text-lg text-slate-200 font-medium mb-6">
            {activeAudience.headline}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeAudience.needs.map((need, nIdx) => (
              <div
                key={nIdx}
                className="flex items-start gap-3 p-4 rounded-xl bg-blue-950/40 border border-blue-900/40"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300 leading-snug">{need}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
