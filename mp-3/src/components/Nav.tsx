import {Link} from "react-router";

export default Nav(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="edu.html">Education</Link></li>
                <li><Link to="emp.html">Employment</Link></li>
                <li><Link to="awards.html">Awards</Link></li>
                <li><Link to="projects.html">Projects</Link></li>
                <li><Link to="doc.html">Documents</Link></li>
            </ul>
        </nav>
    );
}