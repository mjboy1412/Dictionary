import { useState } from 'react';
import volumeDark from '../images/volume-high-dark.svg';
import volumeLight from '../images/volume-high-light.svg';

export default function WordResult({theme, word, phonetics, meanings}) {

    const volumeIcon = theme === 'light' ? volumeDark : volumeLight;

    // State for the audio index which will play when it's corresponding button is cliked.
    const [audioPlayingIndex, setAudioPlayingIndex] = useState(null);

    return (
        <div className='result'>
            <p className='word'>{word}</p>
            <div className='wordDetails'>
                <div className='phonetics flex'>
                    {
                        phonetics.map((phonetic, index) => {
                            if (phonetic["text"] && phonetic["audio"]) {
                                return (
                                    <div className='phonetic flex' key={index}>
                                        <span className='phoneticText'>{phonetic["text"]}</span>
                                        <button className='voicePlayBtn' onClick={() => {setAudioPlayingIndex(index)}}>
                                            <img src={volumeIcon} alt="Play word audio" width={20} />
                                        </button>
                                        {audioPlayingIndex === index && (<audio src={phonetic["audio"]} controls autoPlay onEnded={() => {setAudioPlayingIndex(null)}} style={{position: 'absolute', top: '-100vh'}}></audio>)}
                                    </div>
                                )
                            }
                        })
                    }
                </div>

                <div className='meaningContainer'>
                    {
                        meanings.map((meaning, index) => {

                            return (
                                <div className='meaning' key={index}>
                                    <p className='partOfSpeech'>{meaning["partOfSpeech"]}</p>
                                    {
                                        meaning["definitions"].map((definition, index) => {
                                            return (
                                                <div key={index}>
                                                    <p className='definition'>{definition["definition"]}</p>
                                                    {
                                                        definition["synonyms"].length > 0 && (<p className='synonym'><span>Synonyms: </span>{definition["synonyms"].join(',')}</p>)
                                                    }
                                                    {
                                                        definition["antonyms"].length > 0 && (<p className='antonym'><span>Antonyms: </span>{definition["antonyms"].join(',')}</p>)
                                                    }
                                                    {
                                                        definition["example"] && (<p className='example'><span>Example: </span>{definition["example"]}</p>)
                                                    }

                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}