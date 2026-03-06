import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 2vw;
    background-color: #1B065E; 
    color: #FBFBF2; 

    @media screen and (max-width: 1000px) {
        align-items: center;
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Hiya Verma</h1>
            <p>My Resume</p>
        </StyledHeader>
    );
}