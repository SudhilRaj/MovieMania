import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Movies from './components/Movies'
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import './App.css';

function App() {

  // Dark/light mode
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Optionally, persist the user's preference in local storage
    localStorage.setItem('darkMode', !darkMode ? 'dark' : 'light');
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-slate-100 dark:bg-[#120e16] min-h-screen">
        <header className="w-full pt-12 pb-4">
          <h1 className="text-[#120e16] dark:text-slate-100 text-4xl sm:text-5xl md:text-6xl text-center font-bold">Movie Mania</h1>
          <span className="absolute top-2 right-2">
            <button onClick={toggleDarkMode}>{darkMode ? <MoonIcon className="w-6 h-6 sm:w-8 sm:h-8 text-slate-100"/> : <SunIcon className="w-6 h-6 sm:w-8 sm:h-8"/>}</button>
          </span>
        </header>
        <main className="p-8 pt-0">
          <Movies />
        </main>

        <Toaster />
      </div>
		</div>
  )
}

export default App;
