import React from 'react';
import { IoSearch } from 'react-icons/io5';

import NewListModal from './modals/NewListModal';

const ListManager = ({ lists, setLists, searchTerm, setSearchTerm }) => {
  return (
    <section className="list-manager rounded-[75px] bg-[#fff] px-10 py-14 flex flex-col justify-between items-center min-h-full w-[450px] -xl:w-[350px] -lg:w-full -md:px-7">
      <div className="container h-full w-full flex flex-col items-center -md:overflow-auto">
        <div className="container h-full max-h-full w-full flex flex-col items-center -md:min-h-[400px]">
          <h1 className="heading text-primary text-[62px] -md:text-[52px] font-[400]">
            To Do
          </h1>
          <div className="task-search bg-tertiary w-full flex items-center rounded-[10px] gap-2 px-3.5 mt-5">
            <IoSearch color="grey" fontSize="1.75em" />
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              className="task-search__input bg-tertiary py-[14px] placeholder:text-greyText w-full outline-none appearance-none"
              placeholder="Search for a Task"
            />
          </div>
          <div className="lists mt-12 w-full flex flex-col gap-3 mb-12 h-full overflow-auto">
            {lists.map((list, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setLists((prevLists) => {
                      return prevLists.map((item, index) => {
                        if (index === i) {
                          return { ...item, isActive: true };
                        } else {
                          return { ...item, isActive: false };
                        }
                      });
                    });
                  }}
                  className={`list ${
                    list.isActive ? 'active' : ''
                  } py-3 px-5 border-2 border-tertiary w-full flex items-center justify-between text-primary rounded-[10px]`}
                >
                  <span className="list__label">{list.name}</span>
                  <span className="list__task-count task-count flex gap-1">
                    {list.tasks.length > 0 ? (
                      <>
                        <span className="task-count__completed">
                          {list.tasks.filter((task) => task.isComplete).length}
                        </span>
                        <span className="task-count__separator">/</span>
                        <span className="task-count__total">
                          {list.tasks.length}
                        </span>
                      </>
                    ) : (
                      <span className="task-count__separator">-</span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <NewListModal lists={lists} setLists={setLists} />
      </div>
    </section>
  );
};

export default ListManager;
