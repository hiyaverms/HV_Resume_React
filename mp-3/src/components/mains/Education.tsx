import styled from 'styled-components';

const StyledEducation = styled.main`
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

    .education-item {
        margin-bottom: 30px;

        h4 {
            color: #759FBC;
            font-size: calc(16px + 0.5vw);
            margin-bottom: 5px;
        }

        p {
            font-size: calc(14px + 0.2vw);
            margin-bottom: 10px;
        }

        ul {
            padding-left: 25px;
            margin-top: 10px;
            
            li {
                margin-bottom: 8px;
                font-size: calc(13px + 0.2vw);
                line-height: 1.4;
            }
        }
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export default function Education(){
    return(
        <StyledEducation>
            <h3>Education</h3>
                    
                    <div>
                        <h4>Data Science, B.S.</h4>
                        <p><strong>Boston University</strong> | <em>2024 - 2027</em></p>
                        <ul>
                            <li>Dean's List: Fall 2024, Spring 2025, Fall 2025</li>
                            <li>Relevant Coursework: Data Structures, Algorithms, Machine Learning, Web Development.</li>
                            <li>GPA: 3.8/4.0</li>
                        </ul>
                    </div>
                    <br></br>
                    <div>
                        <h4>High School Diploma</h4>
                        <p><strong>Moreau Catholic High School</strong> | <em>Graduated: 2023</em></p>
                        <ul>
                            <li>Graduated with Summa Cum Laude</li>
                            <li>VP and Founding Member of South Asian Student Association</li>
                        </ul>
                    </div>
        </StyledEducation>
    );
}