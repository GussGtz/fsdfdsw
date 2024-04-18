import React from 'react';

function Modal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg">
        <p className="mb-4">¿Estás seguro de que quieres terminar la incubación?</p>
        <div className="flex justify-end">
          <button className="btn bg-red-500 hover:bg-red-600 text-white mr-2" onClick={onConfirm}>
            Confirmar
          </button>
          <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-800" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
