import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

const EditTaskModal = ({ lists, setLists, taskIndex }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskError, setTaskError] = useState('');

  return (
    <>
      <FaEdit
        onClick={() => {
          setTaskError('');
          setTaskName(
            lists.find((list) => list.isActive).tasks[taskIndex].name
          );
          setModalIsOpen(true);
        }}
        color="white"
        className="hover:!opacity-80 hover:cursor-pointer transition-all duration-150 ease-out"
        fontSize="1.75em"
      />

      {modalIsOpen && (
        <section className="task-modal fixed top-0 left-0 h-screen w-full bg-[#000]/80 flex justify-center items-center">
          <div className="task-modal__wrapper rounded-[75px] bg-[#fff] px-14 py-14 flex flex-col gap-7 w-[450px] -md:w-[90%]">
            <div className="container flex justify-between">
              <h2 className="heading text-primary text-[32px] font-[400]">
                Edit Task
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
              value={taskName}
              onChange={(e) => {
                setTaskName(e.target.value);
                setTaskError(
                  e.target.value === '' ? 'Please add a task name' : ''
                );
              }}
              className="modal-input bg-tertiary w-full flex items-center rounded-[10px] px-6 mt-4 py-[14px] text-primary placeholder:text-greyText outline-none appearance-none"
              placeholder="Task Name"
            />
            {taskError !== '' ? (
              <p className="form-error text-red-600 mt-[-10px]">{taskError}</p>
            ) : null}
            <div className="btn-wrapper flex items-center gap-5">
              <button
                onClick={() => {
                  if (taskName !== '') {
                    setLists((prevLists) =>
                      prevLists.map((list) => {
                        if (list.isActive) {
                          return {
                            ...list,
                            tasks: list.tasks.map((task, index) => {
                              if (index === taskIndex) {
                                return { ...task, name: taskName };
                              }
                              return task;
                            }),
                          };
                        }
                        return list;
                      })
                    );
                    setModalIsOpen(false);
                  } else {
                    setTaskError('Please add a task name');
                  }
                }}
                className="btn bg-primary text-[#fff] rounded-[10px] py-3 px-10 -md:px-5 border-2 border-primary transition-all duration-150 ease-out hover:bg-[#000] hover:border-[#000] flex items-center whitespace-nowrap"
              >
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

export default EditTaskModal;
