export default Projects() {
    return(
        <main id="main">
            <h3>Technical Projects</h3>
            
            <div class="project-item">
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
            <br>
            <div class="project-item">
                <h4>MoveGreen [EcoHacks]</h4>
                <p>
                    Built a web app that identifies sustainable transportation 
                    options for Boston commuters. Implemented a JavaScript backend, 
                    leveraging Google Maps API, to compute Boston-specific carbon 
                    emission estimates and deliver data-driven commute recommendations
                    to the frontend.
                </p>
            </div>

            <br/><br/><br/>
            <div id="calculator-wrapper">
                <h3>JavaScript Calculator</h3>
                <div class="calc-inputs">
                    <input type="number" id="first-number" placeholder="First Number">
                    <input type="number" id="second-number" placeholder="Second Number">
                </div>

                <div class="calc-buttons">
                    <button onclick="doAddition()">+</button>
                    <button onclick="doSubtraction()">-</button>
                    <button onclick="doMultiplication()">*</button>
                    <button onclick="doDivision()">/</button>
                    <button onclick="doPower()">**</button>
                    <button id="clear-btn" onclick="doClear()">Clear</button>
                </div>

                <div id="output-container">
                    Result: <span id="output">0</span>
                </div>
            </div>

        </main>

    );
}