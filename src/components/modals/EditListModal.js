import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const EditListModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <FaEdit
        onClick={() => setModalIsOpen(true)}
        color="grey"
        fontSize="1.75em"
      />

      {modalIsOpen && (
        <section className="list-modal fixed top-0 left-0 h-screen w-full bg-[#000]/80 flex justify-center items-center">
          <div className="list-modal__wrapper rounded-[75px] bg-[#fff] px-14 py-14 flex flex-col gap-7 w-[450px]">
            <div className="container flex justify-between">
              <h2 className="heading text-primary text-[32px] font-[400]">
                Edit List
              </h2>
              <FiPlus
                onClick={() => setModalIsOpen(false)}
                color="#171717"
                className="hover:!text-primary/90 mt-1 !rotate-[45deg] transition-all duration-150 ease-out"
                fontSize="2.4em"
              />
            </div>
            <input
              type="text"
              className="modal-input bg-tertiary w-full flex items-center rounded-[10px] px-6 mt-4 py-[14px] placeholder:text-greyText outline-none appearance-none"
              placeholder="List Name"
            />
            <div className="btn-wrapper flex items-center gap-5">
              <button className="btn bg-primary text-[#fff] rounded-[10px] py-3 px-10 border-2 border-primary transition-all duration-150 ease-out hover:bg-[#000] hover:border-[#000] flex items-center">
                Save Changes
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

export default EditListModal;
