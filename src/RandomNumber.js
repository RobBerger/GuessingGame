import React, { useState, useEffect } from 'react';

const RandomNumber = () => {
    const [ randomNumber, saveRandomNumber ] = useState(null);

    useEffect(() => {
        if (randomNumber === null) {
            saveRandomNumber(
                JSON.parse(localStorage.getItem("randomNum")) || makeRandomNum()
            )
        }
    }, []);

    function makeRandomNum() {
        let randomNum = Math.floor(Math.random() * 100);
        localStorage.setItem("randomNum", JSON.stringify(randomNum));
        return randomNum
    }
    return <p>{randomNumber}</p>
    
}

export default RandomNumber