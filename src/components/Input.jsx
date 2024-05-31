import searchDark from '../images/search-dark.svg';
import searchLight from '../images/search-light.svg';

export default function Input({theme}) {

    const searchIcon = theme === 'light' ? searchDark : searchLight;

    return (
        <div className='search'>
            <label htmlFor="searchWord" className={`flex ${theme}`}>
                <input type="text" name="word" id="searchWord" placeholder="Search for a word..." />
                <button className='searchWordBtn'>
                    <img src={searchIcon} alt="Search" height={20} />
                </button>
            </label>
        </div>
    );
}