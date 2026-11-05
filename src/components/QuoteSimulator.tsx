import React, { useState } from 'react';
import { COMPANY } from '../constants/company';
import { Send, Sparkles, Building2, MapPin, Check } from 'lucide-react';

export const QuoteSimulator: React.FC = () => {
  const [service, setService] = useState('CFTV – Monitoramento e Instalação');
  const [propertyType, setPropertyType] = useState('Empresa / Escritório');
  const [urgency, setUrgency] = useState('Preciso para esta semana');
  const [location, setLocation] = useState('Brasília (Plano Piloto / Região Administrativa)');
  const [notes, setNotes] = useState('');

  const servicesList = [
    'CFTV – Monitoramento e Câmeras',
    'Redes de Computadores Estruturadas',
    'Elétrica – Instalações e Manutenção',
    'Reformas em Geral',
    'Segurança Eletrônica (Alarmes/Cerca/Acesso)',
    'Pacote Completo (Tecnologia + Segurança)'
  ];

  const propertyTypes = [
    'Empresa / Escritório',
    'Comércio / Loja',
    'Condomínio (Residencial/Comercial)',
    'Residência de Alto Padrão',
    'Galpão / Indústria'
  ];

  const urgencyOptions = [
    'Urgente (Imediato)',
    'Preciso para esta semana',
    'Planejamento para o mês',
    'Cotação prévia'
  ];

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `Olá, LT Tecnologia!\n\nGostaria de solicitar um orçamento gratuito pelo site:\n• Serviço: ${service}\n• Tipo de Imóvel: ${propertyType}\n• Urgência: ${urgency}\n• Localidade: ${location || 'Brasília e Região'}${notes ? `\n• Detalhes adicionais: ${notes}` : ''}\n\nPoderiam me enviar uma proposta com os valores estimados?`;
    
    const url = `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-[#050B1F] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#0A1A3F] to-[#071330] border border-amber-400/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle gold corner ribbon */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Simulador de Orçamento Rápido
          </div>

          <h2 className="font-condensed font-extrabold italic text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight mb-2">
            Monte seu Pedido e Fale Direto com um Técnico
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8">
            Selecione as opções abaixo para gerar sua solicitação personalizada e enviar direto no WhatsApp sem precisar digitar tudo.
          </p>

          <form onSubmit={handleSendToWhatsApp} className="space-y-6">
            {/* Step 1: Service */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Qual serviço principal você procura?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {servicesList.map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => setService(srv)}
                    className={`p-3 text-left rounded-xl text-xs font-semibold transition-all border ${
                      service === srv
                        ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md font-bold'
                        : 'bg-blue-950/40 text-slate-300 border-blue-900/60 hover:bg-blue-900/40 hover:text-white'
                    }`}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Property Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                2. Qual o tipo de imóvel ou estabelecimento?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {propertyTypes.map((prop) => (
                  <button
                    key={prop}
                    type="button"
                    onClick={() => setPropertyType(prop)}
                    className={`p-3 text-left rounded-xl text-xs font-semibold transition-all border ${
                      propertyType === prop
                        ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md font-bold'
                        : 'bg-blue-950/40 text-slate-300 border-blue-900/60 hover:bg-blue-900/40 hover:text-white'
                    }`}
                  >
                    {prop}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Urgency & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  3. Previsão ou Urgência
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full p-3 rounded-xl bg-blue-950/60 border border-blue-800 text-slate-200 text-sm focus:outline-none focus:border-amber-400"
                >
                  {urgencyOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-slate-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  4. Bairro / Região no DF ou Entorno
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-amber-400 absolute left-3 top-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex: Asa Sul, Águas Claras, Taguatinga..."
                    className="w-full pl-9 pr-3 py-3 rounded-xl bg-blue-950/60 border border-blue-800 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Optional details */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Observações ou pontos específicos (opcional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder="Ex: Preciso de 8 câmeras com gravação em nuvem e substituição de disjuntor geral..."
                className="w-full p-3 rounded-xl bg-blue-950/60 border border-blue-800 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-base tracking-wide shadow-xl shadow-amber-500/25 flex items-center justify-center gap-3 transition-all active:scale-98 cursor-pointer"
              >
                <Send className="w-5 h-5 fill-slate-950/20" />
                <span>Solicitar Orçamento Gratuito no WhatsApp</span>
              </button>
              <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                Orçamento 100% gratuito e sem compromisso • Resposta ágil pela equipe no (61) 99295-3160
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
