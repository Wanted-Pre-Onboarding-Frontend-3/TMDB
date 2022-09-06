import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import GlobalStyles from 'styles/globalStyles';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyles />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);
