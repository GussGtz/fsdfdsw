import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const chickIconUrl = 'https://em-content.zobj.net/source/microsoft-teams/363/hatching-chick_1f423.png';
  const houseIconUrl = 'https://cdn.pixabay.com/animation/2023/06/01/08/53/08-53-15-862_512.gif';
  const patoIconUrl = 'https://i.gifer.com/XOsX.gif';
  const gallinaIconUrl = 'https://img1.picmix.com/output/stamp/normal/1/9/7/9/2379791_ebb93.gif';
  const codornizIconUrl = 'https://www.clipartbest.com/cliparts/bTy/pX4/bTypX4rnc.gif';

  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`w-44 flex flex-col h-full border-r border-slate-300 bg-slate-800 ${showSidebar ? '' : 'hidden'}`} style={{ textAlign: 'left' }}>
      <div className="flex items-center justify-center h-20 bg-slate-1200 text-white text-2xl font-semibold">
        <img src={chickIconUrl} alt="Chick Icon" className="w-12 h-12 mr-2" />
      </div>

      <ul className="flex flex-col flex-grow">
        <li className="my-2">
          <NavLink
            exact
            to="/"
            className="flex items-center justify-center py-2 text-slate-400 hover:text-white"
            activeClassName="text-white"
            onClick={toggleSidebar}
          >
            <img src={houseIconUrl} alt="Home Icon" className="w-12 h-12 mr-2" />
            Home
          </NavLink>
        </li>
        <li className="my-2">
          <NavLink
            to="/pato"
            className="flex items-center justify-center py-2 text-slate-400 hover:text-white"
            activeClassName="text-white"
            onClick={toggleSidebar}
          >
            <img src={patoIconUrl} alt="Pato Icon" className="w-12 h-12 mr-2" />
            Pato
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
