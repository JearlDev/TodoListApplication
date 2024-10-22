import React, { useEffect, useState } from 'react';

import ListManager from '../components/ListManager';

import TaskManager from '../components/TaskManager';

const IndexPage = () => {
  const [lists, setLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedLists =
      typeof window !== `undefined` && localStorage.getItem('lists');
    const parsedLists = JSON.parse(storedLists);

    if (parsedLists && parsedLists.length > 0) {
      setLists(parsedLists);
    } else {
      setLists([
        {
          name: 'Example List',
          isActive: 'true',
          tasks: [{ name: 'Example Task', isComplete: false }],
        },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);
  return (
    <main className="main-wrapper p-16 -md:p-7 bg-offWhite font-primary flex -lg:flex-col h-screen -lg:h-auto w-full 2xl:px-[10vw]">
      <ListManager
        lists={lists}
        setLists={setLists}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <TaskManager
        lists={lists}
        setLists={setLists}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </main>
  );
};

export default IndexPage;
