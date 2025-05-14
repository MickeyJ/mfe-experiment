import { createMemoryHistory } from 'history';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function
const mount = (el) => {
  const history = createMemoryHistory();
  ReactDOM.render(<App history={history} />, el);
};

// Call mount In dev and in isolation
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  devRoot && mount(devRoot);
}

// Export mount function
export { mount };
