import {
  Link,
  NavLink,
  NavNavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import About from "./components/About";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Project from "./components/Project";
import Team from "./components/Team";
import PageNotFound from "./components/PageNotFound";
import Java from "./components/Project/Java";
import Php from "./components/Project/Php";
import Python from "./components/Project/Python";
import JavaProjects from "./components/Project/Java/JavaProjects";

function App() {
  return (
    <>
      <ul className="menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/team"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Team
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Project
          </NavLink>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/projects/java"
              >
                Java
              </NavLink>
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/projects/java/1"
                  >
                    Java Project 1
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/projects/java/2"
                  >
                    Java Project 2
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/projects/java/3"
                  >
                    Java Project 3
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/projects/java/4"
                  >
                    Java Project 4
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/projects/java/5"
                  >
                    Java Project 5
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/projects/java/6"
                  >
                    Java Project 6
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/projects/php"
              >
                PHP
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/projects/python"
              >
                Python
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/my-cart"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cart
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Project />}>
          <Route path="java" element={<Java />}>
            <Route path=":id" element={<JavaProjects />} />
          </Route>
          <Route path="php" element={<Php />} />
          <Route path="python" element={<Python />} />
        </Route>
        <Route path="/my-cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
