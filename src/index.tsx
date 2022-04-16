import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom/client';
import { Nav } from './common/nav/Nav';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

function App(): ReactElement {
  return <Nav />;
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
