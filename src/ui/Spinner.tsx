import { keyframes, styled } from "@mui/material";

const rotate = keyframes`
    0% {
      -webkit-transform: rotate(0);
        transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

const SpinnerBox = styled("div")(() => ({
  width: "75px",
  height: "75px",
  border: "10px solid #eae8e8",
  borderTopColor: "blue",
  borderRadius: "50%",
  animation: `${rotate} 1s linear infinite`,
}));

const Spinner = () => {
  return (
    <div data-testid="spinner">
      <SpinnerBox />
    </div>
  );
};

export default Spinner;
