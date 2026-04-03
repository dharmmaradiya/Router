import React, { useState, useEffect } from 'react'

export default function Card() {
    const [state, setState] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVFcHomD2zO6yDBmTzAUuV1SwyF0X5y9u9BQ&s");

    useEffect(() => {
        console.log("Card Component Mounted");
        return () => {
            alert("Card Component Unmounted");
        }

    }, []);
   

    return (
        <div className='container'>
            <div className="card">

                <h1>Card Component 1</h1>
                <img src={state} style={{ width: "500px" }}></img>
            </div>
            <button onClick={() => setState("https://img.pikbest.com/ai/illus_our/20230423/1b1d6bc39f3aec8938f9b82dfb75a6a4.jpg!w700wp")} className='btn'>Change Image</button>
            <button onClick={() => setState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVFcHomD2zO6yDBmTzAUuV1SwyF0X5y9u9BQ&s")} className='btn'>Prev Image</button>
        </div>
    )
}