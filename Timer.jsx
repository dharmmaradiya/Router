import React, { useState, useEffect } from 'react'

export default function Timer() {
    const [time, setTime] = useState(0);

   

    useEffect(() => {
         setTimeout(() => {
            setTime((prevtime) => prevtime + 1)
        }, 1000)
        
    }, [time])
    return (
        <div className='container'>
            <h1>Timer: {time}</h1>
        </div>
    )
}