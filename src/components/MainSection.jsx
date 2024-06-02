import { useEffect, useState } from "react";
import Input from "./Input";
import WelcomeScreen from "./WelcomeScreen";

export default function MainSection({ theme }) {

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
            console.log("Not found")
        } else {
            console.log("Your word:", data[0].word);
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
            <Input theme={theme} setWordData={setWordData} setOutputSection={setOutputSection} />
            {outputSection}
        </main>
    );
}