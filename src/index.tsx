import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import './font/fonts.css';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <CookiesProvider>
      <React.Suspense fallback={<div>Loading... </div>}>
        <App />
      </React.Suspense>
    </CookiesProvider>
  </RecoilRoot>,
);
