import React from 'react';
import { createMemoryHistory, createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  onNavigate && history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// Call mount In dev and in isolation
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  devRoot && mount(devRoot, { defaultHistory: createBrowserHistory() });
}

// Export mount function
export { mount };
