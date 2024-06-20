import React, { useEffect, useState } from 'react';

import ListManager from '../components/ListManager';

import TaskManager from '../components/TaskManager';

const IndexPage = () => {
  const storedLists = localStorage.getItem('lists');
  const parsedLists = JSON.parse(storedLists);
  const [lists, setLists] = useState(parsedLists);
  const [searchTerm, setSearchTerm] = useState('');

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
