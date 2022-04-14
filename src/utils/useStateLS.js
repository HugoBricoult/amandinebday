
import React from "react";


const UseStateLS = (localStorageKey, initialState) => {
    const [value, setValue] = React.useState(() => {
            if(localStorageKey in localStorage){
                return JSON.parse(localStorage.getItem(localStorageKey));
            }
            else return initialState;
        }
    );

    React.useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}
export default UseStateLS;