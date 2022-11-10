import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Carper`;
    },[title])
}

export default useTitle;