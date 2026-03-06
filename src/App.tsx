import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/mains/Home";
import Education from "./components/mains/Education";
import Experiences from "./components/mains/Experiences";
import Certifications from "./components/mains/Certifications";
import Projects from "./components/mains/Projects";
import Documents from "./components/mains/Documents";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #DDD5E7; 
    color: #2A2D34;
    min-height: 100vh;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto; 
  background-color: #FBFBF2;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1; 
  width: 100%;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

function Root() {
  return (
    <Wrapper>
      <Header />
      <ContentContainer>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </ContentContainer>
      <Footer />
    </Wrapper>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
