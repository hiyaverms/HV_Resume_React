import { useState } from 'react';
import styled from 'styled-components';

const StyledProjects = styled.main`
    padding: 40px;
    flex: 1;
    width: 70%;

    h3 {
        margin-bottom: 20px;
        color: #1B065E;
        border-bottom: 2px solid #DDD5E7;
        display: inline-block;
        font-size: calc(18px + 0.8vw);
    }

    .project-item {
        margin-bottom: 20px;
        
        h4 {
            color: #759FBC;
            margin-bottom: 5px;
        }
        
        p {
            font-size: calc(14px + 0.2vw);
            line-height: 1.5;
        }
    }

    /* calculator stuff*/
    #calculator-wrapper {
        background-color: #DDD5E7;
        padding: calc(10px + 2vw);
        border-radius: 10px;
        max-width: 500px;
        margin: 40px auto; 
        text-align: center;

        h3 {
            border-bottom: none; 
        }
    }

    .calc-inputs {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;

        input {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #1B065E;
            font-size: calc(14px + 0.5vw);
        }
    }

    .calc-buttons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        margin-bottom: 20px;

        button {
            padding: 15px;
            background-color: #1B065E;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: calc(16px + 0.5vw);

            &:hover {
                background-color: #759FBC;
            }
        }

        #clear-btn {
            background-color: #2A2D34;
        }
    }

    #output-container {
        font-size: calc(18px + 1vw);
        font-weight: bold;
        padding: 15px;
        background-color: #FBFBF2;
        border-radius: 5px;
        color: #1B065E;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
    }

    @media screen and (max-width: 500px) {
        .calc-buttons {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

export default function Projects() {
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [result, setResult] = useState<number | string>(0);

    const first = Number(num1);
    const second = Number(num2);

    const doAddition = () => setResult(first + second);
    const doSubtraction = () => setResult(first - second);
    const doMultiplication = () => setResult(first * second);
    const doDivision = () => setResult(first / second);
    
    const doPower = () => {
        if (second < 0) {
            setResult("Positive exponents only");
        } else {
            let res = 1;
            for (let i = 0; i < second; i++) {
                res = res * first;
            }
            setResult(res);
        }
    };

    const doClear = () => {
        setNum1("");
        setNum2("");
        setResult(0);
    };

    return(
        <>
          <title>Home | Resume</title>
            <StyledProjects>
                <h3>Technical Projects</h3>
                
                <div className="project-item">
                    <h4>EatSmart [BostonHacks]</h4>
                    <p>
                        Created a food waste reduction web app that 
                        uses computer vision to detect ingredients 
                        from photos or videos of a fridge and recommend 
                        recipes tailored to dietary preferences. Built 
                        using Python backend for ingredient extraction, 
                        implementing confidence based classification logic 
                        to dynamically inform frontend decisions, aiming 
                        to optimize the user experience
                    </p>
                </div>
                <div className="project-item">
                    <h4>MoveGreen [EcoHacks]</h4>
                    <p>
                        Built a web app that identifies sustainable transportation 
                        options for Boston commuters. Implemented a JavaScript backend, 
                        leveraging Google Maps API, to compute Boston-specific carbon 
                        emission estimates and deliver data-driven commute recommendations
                        to the frontend.
                    </p>
                </div>

                <div id="calculator-wrapper">
                    <h3>JavaScript Calculator</h3>
                    <div className="calc-inputs">
                        <input 
                            type="number" 
                            placeholder="First Number"
                            value={num1}
                            onChange={(e) => setNum1(e.target.value)} 
                        />
                        <input 
                            type="number" 
                            placeholder="Second Number"
                            value={num2}
                            onChange={(e) => setNum2(e.target.value)} 
                        />
                    </div>

                    <div className="calc-buttons">
                        <button onClick={doAddition}>+</button>
                        <button onClick={doSubtraction}>-</button>
                        <button onClick={doMultiplication}>*</button>
                        <button onClick={doDivision}>/</button>
                        <button onClick={doPower}>**</button>
                        <button id="clear-btn" onClick={doClear}>Clear</button>
                    </div>

                    <div id="output-container">
                        Result: <span 
                            id="output" 
                            style={{ color: typeof result === 'number' && result < 0 ? 'red' : 'inherit' }}
                        >
                            {result}
                        </span>
                    </div>
                </div>

            </StyledProjects>
        </>
    );
}