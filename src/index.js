import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import GlobalStyles from 'styles/globalStyles';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <RecoilRoot>
        <GlobalStyles />
        <App />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
);
