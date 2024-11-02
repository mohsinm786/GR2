// src/components/Team/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  member: any; // Adjust type according to your data structure
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, member, onClose }) => {
  if (!isOpen || !member) return null; // Don't render anything if not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-5 max-w-4xl w-full flex">
        {/* Left side: Image */}
        <div className="w-1/3 p-4">
          <img 
            src={member.image} 
            alt={member.title} 
            className="rounded mb-4 w-full object-cover" 
          />
        </div>

        {/* Right side: Text content */}
        <div className="w-2/3 p-4">
          <h1 className="text-2xl font-bold">{member.title}</h1>
          <h2 className="text-xl font-semibold">{member.jobRole}</h2>
          <p>{member.description1}</p>
          <p className="mt-2">{member.description2}</p>
          <button
            onClick={onClose}
            className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
