import React from 'react'
import AppContext from './AppContext'

const AppState = (props) => {

    const contextDataValue = {}
    return (
        <AppContext.Provider value={contextDataValue}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState