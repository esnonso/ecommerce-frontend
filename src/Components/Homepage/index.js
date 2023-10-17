import Container from "../Containers/container";
import Button from "../Button";
import MobileTag from "./mobileTag";
import ShopItem from "../ShopItem";
import { H1Tags, PTags } from "../Text";
import "./index.css";

const Homepage = () => {
  return (
    <Container flex="column" width="100%" marginTop="3.5rem">
      <Container width="100%">
        <div className="word">
          <H1Tags margin="0.3rem">Classic Beauty Shop</H1Tags>
          <PTags margin="0.3rem" width="70%">
            {" "}
            Our Mission is to provide quality legal education to individuals and
            businessesin the areas of Business Law and Immigration Law. We
            provide legal consultation.
          </PTags>
          <Button
            text="Shop now"
            width="30%"
            font="larger"
            padding={"0.2rem 0.5rem"}
            borderRadius={"5px"}
            height={"3rem"}
            margin={"0.9rem 0.3rem"}
          />
        </div>
        <div className="banner">
          <div className="mobile-tag">
            <MobileTag />
          </div>
        </div>
      </Container>
      <div className="top-rated">
        <h1>Top Rated</h1>
        <ShopItem />
      </div>
    </Container>
  );
};

export default Homepage;
