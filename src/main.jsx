import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
<Auth0Provider
    domain="dev-wcczvi52uieh7zjl.us.auth0.com"
    clientId="QzJu1sRSVwaVmCBMODudETDwvI92az0q"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
);