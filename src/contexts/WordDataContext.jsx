import React from 'react';

// Create a context
const WordDataContext = React.createContext();

// Provider component
const WordDataContextProvider = ({ children, value }) => {
    return (
        <WordDataContext.Provider value={value}>
            {children}
        </WordDataContext.Provider>
    );
};

export { WordDataContext, WordDataContextProvider };