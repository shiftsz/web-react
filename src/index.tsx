import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import StoreProvider from './store/StoreProvider';
import RtlProvider from './theme/RtlProvider';
import RouterProvider from './router/RouterProvider';
import ThemeProvider from './theme/ThemeProvider';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <StoreProvider>
    <ThemeProvider>
      <RtlProvider>
        <RouterProvider>
          <App />
        </RouterProvider>
      </RtlProvider>
    </ThemeProvider>
  </StoreProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
