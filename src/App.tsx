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
  @import url(''https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif; 
    background-color: #FBFBF2;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex:1;
  width: 100%;
  background-color: #FBFBF2; 
  min-height: 80vh;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center; 
  width: 100%;
  min-height: 100vh;
  background-color: #F0F0E8;
`;

function Root() {
  return (
    <PageWrapper>
      <Header />
      <Container>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </Container>
      <Footer />
    </PageWrapper>
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