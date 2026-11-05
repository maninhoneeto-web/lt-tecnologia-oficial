import React from 'react';
import { Logo } from './Logo';
import { COMPANY, SERVICES, getWhatsAppUrl } from '../constants/company';
import { MessageCircle, MapPin, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#030712] text-slate-300 pt-16 pb-12 border-t border-blue-950 relative overflow-hidden">
      {/* Background Brasília Monuments Ambient Artwork from Flyer */}
      <div className="absolute right-0 bottom-0 w-full max-w-lg opacity-25 pointer-events-none select-none">
        <img
          src="/assets/images/brasilia_monuments.png"
          alt="Brasília Monumentos LT Tecnologia"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Slogan */}
          <div className="space-y-4">
            <Logo size="lg" variant="full" />
            <div className="pt-2">
              <span className="font-condensed font-extrabold text-xl text-amber-400 italic block">
                "LT TECNOLOGIA – SEMPRE AO SEU LADO!"
              </span>
              <p className="text-xs text-slate-400 mt-1">
                Conectando sua empresa com o futuro.
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {COMPANY.slogan}. Especialistas em infraestrutura técnica, redes corporativas, CFTV e sistemas inteligentes de proteção no DF.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-extrabold text-xs tracking-wide shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950/20" />
                <span>Conversar no WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4 pb-2 border-b border-blue-900/40">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Serviços Especializados
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Nossos Diferenciais
                </a>
              </li>
              <li>
                <a href="#como-trabalhamos" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Como Trabalhamos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services in DF */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4 pb-2 border-b border-blue-900/40">
              Serviços no DF
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href={getWhatsAppUrl(s.quoteMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-amber-300 transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{s.titleLine1} {s.titleLine2}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Service Area */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4 pb-2 border-b border-blue-900/40">
              Contato & Região
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">WhatsApp Oficial:</p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline font-extrabold text-base block mt-0.5"
                  >
                    {COMPANY.phoneFormatted}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">Área de Atendimento:</p>
                  <p>{COMPANY.region}</p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">Horário:</p>
                  <p>{COMPANY.hours}</p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">Padrão Técnico:</p>
                  <p>Normas ABNT NBR 14565 / NR-10</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="pt-8 border-t border-blue-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span>Brasília - Distrito Federal</span>
            <span>Segurança Eletrônica & Engenharia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
