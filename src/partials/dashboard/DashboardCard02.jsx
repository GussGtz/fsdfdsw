import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../images/icon-02.svg';

function DashboardCard02() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const imageUrl = 'https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-duck-poultry-white-transparent-png-image_6653169.png';

  return (
    <>
      <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700" onClick={handleCardClick}>
        <div className="px-5 pt-5">
          <header className="flex justify-between items-start mb-2">
            <img src={Icon} width="32" height="32" alt="Icon 02" />          
          </header>
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-2">Pato</h2>
          {imageUrl && <img src={imageUrl} alt="Pato" className="w-60 h-70 mb-2" />}
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded text-center">
            <p>¿Deseas incubar huevos de Pato?</p>
            <Link to="/pato">
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white mt-4 mr-2">
              Sí, incubar
            </button>
            </Link>
            <button className="btn bg-gray-400 hover:bg-gray-500 text-gray-800 mt-4 ml-2" onClick={handleCloseModal}>
              No, cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DashboardCard02;
