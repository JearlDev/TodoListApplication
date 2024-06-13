import * as React from 'react';

import ListManager from '../components/ListManager';

const IndexPage = () => {
  return (
    <main className="main-wrapper p-16 -md:p-7 bg-offWhite font-primary flex -lg:flex-col h-screen -lg:h-auto w-full 2xl:px-[10vw]">
      <ListManager />
    </main>
  );
};

export default IndexPage;
