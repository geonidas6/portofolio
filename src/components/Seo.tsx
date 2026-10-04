import { useEffect } from 'react';
import { Language } from '../types';

interface SeoProps {
  lang: Language;
}

const metadata = {
  fr: {
    title: 'Patrice Akotse | Développeur Full-Stack à Lomé',
    description:
      'Développeur Full-Stack web et mobile à Lomé : Laravel, React, Python et Flutter. Découvrez mes projets et confiez-moi votre application.',
    socialDescription:
      'Applications web et mobiles performantes avec Laravel, React, Python et Flutter. Découvrez mes projets et mon expertise FinTech.',
    locale: 'fr_FR',
  },
  en: {
    title: 'Patrice Akotse | Full-Stack Developer in Lomé',
    description:
      'Full-Stack web and mobile developer in Lomé specializing in Laravel, React, Python and Flutter. Explore my projects and services.',
    socialDescription:
      'High-performance web and mobile applications with Laravel, React, Python and Flutter. Explore my projects and FinTech expertise.',
    locale: 'en_US',
  },
};

function setMeta(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
}

export function Seo({ lang }: SeoProps) {
  useEffect(() => {
    const current = metadata[lang];

    document.documentElement.lang = lang;
    document.title = current.title;
    setMeta('meta[name="description"]', current.description);
    setMeta('meta[property="og:title"]', current.title);
    setMeta('meta[property="og:description"]', current.socialDescription);
    setMeta('meta[property="og:locale"]', current.locale);
    setMeta('meta[name="twitter:title"]', current.title);
    setMeta('meta[name="twitter:description"]', current.socialDescription);
  }, [lang]);

  return null;
}
