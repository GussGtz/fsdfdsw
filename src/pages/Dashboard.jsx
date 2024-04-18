import React, { useState, useEffect } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import { FaArrowRight } from 'react-icons/fa';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const handleArrowClick = () => {
    setSidebarOpen(!sidebarOpen); 
    clearTimeout(timerId); 
  };

  const handleMouseLeave = () => {
    setTimerId(
      setTimeout(() => {
        setSidebarOpen(false);
      }, 5000)
    );
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerId);
    };
  }, [timerId]);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className={`transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <button
                  className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                  onClick={handleArrowClick}
                  onMouseLeave={handleMouseLeave}
                >
                  <FaArrowRight className="w-4 h-4 fill-current opacity-50 shrink-0" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <DashboardCard01 />
              <DashboardCard02 />
              <DashboardCard03 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
