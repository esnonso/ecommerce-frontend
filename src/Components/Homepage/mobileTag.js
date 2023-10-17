import Container from "../Containers/container";
import Button from "../Button";
import { H1Tags, PTags } from "../Text";

const MobileTag = () => {
  return (
    <Container
      flex={"column"}
      color="#cfcacc"
      opacity="0.8"
      padding="2rem 0"
      radius="5px"
    >
      <H1Tags margin="0.3rem" fontSize="20px">
        Classic Beauty Shop
      </H1Tags>
      <PTags margin="0.3rem">
        {" "}
        Our Mission is to provide quality legal education to individuals and
        businesses in the areas of Business
      </PTags>
      <Button
        text="Shop now"
        width="60%"
        font="18px"
        padding={"0.2rem 0.5rem"}
        borderRadius={"5px"}
        height={"3rem"}
        margin={"0.9rem 0.3rem"}
      />
    </Container>
  );
};

export default MobileTag;
