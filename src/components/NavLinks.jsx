import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { WordDataContext } from "../contexts/WordDataContext"

export default function NavLinks() {

    // Getting historyIcon and searchIcon from WordDataContext.
    const { homeIcon, searchIcon, historyIcon } = useContext(WordDataContext);

    return (
        <div className='optionBtnContainer flex'>

            <li className='home'>
                <NavLink to={'/'}
                    className={({ isActive }) => `
                    navLink flex ${isActive ? 'active' : 'inactive'}
                `}
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
                >
                    <img src={historyIcon} alt="history" height={15} />
                    History
                </NavLink>
            </li>
            
        </div>
    )
}