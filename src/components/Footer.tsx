import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #1B065E;
    color: #FBFBF2;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
        color: #759FBC;
        text-decoration: none;
        &:hover { text-decoration: underline; }
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <StyledFooter>
            <p>
                All Rights Reserved by Hiya Verma 
                <Link to="/credits"> Credits</Link> © {currentYear}
            </p>
        </StyledFooter>
    );
}