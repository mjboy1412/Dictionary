import { useContext, useEffect, useRef } from 'react';
import { WordDataContext } from '../contexts/WordDataContext';
import { useSearchParams } from 'react-router-dom';

export default function Input() {

    const { searchIcon, word, setSearchWord, setWordData, setOutputSection } = useContext(WordDataContext);

    // Current URL string (query string).
    const [searchWordParam, setSearchWordParam] = useSearchParams();

    // Loader
    const loader = (
        <div className='loaderContainer flex'>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    );

    // When searchWordParam change, then update the word state to the actual word in the searchWordParam ('word' query).
    useEffect(() => {
        setSearchWord(searchWordParam.get('word'));
    }, [searchWordParam]);

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
        } else {
            setOutputSection('');
        };
    }, [word]);

    // Reference for input element.
    const inputRef = useRef();

    /*
        This function updates the searchWordParam (search query or URL of the page).
    */
    const handleSearchBtnClick = () => {
        // Getting the input element value.
        const wordToSearch = inputRef.current.value.toString();
        setSearchWordParam({'word': wordToSearch});
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
};