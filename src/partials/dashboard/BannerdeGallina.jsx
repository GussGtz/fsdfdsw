import React from 'react';

function BannerGallina() {
  const gallinaIconUrl = 'https://img1.picmix.com/output/stamp/normal/1/9/7/9/2379791_ebb93.gif';
  return (
    <div className="relative bg-indigo-200 dark:bg-indigo-500 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
        <svg width="319" height="198" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
            <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
            <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
              <stop stopColor="#A5B4FC" offset="0%" />
              <stop stopColor="#818CF8" offset="100%" />
            </linearGradient>
            <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="welcome-c">
              <stop stopColor="#4338CA" offset="0%" />
              <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <g transform="rotate(64 36.592 105.604)">
              <mask id="welcome-d" fill="#fff">
                <use xlinkHref="#welcome-a" />
              </mask>
              <use fill="url(#welcome-b)" xlinkHref="#welcome-a" />
              <path fill="url(#welcome-c)" mask="url(#welcome-d)" d="M64-24h80v152H64z" />
            </g>
            <g transform="rotate(-51 91.324 -105.372)">
              <mask id="welcome-f" fill="#fff">
                <use xlinkHref="#welcome-e" />
              </mask>
              <use fill="url(#welcome-b)" xlinkHref="#welcome-e" />
              <path fill="url(#welcome-c)" mask="url(#welcome-f)" d="M40.333-15.147h50v95h-50z" />
            </g>
            <g transform="rotate(44 61.546 392.623)">
              <mask id="welcome-h" fill="#fff">
                <use xlinkHref="#welcome-g" />
              </mask>
              <use fill="url(#welcome-b)" xlinkHref="#welcome-g" />
              <path fill="url(#welcome-c)" mask="url(#welcome-h)" d="M40.333-15.147h50v95h-50z" />
            </g>
          </g>
        </svg>
      </div>

      <div className="relative flex items-center">
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
          <img src={gallinaIconUrl} alt="Gallina Icon" className="w-12 h-12 mr-2" />
            <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Gallina</h1>
          </div>
          <p className="text-black">Las gallinas, domesticadas a partir de la especie salvaje conocida como el gallo bankiva, se cree que tienen su origen en el sudeste asiático hace unos 8,000 años. Son aves de corral muy comunes, criadas principalmente por sus huevos y carne. Las gallinas son omnívoras, lo que significa que comen una variedad de alimentos, desde semillas y vegetales hasta insectos y pequeños animales. Son animales sociales que a menudo viven en grupos jerárquicos llamados "bandadas" y son conocidas por su cacareo característico.</p>
        </div>
      </div>
    </div>
  );
}

export default BannerGallina;
