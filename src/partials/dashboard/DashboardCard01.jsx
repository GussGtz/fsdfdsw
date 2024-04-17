import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../images/icon-01.svg';

function DashboardCard01() {
  // URL de la imagen
  const imageUrl = 'https://media.istockphoto.com/id/466167557/es/foto/reci%C3%A9n-nacido-chick.jpg?s=612x612&w=0&k=20&c=_JhGqWTApMy4Z66naKxZUDGtZL_y3rPFADRESOPlZmg=';

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <img src={Icon} width="32" height="32" alt="Icon 01" />
        </header>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Gallina</h2>
        {imageUrl && <img src={imageUrl} alt="Pollito" className="w-60 h-70 mb-2" />}
      </div>
    </div>
  );
}

export default DashboardCard01;
