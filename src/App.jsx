import { useEffect, useState } from 'react';
import Header from './components/Header';
import './style.css';
import MainSection from './components/MainSection';

function App() {

  // Getting initialUserData from local storage. If it is not present then adding default data.
  const initialUserData = JSON.parse(localStorage.getItem('userData')) || ['dark', []];

  // Initializing a state which will help to update the local storage for userData.
  let [userData, setUserData] = useState(initialUserData);

  // Theme state.
  const [theme, setTheme] = useState(userData[0]);

  // Updates the localStorage when the userData updates.
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  // Updates theme in userData when it is changed.
  useEffect(() => {
    setUserData([theme, ...userData.slice(1)]);
  }, [theme]);

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
