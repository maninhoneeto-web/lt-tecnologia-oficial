import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { getWhatsAppUrl, COMPANY } from '../constants/company';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Como Trabalhamos', href: '#como-trabalhamos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050B1F]/95 backdrop-blur-md border-b border-blue-900/40 shadow-xl shadow-black/50 py-2.5'
          : 'bg-gradient-to-b from-[#050B1F] via-[#050B1F]/80 to-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Official Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group transition-opacity hover:opacity-95 shrink-0"
            aria-label="LT Tecnologia - Início"
          >
            {/* Desktop Full Logo */}
            <div className="hidden sm:block">
              <Logo size="md" variant="full" />
            </div>
            {/* Mobile Compact Emblem + Text */}
            <div className="sm:hidden">
              <Logo size="sm" variant="emblem" />
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-amber-400 transition-colors whitespace-nowrap py-1 relative group tracking-wide"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action (Golden WhatsApp Button) & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950/20 stroke-slate-950" />
              <span className="hidden xs:inline">Fale no</span> WhatsApp
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-blue-900/40 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071330]/98 backdrop-blur-xl border-b border-blue-900/50 px-5 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-slate-200 hover:text-amber-400 hover:bg-blue-950/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-blue-900/40 flex flex-col gap-2">
              <span className="text-xs text-slate-400 px-3 font-medium">WhatsApp Comercial & Plantão:</span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-extrabold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950/20 stroke-slate-950" />
                Falar com Especialista: {COMPANY.phoneFormatted}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
