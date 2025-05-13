import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// Call mount In dev and in isolation
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  devRoot && mount(devRoot);
}

// Export mount function
export { mount };
