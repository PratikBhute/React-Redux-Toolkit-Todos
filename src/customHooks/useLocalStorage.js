import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        const current = window.localStorage.getItem(key);
        if (current) {
            setItem(JSON.parse(current))
        } else {
            window.localStorage.setItem(key, JSON.stringify(defaultValue));
            setValue(defaultValue);
        }

    }, [])
    function updateVAlue(newValue){
        setValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));

    }

        return [value, updateVAlue];

}