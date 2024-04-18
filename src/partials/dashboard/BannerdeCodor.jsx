import React from 'react';

function BannerCodor() {
  const codornizIconUrl = 'https://www.clipartbest.com/cliparts/bTy/pX4/bTypX4rnc.gif';

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
            <img src={codornizIconUrl} alt="Codorniz Icon" className="w-12 h-12 mr-2" />
            <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Paloma</h1>
          </div>
          <p className="text-black">Aves pertenecientes a la familia Columbidae y se encuentran en todo el mundo, con una gran diversidad de especies adaptadas a una amplia gama de hábitats, desde entornos urbanos hasta áreas rurales y selváticas. Se cree que las palomas han sido domesticadas por los humanos desde hace miles de años, y son conocidas por su capacidad para regresar a su hogar desde largas distancias, lo que las convierte en excelentes mensajeras. Son aves de tamaño mediano con un plumaje suave y colores variados, que van desde el gris y el blanco hasta el marrón y el negro. Las palomas son principalmente granívoras, pero también se alimentan de insectos y otros pequeños invertebrados. Son animales sociales que a menudo forman parejas monógamas y crían a sus crías en nidos construidos en lugares elevados como repisas de edificios o árboles.</p>
        </div>
      </div>
    </div>
  );
}

export default BannerCodor;
