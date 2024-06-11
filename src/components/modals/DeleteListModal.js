import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

const DeleteListModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <MdDelete
        onClick={() => setModalIsOpen(true)}
        color="#cccccc"
        className="hover:cursor-pointer hover:!text-[#b6b6b6] transition-all duration-150 ease-out"
        fontSize="1.75em"
      />

      {modalIsOpen && (
        <section className="list-modal fixed top-0 left-0 h-screen w-full bg-[#000]/80 flex justify-center items-center">
          <div className="list-modal__wrapper rounded-[75px] bg-[#fff] px-14 py-14 flex flex-col gap-7 w-[450px] -md:w-[90%] -md:w-[90%]">
            <div className="container flex justify-between">
              <h2 className="heading text-primary text-[32px] font-[400]">
                Delete List
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
              <span>Get Started</span>" list?
            </p>
            <p className="mt-4">
              This cannot be undone and all tasks will be lost.
            </p>
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

export default DeleteListModal;
