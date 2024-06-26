import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const NewTaskModal = ({ lists, setLists, activeList }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskError, setTaskError] = useState('');

  return (
    <>
      <button
        onClick={() => setModalIsOpen(true)}
        className="btn bg-primary text-[#fff] rounded-[10px] py-3 px-10 @xl:px-6 -md:px-4 border-2 border-primary transition-all duration-150 ease-out hover:bg-[#000] hover:border-[#000] flex gap-1.5 items-center"
      >
        <FiPlus color="white" fontSize="1.35em" />
        <span className="btn__text whitespace-nowrap">
          <span className="-md:hidden">New</span> Task
        </span>
      </button>
      {modalIsOpen && (
        <section className="list-modal fixed top-0 left-0 h-screen w-full bg-[#000]/80 flex justify-center items-center">
          <div className="list-modal__wrapper rounded-[75px] bg-[#fff] px-14 py-14 flex flex-col gap-7 w-[450px] -md:w-[90%]">
            <div className="container flex justify-between">
              <h2 className="heading text-primary text-[32px] font-[400]">
                New Task
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
              onChange={(e) => {
                setTaskName(e.target.value);
                setTaskError(
                  e.target.value === '' ? 'Please add a task name' : ''
                );
              }}
              className="modal-input bg-tertiary w-full flex items-center rounded-[10px] px-6 mt-4 py-[14px] placeholder:text-greyText outline-none appearance-none"
              placeholder="List Name"
            />
            {taskError !== '' ? (
              <p className="form-error text-red-600 mt-[-10px]">{taskError}</p>
            ) : null}
            <div className="btn-wrapper flex items-center gap-5">
              <button
                onClick={() => {
                  if (activeList && taskName !== '') {
                    // Create a new task object
                    const newTask = {
                      name: taskName,
                      isComplete: false,
                    };

                    // Update the tasks array for the active list
                    setLists((prevLists) => {
                      return prevLists.map((list) => {
                        if (list.isActive) {
                          return {
                            ...list,
                            tasks: [...(list.tasks || []), newTask], // Add new task to the tasks array
                          };
                        }
                        return list;
                      });
                    });
                    setTaskName('');
                    setModalIsOpen(false);
                  } else {
                    setTaskError('Please add a task name');
                    console.error('No active list found');
                  }
                }}
                className="btn bg-primary text-[#fff] rounded-[10px] py-3 px-10 border-2 border-primary transition-all duration-150 ease-out hover:bg-[#000] hover:border-[#000] flex items-center"
              >
                Create
              </button>
              <button
                onClick={() => {
                  setTaskName('');
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

export default NewTaskModal;
