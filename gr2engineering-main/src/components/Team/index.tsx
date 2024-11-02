// src/components/Team/index.tsx
"use client"; // Mark this component as a Client Component

import { TeamMember } from '@/types/team';
import SingleBlog from './SingleBlog';
import Modal from './Modal';
import { useState } from 'react';

const Team: React.FC<{ teamData: TeamMember[] }> = ({ teamData }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMember(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-5 mb-5">
        {teamData.map((member) => (
          <div key={member.id} onClick={() => openModal(member)}>
            <SingleBlog member={member} />
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} member={selectedMember} />
    </>
  );
};

export default Team;
