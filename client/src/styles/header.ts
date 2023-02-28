import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "18px",
  backgroundColor: "#eeeeef",
  "&:hover": {
    backgroundColor: "#eeeeef",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    marginLeft: "30px !important",

    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  "& .css-1azwjlw-MuiInputBase-root-MuiOutlinedInput-root": {
    outline: "none",
    borderRadius: "18px",
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  border: "none",
  "& .MuiInputBase-input": {
    border: "none",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    marginLeft: "30px !important",
    borderRadius: "18px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  "& .MuiFormControl-root": {
    border: "none",
  },
}));
