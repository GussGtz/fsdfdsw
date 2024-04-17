import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../images/icon-01.svg';

function DashboardCard01() {
  // URL de la imagen
  const imageUrl = 'URL_DE_TU_IMAGEN';

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <img src={Icon} width="32" height="32" alt="Icon 01" />
        </header>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Pollito</h2>
        {imageUrl && <img src={imageUrl} alt="Pollito" className="w-full h-auto mb-2" />}
      </div>
    </div>
  );
}

export default DashboardCard01;
