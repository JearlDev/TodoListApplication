import React, { useState } from 'react';

import { TiTick } from 'react-icons/ti';

import DeleteListModal from './modals/DeleteListModal';
import EditListModal from './modals/EditListModal';

import DeleteTaskModal from './modals/DeleteTaskModal';
import EditTaskModal from './modals/EditTaskModal';
import NewTaskModal from './modals/NewTaskModal';

const TaskManager = () => {
  const [tasks, setTasks] = useState(false);

  // const handleCompletedTask = (e) => {
  //   document.querySelectorAll('.task').forEach((task) => {
  //     task.classList.remove('complete');
  //   });
  //   e.classList.toggle('complete');
  // };

  return (
    <section className="task-manager w-[calc(100%-450px)] -xl:w-[calc(100%-350px)] -lg:w-full flex flex-col py-14 px-14 pl-20 -lg:pl-14 -lg:pt-16 -md:px-0 -md:pt-14">
      <div className="container w-full flex justify-between items-center ">
        <h2 className="heading text-primary text-[32px] font-[400] whitespace-nowrap -xl:text-[30px] -md:text-[24px]">
          Get Started
        </h2>
        <div className="container flex items-center gap-7 @xl:gap-4 -md:gap-3">
          <div className="container flex justify-end gap-3 @xl:gap-2 -md:gap-1.5">
            <EditListModal />
            <DeleteListModal />
          </div>
          <NewTaskModal />
        </div>
      </div>
      <div className="tasks w-full flex flex-col mt-14 gap-3">
        <div className="task bg-primary text-[#fff] rounded-[10px] py-3 px-6 border-2 border-primary transition-all duration-150 ease-out flex justify-between items-center">
          <div className="container flex gap-4 items-center hover:cursor-pointer">
            <div className="task__checkbox h-5 w-5 bg-[#fff] rounded-[5px]"></div>
            <div className="task__name text-[#fff]">Do this thing</div>
          </div>
          <div className="container flex gap-3 justify-end items-center">
            <EditTaskModal />
            <DeleteTaskModal />
          </div>
        </div>
        <div className="task complete bg-primary text-[#fff] rounded-[10px] py-3 px-6 border-2 border-primary transition-all duration-150 ease-out flex justify-between items-center">
          <div className="container flex gap-4 items-center hover:cursor-pointer">
            {/* <div className="task__checkbox h-5 w-5 bg-[#fff] rounded-[5px]"></div> */}
            <TiTick color="white" fontSize="1.9em" className="mx-[-5px]" />
            <div className="task__name text-[#fff] line-through">
              Do this thing
            </div>
          </div>
          <div className="container flex gap-3 justify-end items-center">
            <EditTaskModal />
            <DeleteTaskModal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskManager;
