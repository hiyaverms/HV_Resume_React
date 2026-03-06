import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: calc(20px + 2vh) 20px;
    background-color: #759FBC; 
    color: #FBFBF2; 
    width: 100%;

    h1 {
        font-size: calc(24px + 1vw);
    }

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