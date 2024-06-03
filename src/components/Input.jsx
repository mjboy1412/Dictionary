import { useContext, useEffect, useRef } from 'react';
import { WordDataContext } from '../contexts/WordDataContext';

export default function Input() {

    const { searchIcon, word, setSearchWord, setWordData, setOutputSection } = useContext(WordDataContext)

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
            <label htmlFor="searchWord" className='flex'>
                <input type="text" name="word" id="searchWord" placeholder="Search for a word..." ref={inputRef} onKeyDown={(e) => {if (e.key === 'Enter') handleSearchBtnClick()}} />
                <button className='searchWordBtn' onClick={handleSearchBtnClick}>
                    <img src={searchIcon} alt="Search" height={20} />
                </button>
            </label>
        </div>
    );
}