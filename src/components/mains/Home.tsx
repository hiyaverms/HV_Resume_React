import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledHome = styled.main`
  padding: 40px;
  width: 70%; 
  flex: 1;

  h3 {
    margin-bottom: 20px;
    color: #1B065E;
    border-bottom: 2px solid #DDD5E7;
    display: inline-block;
    font-size: calc(18px + 0.8vw);
  }

  #this-one {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 25px;

    img {
      max-width: 150px;
      width: 100%;
      height: auto;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #759FBC;
    }

    p {
      font-size: calc(14px + 0.2vw);
      flex: 1;
    }
  }

  #bottom-p {
    font-size: calc(14px + 0.2vw);
    line-height: 1.6;

    a {
      text-decoration: none;
      color: inherit;
      &:hover {
        text-decoration: underline;
        background-color: rgba(251, 251, 242, 0.1);
      }
    }
  }

  @media screen and (max-width: 750px) {
    width: 100%;
    #this-one {
      flex-direction: column;
      text-align: center;
    }
  }
`;


export default function Home(){
    return(
        <>
          <title>Documents | Resume</title>
          <StyledHome>

              <h3>Home</h3>
              <div id="this-one">
                  <img src="/pfp_2025.jpg" alt="Hiya Verma"/>
                  <p>
                      My name is Hiya Verma. I am a third year Data Science student. I am currently seeking a
                      summer internship. I am looking for a role where I can make a meaningful contribution while
                      also learning from seasoned industry professionals.
                  </p>
              </div>
              <p id="bottom-p">
                  Welcome to my website! You can find my educational history &nbsp;
                  <strong><em><u><Link to="/education">here</Link></u></em></strong>
                  &nbsp; and my employment history &nbsp;
                  <strong><em><u><Link to="/experiences">here</Link></u></em></strong>
                  &nbsp;— as well as other information that might be
                  of interest to you.<br></br> A little bit about me: My academic journey, 
                  which began with a focus on Applied Mathematics at UC Santa Cruz, 
                  has evolved into a passion for leveraging data-driven insights to 
                  solve complex problems. I am particularly interested in the 
                  intersection of Artificial Intelligence and user experience, 
                  as seen through my work with machine learning algorithms and 
                  natural language processing. Whether I am building sustainability
                  apps like MoveGreen at hackathons or tutoring students in advanced 
                  mathematics, I am driven by a desire to create tools that make a 
                  meaningful impact!
              </p>
          </StyledHome>
        </>
    );
}