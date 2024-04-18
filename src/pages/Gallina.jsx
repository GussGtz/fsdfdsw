import React, { useState } from 'react';
import Modal from './ModalTerminar';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import Banner from '../partials/Banner';
import BannerGallina from '../partials/dashboard/BannerdeGallina';

function Gallina() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTerminate = () => {
    setIsModalOpen(true);
  };

  const handleConfirmTerminate = () => {
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <BannerGallina />
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" onClick={handleTerminate}>
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Terminar</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <DashboardCard04 />
              <DashboardCard05 />
            </div>
          </div>
        </main>

        <Banner />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmTerminate} />
      </div>
    </div>
  );
}

export default Gallina;
