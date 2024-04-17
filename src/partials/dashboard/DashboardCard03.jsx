import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../images/icon-03.svg';

function DashboardCard03() {

  const imageUrl = 'https://st3.depositphotos.com/1000695/17016/i/450/depositphotos_170165632-stock-photo-chicken-turkey-isolated.jpg';

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <img src={Icon} width="32" height="32" alt="Icon 03" />
        </header>
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-2">Codorniz</h2>
        {imageUrl && <img src={imageUrl} alt="Codorniz" className="w-60 h-70 mb-2" />}
      </div>
    </div>
  );
}

export default DashboardCard03;
