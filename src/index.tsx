import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Router from './providers/Router';
import Theme from './providers/Theme';
import Store from './providers/Store';
import RightToLeft from './providers/RightToLeft';
import Localization from './providers/Localization';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Store>
    <Theme>
      <RightToLeft>
        <Localization>
          <Router>
            <App />
          </Router>
        </Localization>
      </RightToLeft>
    </Theme>
  </Store>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
