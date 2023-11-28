import React from 'react';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from 'react-redux';
import Store from './utils/Store';
import { appRoutes } from './components/Routes/routes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
      <>
      <Provider store={Store} >
         <RouterProvider router={appRoutes} />
         
      </Provider>

        
      </>
  );
}

export default App;
