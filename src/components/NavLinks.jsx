import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { WordDataContext } from "../contexts/WordDataContext"

export default function NavLinks() {

    // Getting historyIcon and searchIcon from WordDataContext.
    const { homeIcon, searchIcon, historyIcon } = useContext(WordDataContext);

    // State for hamburger button to track it's active or inActive stage.
    const [hamActiveState, setHamActiveState] = useState('inActive');

    // This function hides the navlinks by setting the hamActiveState to inActive.
    const hideOptionBtnContainer = () => {
        setHamActiveState('inActive');
    };

    return (
        <>
        <button 
            type='button' 
            className={`
                hamburger flex
                ${hamActiveState}
            `}
            onClick={() => {
                setHamActiveState(prevState => prevState === 'inActive' ? 'active' : 'inActive')
            }}
        >
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </button>

        <div style={{position: 'relative'}}>
            <div className='optionBtnContainer flex'>

                <li className='home'>
                    <NavLink to={'/'}
                        className={({ isActive }) => `
                            navLink flex ${isActive ? 'active' : 'inactive'}
                        `}
                        onClick={hideOptionBtnContainer}
                    >
                        <img src={homeIcon} alt="home" height={14} />
                        Home
                    </NavLink>
                </li>

                <li className='search'>
                    <NavLink to={'search'}
                        className={({ isActive }) => `
                            navLink flex ${isActive ? 'active' : 'inactive'}
                        `}
                        onClick={hideOptionBtnContainer}
                    >
                        <img src={searchIcon} alt="search" height={14} />
                        Search
                    </NavLink>
                </li>

                <li className='history'>
                    <NavLink to={'history'}
                        className={({ isActive }) => `
                            navLink flex ${isActive ? 'active' : 'inactive'}
                        `}
                        onClick={hideOptionBtnContainer}
                    >
                        <img src={historyIcon} alt="history" height={15} />
                        History
                    </NavLink>
                </li>
                
            </div>
        </div>
        </>
    )
}