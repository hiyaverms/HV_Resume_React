import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%; 
    background-color: #1B065E; 
    padding: 15px;
    min-height: 100%;

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    li {
        width: 100%;
    }

    a {
        text-decoration: none;
        color: #FBFBF2;
        display: block;
        padding: 15px;
        border-radius: 8px;
        text-align: center;
        font-weight: bold;
        font-size: calc(14px + 0.5vw);
        transition: all 0.3s ease;

        &:hover {
            background-color: #759FBC;
            color: white;
            transform: scale(1.02);
        }
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        min-height: auto;
        
        ul {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }

        li {
            width: auto;
        }
    }
`;

export default function Nav(){
    return(
        <StyledNav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experiences">Experiences</Link></li>
                <li><Link to="/certifications">Certifications</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/documents">Documents</Link></li>
            </ul>
        </StyledNav>
    );
}