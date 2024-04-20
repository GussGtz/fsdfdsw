import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function DashboardCard01() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const imageUrl =
    "https://todovector.com/vector/animales/aves/gallina-y-pollo/6.png";
  const huevos =
    "https://static.vecteezy.com/system/resources/previews/027/924/546/non_2x/egg-silhouette-icon-egg-shell-vector.jpg";

  return (
    <>
      <div
        className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
        onClick={handleCardClick}
      >
        <div className="px-5 pt-5">
          <header className="flex justify-between items-start mb-2">
            <FaArrowRight className="w-4 h-4 fill-current opacity-50 shrink-0" />
          </header>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            Proximamente...
          </h2>
          {imageUrl && (
            <img src={imageUrl} alt="Pollito" className="w-60 h-70 mb-2" />
          )}
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded text-center">
            <p>¡Espera las nuevas actualizaciones con más huevos!</p>
            {huevos && (
              <div className="flex justify-center items-center">
                <img src={huevos} alt="huevito" className="w-30 h-40 mb-2" />
              </div>
            )}
            <button
              className="btn bg-indigo-500 hover:bg-indigo-600 text-white mt-4"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DashboardCard01;
