import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

const EditListModal = ({ lists, setLists, currListName }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [listName, setListName] = useState(currListName);
  const [listError, setListError] = useState('');

  return (
    <>
      <FaEdit
        onClick={() => {
          setListName(lists.find((list) => list.isActive).name);
          setModalIsOpen(true);
        }}
        color="#cccccc"
        className="hover:cursor-pointer hover:!text-[#b6b6b6] transition-all duration-150 ease-out"
        fontSize="1.75em"
      />

      {modalIsOpen && (
        <section className="list-modal fixed top-0 left-0 h-screen w-full bg-[#000]/80 flex justify-center items-center">
          <div className="list-modal__wrapper rounded-[75px] bg-[#fff] px-14 py-14 flex flex-col gap-7 w-[450px] -md:w-[90%]">
            <div className="container flex justify-between">
              <h2 className="heading text-primary text-[32px] font-[400]">
                Edit List
              </h2>
              <FiPlus
                onClick={() => setModalIsOpen(false)}
                color="#171717"
                className="hover:!text-primary/80 hover:cursor-pointer mt-1 !rotate-[45deg] transition-all duration-150 ease-out"
                fontSize="2.4em"
              />
            </div>
            <input
              type="text"
              value={listName}
              onChange={(e) => {
                setListName(e.target.value);
                setListError(
                  e.target.value === '' ? 'Please add a list name' : ''
                );
              }}
              className="modal-input bg-tertiary w-full flex items-center rounded-[10px] px-6 mt-4 py-[14px] placeholder:text-greyText outline-none appearance-none"
              placeholder="List Name"
            />
            {listError !== '' ? (
              <p className="form-error text-red-600 mt-[-10px]">{listError}</p>
            ) : null}
            <div className="btn-wrapper flex items-center gap-5">
              <button
                onClick={() => {
                  if (listName !== '') {
                    const updatedLists = lists.map((list) => {
                      if (list.isActive) {
                        return {
                          ...list,
                          name: listName,
                        };
                      }
                      return list;
                    });
                    setLists(updatedLists);
                    setModalIsOpen(false);
                  } else {
                    setListError('Please add a list name');
                  }
                }}
                className="btn bg-primary text-[#fff] rounded-[10px] py-3 px-10 -md:px-5 border-2 border-primary transition-all duration-150 ease-out hover:bg-[#000] hover:border-[#000] flex items-center whitespace-nowrap"
              >
                Save Changes
              </button>
              <button
                onClick={() => {
                  setListName(currListName);
                  setModalIsOpen(false);
                }}
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
