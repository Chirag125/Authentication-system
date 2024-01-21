import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './App';

const root = document.getElementById('root');

const renderMethod = root.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

const render = (Component) => {
  const rootElement = (
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );

  if (root.hasChildNodes()) {
    renderMethod(rootElement, root);
  } else {
    const rootContainer = ReactDOM.createRoot(root);
    rootContainer.render(rootElement);
  }
};

render(App);
