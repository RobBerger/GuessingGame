import React from 'react';
import RandomNumber from './RandomNumber';

function GuessingGame() {


    return (
        <div>
            <h2>I am thinking of a number between 1 and 100. Guess the Lucky Number!</h2>
            <RandomNumber />
        </div>
    )
}

export default GuessingGame