import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const DeleteTaskModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <FiPlus
        onClick={() => setModalIsOpen(true)}
        className="hover:!opacity-80 hover:cursor-pointer !rotate-[45deg] mt-[3px] transition-all duration-150 ease-out"
        color="white"
        fontSize="2.5em"
      />

      {modalIsOpen && (
        <section className="task-modal fixed top-0 left-0 h-screen w-full bg-[#000]/80 flex justify-center items-center">
          <div className="task-modal__wrapper rounded-[75px] bg-[#fff] px-14 py-14 flex flex-col gap-7 w-[450px]">
            <div className="container flex justify-between">
              <h2 className="heading text-primary text-[32px] font-[400]">
                Delete Task
              </h2>
              <FiPlus
                onClick={() => setModalIsOpen(false)}
                color="#171717"
                className="hover:!text-primary/80 hover:cursor-pointer mt-1 !rotate-[45deg] transition-all duration-150 ease-out"
                fontSize="2.4em"
              />
            </div>
            <p className="mt-7">
              Are you really sure you want to delete the "
              <span>Do this thing</span>" task?
            </p>
            <p className="mt-4">This cannot be undone.</p>
            <div className="btn-wrapper flex items-center gap-5">
              <button className="btn bg-red-500 text-[#fff] rounded-[10px] py-3 px-10 border-2 border-red-500 transition-all duration-150 ease-out hover:bg-red-600 hover:border-red-600 flex items-center">
                Delete
              </button>
              <button
                onClick={() => setModalIsOpen(false)}
                className="btn text-primary py-3 px-2 border-2 border-transparent transition-all duration-150 ease-out hover:text-primary/80"
              >
                Cancel
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DeleteTaskModal;
