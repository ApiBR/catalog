import { Github } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  return (
    <footer className="w-full py-8 px-2 bg-[#009739] border-t border-[#007d30]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-base text-white">
        <span className="flex items-center gap-4">
          {translations.developedBy[language]}
          <a
            href="https://guilherme.stracini.com.br/?utm_campaign=project&utm_media=api-br-catalog&utm_source=apibr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-[#FFCC29] transition-colors"
          >
            <img
              src="https://guilherme.stracini.com.br/photo.png"
              alt="Guilherme Branco Stracini"
              className="h-[44px] w-[24px] object-cover"
              loading="lazy"
            />
          </a>
          <a
            href="https://guilherme.stracini.com.br/?utm_campaign=project&utm_media=api-br-catalog&utm_source=apibr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFCC29] transition-colors font-medium"
          >
            Guilherme Branco Stracini
          </a>
        </span>
        <span className="hidden sm:inline text-white text-2xl">•</span>
        <span className="flex items-center gap-2">
          {translations.repository[language]}
          <a
            href="https://github.com/ApiBR/catalog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#FFCC29] transition-colors"
          >
            <Github className="w-6 h-6" />
            <span className="font-medium">GitHub</span>
          </a>
        </span>
      </div>
    </footer>
  );
}