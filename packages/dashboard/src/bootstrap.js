import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function
const mount = (el) => {
  // Create a new Vue app
  const app = createApp(Dashboard);

  // Mount the app to the provided element
  app.mount(el);
};

// Call mount In dev and in isolation
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');
  devRoot && mount(devRoot);
}

// Export mount function
export { mount };
