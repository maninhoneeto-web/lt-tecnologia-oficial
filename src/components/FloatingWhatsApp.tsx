import React, { useState } from 'react';
import { getWhatsAppUrl, COMPANY } from '../constants/company';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-none">
      {/* Friendly Tooltip Prompt */}
      {showTooltip && (
        <div className="pointer-events-auto relative max-w-xs p-3.5 rounded-2xl bg-[#0A1A3F] border border-amber-400/40 text-slate-100 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-slate-400 hover:text-white rounded-full"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
              LT Tecnologia Online
            </span>
          </div>
          <p className="text-xs text-slate-200 font-medium leading-relaxed pr-3">
            Precisa de orçamento em Brasília? Fale agora direto com nosso técnico pelo WhatsApp!
          </p>
        </div>
      )}

      {/* Official WhatsApp Green Floating Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-xl shadow-emerald-950/50 hover:shadow-emerald-600/40 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none -z-10" />

        {/* WhatsApp Icon */}
        <div className="w-7 h-7 flex items-center justify-center shrink-0">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="0"
            fill="currentColor"
            className="w-6 h-6 fill-white"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.158.57 4.184 1.564 5.938l-1.564 5.717 5.86-1.537c1.7 1.025 3.69 1.62 5.82 1.62 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.6c-1.895 0-3.659-.537-5.16-1.467l-.37-.228-3.484.914.93-3.393-.25-.398c-1.026-1.635-1.566-3.526-1.566-5.468 0-5.293 4.307-9.6 9.6-9.6 5.292 0 9.6 4.307 9.6 9.6 0 5.293-4.308 9.6-9.6 9.6z" />
          </svg>
        </div>

        {/* Text */}
        <span className="tracking-wide">Fale conosco</span>
      </a>
    </div>
  );
};
