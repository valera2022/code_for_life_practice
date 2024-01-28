import React from "react";

const AppContext = React.createContext();

function AppProvider({children}){

    return (
        <AppContext.Provider value={{ }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };