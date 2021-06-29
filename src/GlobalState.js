import React ,{createContext,useState} from 'react'


export const GlobalState = createContext()

export const Dataprovider =({children})=>{
    return (


            <GlobalState.Provider value={"Value"}>


                {children}

            </GlobalState.Provider>

    )
}