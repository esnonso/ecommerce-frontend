const Button = ({
  text,
  click,
  border,
  width,
  height,
  borderRadius,
  padding,
  font,
  margin,
}) => {
  const buttonStyles = {
    backgroundColor: "crimson",
    color: "white",
    border: border || "none",
    width: width,
    height: height,
    borderRadius: borderRadius,
    padding: padding,
    fontSize: font,
    margin: margin,
  };
  return (
    <button style={buttonStyles} onClick={click}>
      {text}
    </button>
  );
};

export default Button;
