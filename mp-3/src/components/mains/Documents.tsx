import styled from 'styled-components';

const StyledDocs = styled.main`
    padding: 40px;
    flex: 1;
    width: 70%;

    h3 {
        margin-bottom: 20px;
        color: #1B065E;
        border-bottom: 2px solid #DDD5E7;
        display: inline-block;
        font-size: calc(18px + 0.8vw);

        &:not(:first-child) {
            margin-top: 40px;
        }
    }

    p {
        font-size: calc(14px + 0.2vw);
        margin-bottom: 15px;
        line-height: 1.5;
    }

    ul {
        list-style-type: none; /* Removing default bullets for a cleaner look */
        padding-left: 0;
        
        li {
            background-color: #FBFBF2;
            margin-bottom: 10px;
            padding: 10px 15px;
            border-left: 5px solid #759FBC;
            border-radius: 4px;
            font-size: calc(14px + 0.2vw);
            transition: transform 0.2s ease;
            cursor: pointer;

            &:hover {
                transform: translateX(5px);
                background-color: #DDD5E7;
            }
        }
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export default function Documents() {
    return(
        <StyledDocs>
            <h3>Downloadable Documents</h3>
                    <p>Please find my resume and transcripts below:</p>
                    
                    <ul>
                        <li>Resume</li>
                        <li>Detailed CV</li>
                        <li>Cover Letter</li>
                        <li>Fall 2025 Official Transcript</li>
                    </ul>
                    
                    <br/>
                    <h3>References</h3>
                    <p>References are available upon request.</p>
        </StyledDocs>
    )
}