import * as React from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';

const ListManager = () => {
  const handleActiveList = (e) => {
    document.querySelectorAll('.list').forEach((list) => {
      list.classList.remove('active');
    });
    e.classList.toggle('active');
  };

  return (
    <section className="list-manager rounded-[75px] bg-[#fff] px-10 py-14 flex flex-col justify-between items-center min-h-full w-[450px]">
      <div className="element-wrapper w-full flex flex-col items-center">
        <h1 className="heading heading--lg text-primary text-[62px] font-[400]">
          To Do
        </h1>
        <div className="task-search bg-tertiary w-full flex items-center rounded-[10px] gap-2 px-3.5 mt-5">
          <IoSearch color="grey" fontSize="1.75em" />
          <input
            type="search"
            className="task-search__input bg-tertiary py-3 placeholder:text-greyText w-full outline-none appearance-none"
            placeholder="Search for a Task"
          />
        </div>
        <div className="lists mt-12 w-full flex flex-col gap-3">
          <div
            onClick={(e) => handleActiveList(e.currentTarget)}
            className="list active py-3 px-5 border-2 border-tertiary w-full flex items-center justify-between text-primary rounded-[10px]"
          >
            <span className="list__label">Get Started</span>
            <span className="list__task-count task-count flex gap-1">
              <span className="task-count__completed">0</span>
              <span className="task-count__separator">/</span>
              <span className="task-count__total">10</span>
            </span>
          </div>
          <div
            onClick={(e) => handleActiveList(e.currentTarget)}
            className="list py-3 px-5 border-2 border-tertiary w-full flex items-center justify-between text-primary rounded-[10px]"
          >
            <span className="list__label">FE Maintenance</span>
            <span className="list__task-count task-count flex gap-1">
              <span className="task-count__completed"></span>
              <span className="task-count__separator">-</span>
              <span className="task-count__total"></span>
            </span>
          </div>
        </div>
      </div>
      <button className="btn add-task bg-primary text-[#fff] rounded-[10px] py-3 px-10 border-2 border-primary transition-all duration-150 ease-out hover:bg-transparent hover:text-primary group flex gap-1.5 items-center">
        <FiPlus
          color="white"
          className="group-hover:!text-primary transition-all duration-150 ease-out"
          fontSize="1.35em"
        />
        <span className="btn__text">New List</span>
      </button>
    </section>
  );
};

export default ListManager;
