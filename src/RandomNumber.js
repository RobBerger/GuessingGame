import React from 'react';

function RandomNumber() {
    const [ randomNumber, setRandomNumber ] = useState('null');

    function makeRandomNum() {
        let randomNum = Math.floor(Math.random() * 100);
        localStorage.setItem("randomNum", JSON.stringify(randomNum));
        return randomNum
    }
}

export default RandomNumber