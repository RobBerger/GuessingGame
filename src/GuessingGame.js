import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import './App.css';

function GuessingGame() {
    const [guessAttempts, saveGuessAttempts] = useState(null);
    const [userGuess, saveUserGuess] = useState("");
    const [ hint, generateHint ] = useState("Try To Guess The Number");

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
            let fixedNumber = parseInt(userGuess);
            saveGuessAttempts(guessAttempts + 1);
            localStorage.setItem("numOfGuesses", JSON.stringify(guessAttempts + 1))

            if ( fixedNumber === randomNumber ) {
                generateHint("You guessed the Lucky Number")
            } else if ( fixedNumber > randomNumber ) {
                generateHint("Your guess is to high")
            } else if ( fixedNumber < randomNumber ) {
                generateHint("Your guess is to low")
            } else {
                generateHint("Enter Only A Number")
            }
    }

function wipeLocalStorage() {
    saveGuessAttempts(0);
    saveUserGuess("");
    generateHint("Try To Guess The Number");
    saveRandomNumber(makeRandomNum());
    localStorage.removeItem("numOfGuesses");
}

    return (
        <div>
            <h3 className='upperhead'>I am thinking of a number between 1 and 100.</h3>
            <br />
            <h3 className='lowerhead'>Guess the Lucky Number!</h3>
            <div className='appContainer'>
            <Form onSubmit={buttonClickEvent}>
                <Form.Group>
                    <Row className='align-items-center'>
                    <Form.Control type="text" value={userGuess} placeholder="Enter Your Guess Here" onChange={makeTypingWork}/><Button type="submit">Guess</Button>
                    </Row>
                </Form.Group>
                <Form.Label>{hint}</Form.Label>
                <Form.Label>You have made {guessAttempts} guesses.</Form.Label>
            </Form>
            <Button onClick={wipeLocalStorage} type="button">Reset</Button>
            </div>
        </div>
    )
}

export default GuessingGame