import { useEffect, useState } from "react";
import Input from "./Input";
import WordResult from "./WordResult";
import WelcomeScreen from "./WelcomeScreen";

export default function MainSection({ theme }) {

    // State for word to fetch api data for the word user searched for.
    const [word, setSearchWord] = useState(null);

    // State for the word  searched by user.
    const [wordData, setWordData] = useState(null);

    // First screen when user visits the app.
    const welcomeScreen = <WelcomeScreen theme={theme} />;
    
    // The outputSection state will when user searches for any word.
    const [outputSection, setOutputSection] = useState(welcomeScreen);

    /*
        This function handles the wordData.
    */
    const handleData = (data) => {
        // If the word not found, then show error message for the word not found, else display output.
        if (data.title) {

            const errorWordNotFound = (
                <div className='error'>
                    <p className='errorTitle'>{wordData["title"]}</p>
                    <p className='errorDescription'>{wordData["message"]}</p>
                    <p className='errorResolution'>{wordData["resolution"]}</p>
                </div>
            );

            setOutputSection(errorWordNotFound);
        } else {

            const word = data[0]['word'];
            const phonetics = data[0]['phonetics'];
            const meanings = data[0]['meanings'];

            setOutputSection(<WordResult theme={theme} word={word} phonetics={phonetics} meanings={meanings} />);
        }
    };

    // Update the result view when user search for a word each time.
    useEffect(() => {
        if (wordData) {
            handleData(wordData);
        }
    }, [wordData]);

    return (
        <main className={`main ${theme}`}>
            <Input theme={theme} word={word} setSearchWord={setSearchWord} setWordData={setWordData} setOutputSection={setOutputSection} />
            {outputSection}
        </main>
    );
}

// https://www.google.com/search?q=chat