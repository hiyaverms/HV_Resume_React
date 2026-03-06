import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import {Route, Routes} from "react-router";
import Home from "./components/Home.tsx";
import Education from "./components/Education.tsx";
import Experiences from "./components/Experiences.tsx";
import Certifications from "./components/Certifications.tsx";
import Projects from "./components/Projects.tsx";
import Documents from "./components/Documents.tsx";

function Root(){
  return(
    <>
      <Header/>
      <Nav/>
        <Routes>
          <Route
            path={`/`}
            element = {<Home/>}
          />
          <Route
            path={`edu.html`}
            element = {<Education/>}
          />
          <Route
            path={`emp.html`}
            element = {<Experiences/>}
          />
          <Route
            path={`awards.html`}
            element = {<Certifications/>}
          />
          <Route
            path={`projects.html`}
            element = {<Projects/>}
          />
          <Route
            path={`doc.html`}
            element = {<Documents/>}
          />
        </Routes>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter(
  [{path:"*", Component:Root}]
)

export default function App() {

  return (
    <>
      <RouterProvider router={router}/>

     
    </>
  )
}

    import Certification from "./components/mains/Certifications.tsx";

