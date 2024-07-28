

import { useRoutes } from 'react-router-dom';
import './App.css';
import { Routes } from './route/Route';

function App() {
  return (
    useRoutes(Routes)
  );
}

export default App;
