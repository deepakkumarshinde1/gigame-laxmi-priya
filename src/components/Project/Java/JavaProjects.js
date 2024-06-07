import { useParams } from "react-router-dom";

const JavaProjects = () => {
  let { id } = useParams();
  return <>Hello {id}</>;
};

export default JavaProjects;
