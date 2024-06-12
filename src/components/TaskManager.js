import React, { useEffect, useState } from 'react';

import { TiTick } from 'react-icons/ti';

import DeleteListModal from './modals/DeleteListModal';
import EditListModal from './modals/EditListModal';

import DeleteTaskModal from './modals/DeleteTaskModal';
import EditTaskModal from './modals/EditTaskModal';
import NewTaskModal from './modals/NewTaskModal';

const TaskManager = ({ lists, setLists }) => {
  const [activeList, setActiveList] = useState(
    lists.find((list) => list.isActive)
  );

  useEffect(() => {
    setActiveList(lists.find((list) => list.isActive));
  }, [lists]);

  const handleTaskClick = (taskIndex) => {
    setLists((prevLists) => {
      return prevLists.map((list) => {
        if (list === activeList) {
          const updatedTasks = list.tasks.map((task, i) => {
            if (i === taskIndex) {
              return { ...task, isComplete: !task.isComplete };
            }
            return task;
          });
          return { ...list, tasks: updatedTasks };
        }
        return list;
      });
    });
  };

  if (activeList) {
    return (
      <section className="task-manager w-[calc(100%-450px)] -xl:w-[calc(100%-350px)] -lg:w-full flex flex-col py-14 px-14 pl-20 -lg:pl-14 -lg:pt-16 -md:px-0 -md:pt-14">
        <div className="container w-full flex justify-between items-center ">
          <h2 className="heading text-primary text-[32px] font-[400] whitespace-nowrap -xl:text-[30px] -md:text-[24px]">
            {activeList.name}
          </h2>
          <div className="container flex items-center gap-7 @xl:gap-4 -md:gap-3">
            <div className="container flex justify-end gap-3 @xl:gap-2 -md:gap-1.5">
              <EditListModal
                lists={lists}
                setLists={setLists}
                currListName={activeList.name}
              />
              <DeleteListModal
                lists={lists}
                setLists={setLists}
                activeList={activeList}
              />
            </div>
            <NewTaskModal
              lists={lists}
              setLists={setLists}
              activeList={activeList}
            />
          </div>
        </div>
        <div className="tasks w-full flex flex-col mt-14 -md:mt-10 gap-3">
          {activeList.tasks.length > 0 &&
            activeList.tasks.map((task, i) => {
              return (
                <div
                  key={i}
                  className={`task bg-primary text-[#fff] rounded-[10px] py-3 px-6 border-2 border-primary transition-all duration-150 ease-out flex justify-between items-center ${
                    task.isComplete ? 'complete' : ''
                  }`}
                >
                  <div
                    onClick={() => handleTaskClick(i)}
                    className="container group flex gap-4 items-center hover:cursor-pointer"
                  >
                    {task.isComplete ? (
                      <TiTick
                        color="white"
                        fontSize="1.9em"
                        className="mx-[-5px]"
                      />
                    ) : (
                      <div className="task__checkbox group-hover:opacity-80 transition-all duration-150 ease-out h-5 w-5 bg-[#fff] rounded-[5px]"></div>
                    )}

                    <div
                      className={`task__name text-[#fff] group-hover:text-white/80 transition-all duration-150 ease-out ${
                        task.isComplete ? 'line-through' : ''
                      }`}
                    >
                      {task.name}
                    </div>
                  </div>
                  <div className="container flex gap-3 justify-end items-center">
                    {!task.isComplete && (
                      <EditTaskModal
                        lists={lists}
                        setLists={setLists}
                        taskIndex={i}
                      />
                    )}
                    <DeleteTaskModal
                      lists={lists}
                      setLists={setLists}
                      taskIndex={i}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
};

export default TaskManager;
