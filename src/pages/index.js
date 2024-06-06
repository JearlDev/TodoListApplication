import * as React from 'react';

import ListManager from '../components/ListManager';
import TaskManager from '../components/TaskManager';

const links = [
  {
    text: 'Tutorial',
    url: 'https://www.gatsbyjs.com/docs/tutorial/getting-started/',
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: '#E95800',
  },
  {
    text: 'How to Guides',
    url: 'https://www.gatsbyjs.com/docs/how-to/',
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: '#1099A8',
  },
];

const IndexPage = () => {
  return (
    <main>
      <ListManager />
      <TaskManager />
    </main>
  );
};

export default IndexPage;
