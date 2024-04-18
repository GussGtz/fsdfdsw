import React from 'react';

function AnnouncementCard() {
  return (
    <div className="col-span-20 sm:col-span-12 lg:col-span-40">
      <div className="bg-indigo-100  p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">¡Espera la nueva actualización con más huevos!</h2>
        <p className="text-gray-600">Estamos trabajando en agregar nuevas características y mejoras a nuestra aplicación. ¡Mantente atento para más información!</p>
      </div>
    </div>
  );
}

export default AnnouncementCard;
