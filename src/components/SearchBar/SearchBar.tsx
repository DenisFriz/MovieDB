import { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  FormControlLabel,
  InputBase,
  Radio,
  RadioGroup,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { useAppDispatch } from "@hooks/hooks";
import { setSearchTerm, setCurrentCategory } from "@redux/MoviesSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  alignSelf: "flex-start",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(0.5em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("Movie");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchTerm(query));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentCategory(e.target.value));
    setSearch(e.target.value);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <Box
        display="flex"
        alignItems="center"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Search>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={handleChange}
            value={query}
          />
        </Search>
        <RadioGroup
          row
          aria-labelledby="demo-form-control-label-placement"
          name="position"
          defaultValue="Movie"
          sx={{ "& .Mui-checked": { color: "#70c4d5 !important" } }}
          value={search}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="Movie"
            control={<Radio />}
            label="Movie"
            labelPlacement="start"
          />
          <FormControlLabel
            value="TV"
            control={<Radio />}
            label="TV"
            labelPlacement="start"
          />
        </RadioGroup>
      </Box>
    </form>
  );
};

export default SearchBar;
