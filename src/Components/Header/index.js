import { useState } from "react";
import MobileNavigation from "../MobileNavigator";
import Container from "../Containers/container";
import Image from "../../Images/profile.png";
import Bag from "../../Images/bag.png";
import Search from "../../Images/search.png";
import { navList } from "../Objects";
import "./index.css";

const Header = () => {
  const [sidebar, showSideBar] = useState(false);

  const showSideBarHandler = () => showSideBar((prevState) => !prevState);

  return (
    <Container
      position="fixed"
      width="100%"
      top="0"
      left="0"
      color="white"
      index="4"
      flex="column"
    >
      <header>
        <Container width="100%" align="center" height="100%">
          <Container width="58%" align="center" padding="0 0.3rem">
            <button className="hamburger" onClick={showSideBarHandler}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <h1 className="logo">STELM BEAUTY</h1>
          </Container>

          <Container justify="flex-end" width="40%" align="center">
            <img src={Image} alt="" className="images" />
            <img src={Bag} alt="" className="images" />
            <img src={Search} alt="" className="images" />
          </Container>
        </Container>

        <MobileNavigation list={navList} sidebar={sidebar} />
      </header>
      <nav>
        <ul>
          {navList.map((l, i) => (
            <li key={`a${i}`}>{l}</li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
