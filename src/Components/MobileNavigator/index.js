import { createPortal } from "react-dom";
//import { Link } from "react-router-dom";
import "./index.css";

const BackDrop = (props) => {
  return <div className="backdrop"></div>;
};

export const BackDropPortal = () => {
  return createPortal(<BackDrop />, document.getElementById("overlays"));
};

const Sidebar = (props) => {
  return (
    <ul className="sidebar">
      {props.list.map((l, i) => (
        <li key={`b${i}`}>{l}</li>
      ))}
    </ul>
  );
};

const SideBarPortal = ({ list }) => {
  return createPortal(
    <Sidebar list={list} />,
    document.getElementById("overlays")
  );
};

const MobileNavigation = (props) => {
  return (
    <>
      {props.sidebar && (
        <>
          <BackDropPortal />
          <SideBarPortal list={props.list} />
        </>
      )}
    </>
  );
};

export default MobileNavigation;
