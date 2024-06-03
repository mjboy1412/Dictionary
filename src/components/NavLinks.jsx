import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { WordDataContext } from "../contexts/WordDataContext"

export default function NavLinks() {

    // Getting historyIcon and searchIcon from WordDataContext.
    const { historyIcon, searchIcon } = useContext(WordDataContext);

    return (
        <div className='optionBtnContainer flex'>
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
        </div>
    )
}