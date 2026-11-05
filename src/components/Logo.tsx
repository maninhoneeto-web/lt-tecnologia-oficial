import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
  variant?: 'full' | 'emblem';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'full',
}) => {
  // Height sizing mapping
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    hero: 'h-16 sm:h-20 md:h-24',
  }[size];

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        <img
          src="/assets/images/logo_emblem.png"
          alt="LT Tecnologia Emblema"
          className={`${heightClasses} w-auto object-contain drop-shadow-[0_0_15px_rgba(255,196,0,0.4)] transition-transform duration-300 hover:scale-105`}
        />
        {showSubtitle && (
          <div className="flex flex-col leading-none">
            <div className="flex items-baseline gap-1">
              <span className="font-condensed font-extrabold italic text-2xl sm:text-3xl tracking-tight bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow">
                LT
              </span>
              <span className="font-condensed font-extrabold tracking-widest text-white text-sm sm:text-base uppercase drop-shadow">
                TECNOLOGIA
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-wider text-slate-300 font-semibold mt-0.5">
              Soluções & Segurança
            </span>
          </div>
        )}
      </div>
    );
  }

  // Full official logo cropped directly from the company flyer
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/assets/images/logo_official.png"
        alt="LT Tecnologia - Soluções Completas em Tecnologia e Segurança"
        className={`${heightClasses} w-auto object-contain max-w-full drop-shadow-[0_0_20px_rgba(30,107,255,0.3)] transition-all duration-300 hover:drop-shadow-[0_0_25px_rgba(255,196,0,0.5)]`}
      />
    </div>
  );
};
