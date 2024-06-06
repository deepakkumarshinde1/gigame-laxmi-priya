import { Link, Outlet } from "react-router-dom";

function Project() {
  return (
    <>
      <section className="Project">Project</section>
      <ul>
        <li>
          <Link to="/projects/java">Java</Link>
        </li>
        <li>
          <Link to="/projects/php">PHP</Link>
        </li>
        <li>
          <Link to="/projects/python">Python</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Project;
