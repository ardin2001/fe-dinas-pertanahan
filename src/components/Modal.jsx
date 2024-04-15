import React, { useState } from "react";

const Modal = ({ modal }) => {
  if (!modal) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-white rounded-lg p-8 z-20">
          <div className="flex justify-end">
            <button
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <img src="logo.png" alt="" />
          <div className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque facere totam inventore expedita tempore aperiam rem!</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
