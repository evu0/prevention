import { useState } from "react"
import { useEffect } from "react"

const PREFIX = 'screen-'

export const useLocalStorage = (key, initialValue) => {
    const prefixedkey = PREFIX + key
    const [value, setValue] = useState(()=>{
        if (typeof window !== 'undefined'){
            const jsonValue = localStorage.getItem(prefixedkey)
            console.log(jsonValue)
            if(jsonValue != null && typeof jsonValue !== 'undefined' && jsonValue != 'undefined') return JSON.parse(jsonValue)
            if(typeof initialValue === 'function'){
                return initialValue()
            }else{
                return initialValue
            }
        }
    })

    useEffect(()=>{
        localStorage.setItem(prefixedkey, JSON.stringify(value))
    }, [prefixedkey, value])

    return [value, setValue]
}