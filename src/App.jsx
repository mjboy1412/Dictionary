import { useState } from 'react';
import Header from './components/Header';
import './style.css';

function App() {

    // Theme state.
    const [theme, setTheme] = useState('light');

    // This function toggle the theme state between light and dark.
    const changeTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }

  return (
    <>
    <div id='body' className={theme}>
      <Header theme={theme} changeTheme={changeTheme} />
    </div>
    </>
  )
}

export default App;
