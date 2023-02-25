import React, {useEffect, useState} from 'react';
import RandomNumber from './RandomNumber';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function GuessingGame() {
    const [guessAttempts, saveGuessAttempts] = useState(null);
    const [userGuess, saveUserGuess] = useState("");

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

    useEffect(() => {
        if (guessAttempts === null) {
            saveGuessAttempts(
                JSON.parse(localStorage.getItem("numOfGuesses")) || 0
            )
        }
    }, []);

    function makeTypingWork(event) {
        saveUserGuess(event.target.value)
    }

    function buttonClickEvent(event) {
            event.preventDefault();

    }

    return (
        <div>
            <h2>I am thinking of a number between 1 and 100. Guess the Lucky Number!</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" value={userGuess} placeholder="Enter Your Guess Here" onChange={makeTypingWork}/>
                    <Form.Label>You have made {guessAttempts} attempts.</Form.Label>
                    <Button type="submit">Guess</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default GuessingGame