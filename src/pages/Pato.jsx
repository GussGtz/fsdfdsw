import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import Banner from '../partials/Banner';
import BannerPato from '../partials/dashboard/BannerdePato';
import Modal from './ModalTerminar';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

function Pato() {
  const navigate = useNavigate(); // Instancia de navigate
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showGraphCards, setShowGraphCards] = useState(true); // Nuevo estado

  const handleTerminate = () => {
    setIsModalOpen(true);
  };

  const handleConfirmTerminate = () => {
    setIsModalOpen(false);
    setShowGraphCards(false); // Ocultar las cards de las gráficas
    navigate('/'); // Redirigir al home
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleShowSidebar = () => {
    setSidebarOpen(true);
  };

  const handleHideSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className={`transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0'} overflow-hidden`}
           onMouseLeave={handleHideSidebar}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <BannerPato />
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {!sidebarOpen && (
                  <button
                    className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                    onClick={handleShowSidebar}
                  >
                    <FaArrowRight className="w-4 h-4 fill-current opacity-50 shrink-0" />
                    <span className="hidden xs:block ml-2">Mostrar</span>
                  </button>
                )}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" onClick={handleTerminate}>
                  <FaCheckCircle className="w-4 h-4 fill-current opacity-50 shrink-0" /> 
                  <span className="hidden xs:block ml-2">Terminar</span>
                </button>
              </div>
            </div>
            {showGraphCards && ( // Mostrar las cards de las gráficas si showGraphCards es true
              <div className="grid grid-cols-12 gap-6">
                <DashboardCard04 />
                <DashboardCard05 />
              </div>
            )}
          </div>
        </main>
        <Banner />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmTerminate} />
      </div>
    </div>
  );
}

export default Pato;
