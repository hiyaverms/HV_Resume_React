import styled from 'styled-components';

const StyledCertifications = styled.main`
    padding: 40px;
    flex: 1;
    width: 70%;

    h3 {
        margin-bottom: 20px;
        color: #1B065E;
        border-bottom: 2px solid #DDD5E7;
        display: inline-block;
        font-size: calc(18px + 0.8vw);
        /* Add margin to the second h3 (Certifications) */
        &:not(:first-child) {
            margin-top: 40px;
        }
    }

    ul {
        list-style-type: disc;
        padding-left: 25px;
        
        li {
            margin-bottom: 20px;
            font-size: calc(14px + 0.2vw);
            line-height: 1.5;

            strong {
                color: #2A2D34;
            }

            p {
                margin-top: 5px;
                font-size: calc(13px + 0.1vw);
                opacity: 0.9;
            }
        }
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export default function Certification(){
    return(
        <StyledCertifications>
            <h3>Honors & Awards</h3>
                    <ul>
                        <li>
                            <strong>John R. Lewis Good Trouble Scholarship Recipient</strong> | JRL Foundation
                            <p>
                                Awarded to students who demonstrate a commitment to social justice and community 
                                leadership, honoring the legacy of Congressman John Lewis.
                            </p>
                        </li>
                        <li>
                            <strong>California Scholar</strong> | California Scholarship Federation
                            <p>
                                Recognized for maintaining high academic standards and community service 
                                involvement throughout the academic year.
                            </p>
                        </li>
                        <li>
                            <strong>Dean's List</strong> | Boston University (2024-2025)
                            <p>
                                Earned for maintaining a GPA of 3.5 or higher while 
                                enrolled in the Faculty of Computing & Data Sciences.
                            </p>
                        </li>
                        <li>
                            <strong>Dean's List</strong> | UC Santa Cruz (2023-2024)
                            <p>
                                Earned for maintaining a GPA of 3.8 or higher while 
                                enrolled in the Baskin School of Engineering.
                            </p>
                        </li>
                    </ul>

                    <h3>Certifications</h3>
                    <ul>
                        <li>
                            <strong>AWS Certified Cloud Practitioner</strong>
                            <p>
                                Validated knowledge of cloud fluency and foundational 
                                AWS concepts, including security, technology, and billing.
                            </p>
                        </li>
                        <li>
                            <strong>Google Data Analytics Professional Certificate</strong>
                            <p>
                                Completed rigorous training in data cleaning, analysis, 
                                and visualization using SQL, R, and Tableau.
                            </p>
                        </li>
                    </ul>
        </StyledCertifications>
    );
}
