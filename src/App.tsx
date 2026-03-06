import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/mains/Home";
import Education from "./components/mains/Education";
import Experiences from "./components/mains/Experiences";
import Certifications from "./components/mains/Certifications";
import Projects from "./components/mains/Projects";
import Documents from "./components/mains/Documents";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #FBFBF2; /* Your page background color */
  min-height: 80vh;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
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
  return <RouterProvider router={router} />;
}