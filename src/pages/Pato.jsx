import React, { useState } from 'react';


import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Grafica from '../partials/dashboard/Grafica1';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import Banner from '../partials/Banner';
import GraficaDos from '../partials/dashboard/Grafica2';
import GraficaTres from '../partials/dashboard/Grafica3';
import BannerPato from '../partials/dashboard/BannerdePato';

function Pato() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            <BannerPato />

            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">              
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <Grafica/>
              <GraficaDos />
              <GraficaTres />
              <DashboardCard04 />
              <DashboardCard05 />           
            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Pato;