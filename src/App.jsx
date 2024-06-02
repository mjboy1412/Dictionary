import { useState } from 'react';
import Header from './components/Header';
import './style.css';
import MainSection from './components/MainSection';

function App() {

    // Theme state.
    const [theme, setTheme] = useState('dark');

    // This function toggle the theme state between light and dark.
    const changeTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }

  return (
    <>
    <div id='body' className={`${theme} flex`}>
      <Header theme={theme} changeTheme={changeTheme} />
      <MainSection theme={theme} />
    </div>
    </>
  )
}

export default App;
