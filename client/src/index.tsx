import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import './styles/index.scss';

import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query'

import { Provider } from 'react-redux';

import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
);