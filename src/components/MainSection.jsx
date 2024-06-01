import { useEffect, useState } from "react";
import Input from "./Input";

export default function MainSection({theme}) {

    // State for the word  searched by user.
    const [wordData, setWordData] = useState(null);

    /*
        This function handles the wordData.
    */
    const handleData = (data) => {
        if (data.title) {
            console.log("Not found")
        } else {
            console.log("Your word:", data[0].word);
        }
    }

    // Update the result view when user search for a word each time.
    useEffect(() => {
        if (wordData) {
            handleData(wordData);
        }
    }, [wordData]);

    return (
        <main className={`main ${theme}`}>
            <Input theme={theme} setWordData={setWordData} />
        </main>
    );
}