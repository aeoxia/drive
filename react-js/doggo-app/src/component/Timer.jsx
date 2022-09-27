import { useEffect } from "react"
import { useState } from "react"

const Timer = () => {
    const [counter, setCounter] = useState(0)
    const [number, setNumber] = useState(1)

    // console.log('this is the drawing board and number == ', number)
    useEffect(() => {
        console.log('this is the drawing board and number == ', number)
    }, [])

   

    const tapCounter = function() {
        setCounter(prev => prev + 1)
    }

    return (
    	<div>
        	number: {number}
           <div>
                <button type="button" onClick={buttonClick}>tap me</button>
                <button type="button" onClick={tapCounter}>tap counter</button>
           </div>
        </div>
    )
}

export default Timer