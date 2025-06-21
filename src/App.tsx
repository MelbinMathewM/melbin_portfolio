import { useEffect } from 'react';
import './App.css';
import Portfolio from './pages/portfolio';
import { Toaster } from 'react-hot-toast';

function App() {

  useEffect(() => {
    document.body.className =
      "bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300";
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Portfolio />
    </>
  )
}

export default App
