import { useState } from "react"

function useLocalStorage(key) {

    const [state, changeState] = useState(() => {
        let user = JSON.parse(localStorage.getItem(key))
        
        if (!user) { return undefined }
        return user

    })

    function changeUserState(data) {
        localStorage.setItem(key,JSON.stringify(data))
        changeState(data)
    }

    return [
        state,
        changeUserState,
        ]

}

export default useLocalStorage