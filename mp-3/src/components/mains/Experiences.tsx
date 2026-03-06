import styled from 'styled-components';

const StyledExperiences = styled.main`
    padding: 40px;
    flex: 1;
    width: 70%;

    /* Header styling consistent with your other pages */
    h3 {
        margin-bottom: 20px;
        color: #1B065E;
        border-bottom: 2px solid #DDD5E7;
        display: inline-block;
        font-size: calc(18px + 0.8vw);
    }

    /* Target each job block */
    .job-section {
        margin-bottom: 30px;

        h4 {
            color: #759FBC; /* Steel Blue */
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

export default function Experiences() {
    return(
        <StyledExperiences>
            <h3>Employment History</h3>
                    
                    <div>
                        <h4>Data Science Intern</h4>
                        <p><strong>Careflick AI</strong> | <em>May 2025 - August 2025</em></p>
                        <ul>
                            <li>Developed an analytics dashboard in JavaScript to help the team 
                                understand user usage patterns
                            </li>

                            <li>Tested and fine tuned AI companions using OpenAI API, Cartesia AI, 
                                and ElevenLabs to enhance user experience
                            </li>

                            <li>Automated translation of conversation transcripts into English for 
                                analysis of usage patterns
                            </li>

                            <li>
                                Presented usage analytics in daily meetings to the Tech & GTM teams
                            </li>
                        </ul>
                    </div>
                    <br/>
                    <div>
                        <h4>CalTeach Intern</h4>
                        <p><strong>University of California, Santa Cruz CalTeach</strong> | <em>December 2023 - June 2024</em></p>
                        <ul>
                            <li> 
                                Taught 6th, 7th, and 8th grade students geometry and algebra at 
                                Santa Cruz public schools semiweekly
                            </li>

                            <li>
                                Collaborated with educators and administrators about lesson 
                                planning and classroom management
                            </li>

                            <li>
                                Coordinated CalTeach quarterly events and alumni outreach
                            </li>
                        </ul>
                    </div>
        </StyledExperiences>
    );
}