import * as React from 'react';

import ListManager from '../components/ListManager';
import TaskManager from '../components/TaskManager';

const IndexPage = () => {
  return (
    <main className="p-16 -md:p-7 bg-offWhite font-primary flex -lg:flex-col h-screen -lg:h-auto w-full 2xl:px-[10vw]">
      <ListManager />
      <TaskManager />
    </main>
  );
};

export default IndexPage;
