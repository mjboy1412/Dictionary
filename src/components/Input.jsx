import { useEffect, useRef } from 'react';
import searchDark from '../images/search-dark.svg';
import searchLight from '../images/search-light.svg';

export default function Input({theme, word, setSearchWord, setWordData, setOutputSection}) {

    // Set search icon image according to theme.
    const searchIcon = theme === 'light' ? searchDark : searchLight;

    const loader = (
        <div className='loaderContainer flex'>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    );

    // This useEffect will create a side effect when the word state is changed, means when user search for a word.
    useEffect(() => {

        if (word) {
            setOutputSection(loader)
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

            fetch(url)
            .then(response => response.json())
            .then(data => setWordData(data))
            .catch(err => {
                console.log('Error:', err);
                const fetchError = (
                    <div>
                        <p className='fetchError'>Something went wrong, try again... 😬</p>
                    </div>
                );
                setOutputSection(fetchError);
            });
        }
    }, [word]);

    // Reference for input element.
    const inputRef = useRef();

    /*
        This function updates the word state.
    */
    const handleSearchBtnClick = () => {
        // Getting the input element value.
        const wordToSearch = inputRef.current.value.toString();
        setSearchWord(wordToSearch);
    }

    return (
        <div className='search'>
            <label htmlFor="searchWord" className={`flex ${theme}`}>
                <input type="text" name="word" id="searchWord" placeholder="Search for a word..." ref={inputRef} onKeyDown={(e) => {if (e.key === 'Enter') handleSearchBtnClick()}} />
                <button className='searchWordBtn' onClick={handleSearchBtnClick}>
                    <img src={searchIcon} alt="Search" height={20} />
                </button>
            </label>
        </div>
    );
}