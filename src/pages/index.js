import * as React from 'react';

import ListManager from '../components/ListManager';
import TaskManager from '../components/TaskManager';

const IndexPage = () => {
  return (
    <main className="p-16 bg-offWhite font-primary">
      <ListManager />
      <TaskManager />
    </main>
  );
};

export default IndexPage;
