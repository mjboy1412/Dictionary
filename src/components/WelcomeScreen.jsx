
export default function WelcomeScreen({theme, setSearchWord}) {

    // Array of objects for initial word cards.
    const wordCards = [
        {
            title: `Hello`,
            definition: `A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.`
        },
        {
            title: `Genius`,
            definition: `Someone possessing extraordinary intelligence or skill; especially somebody who has demonstrated this by a creative or original work in science, music, art etc.`
        },
        {
            title: `Welcome`,
            definition: `The act of greeting someone’s arrival.`
        },
        {
            title: `Mistake`,
            definition: `An error; a blunder.`
        }
    ];

    return (
        <>
        <div className='welcome'>
            {
                wordCards.map((card, index) => (
                    <div className={`wordCard ${theme}`} key={index}>
                        <p className='title'>{card["title"]}</p>
                        <p className='welcomeWordDefinition'>{card["definition"]}</p>
                        <button type='button' className='knowMoreBtn' onClick={() => {setSearchWord(card["title"])}}>Know More</button>
                    </div>
                ))
            }
        </div>
        </>
    )
}