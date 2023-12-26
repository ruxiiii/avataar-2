import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Box,
  Autocomplete,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import "../App.css";

const useStyles = makeStyles(() => ({
  diagonalLinesContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "white",
  },
  diagonalLine: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    backgroundImage:
      // "linear-gradient(45deg, black 25%, transparent 25%, transparent 45%, black 45%, black)",
      "linear-gradient(45deg, transparent 20%, black 20%, transparent 20%, black 20%, transparent 20%, black 20%)",
    backgroundSize: "cover",
    color: "white",
    backGroundRepeat: "no-repeat",
    width: "50px",
  },
  navBarTypo: {
    fontWeight: 200,
    fontSize: "13px",
    lineHeight: "20px",
    color: "white",
    // zIndex: 1,
    flexGrow: "0.5",
    alignItems: "center",
    fontFamily: "'Lato', sans-serif",
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar
      sx={{
        backgroundColor: "#2F302C",
        postion: "absolute",
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          flexGrow={1}
          sx={{
            width: "100vw",
            height: "48px",
            paddingLeft: "16px",
            paddingRight: "16px",
            position: "relative",
            alignItems: "center",
            "@media (min-width:600px)": {
              paddingLeft: "32px",
              paddingRight: "32px",
            },
            // "@media (min-width:0px)": {
            //   minHeight: "72px",
            // },
            "@media (min-width:960px)": {
              paddingLeft: "48px",
              paddingRight: "48px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                gap: "6px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                width: "164px",
                transition:
                  "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                border: "0",
              }}
            >
              <Link
                to="/"
                style={{
                  margin: "0px",
                  height: "20px",
                  backgroundColor: "white",
                }}
              >
                <Box
                  className={classes.diagonalLinesContainer}
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    zIndex: "1",
                    width: "20px",
                  }}
                >
                  <Box className={classes.diagonalLine}></Box>
                </Box>
              </Link>
              <Box
                sx={{
                  marginLeft: "2px",
                  marginTop: "1px",
                  flexGrow: "1",
                  width: "30%",
                  textAlign: "start",
                  height: "35px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    width: "200px",
                    fontStyle: "Lato !importnat",
                    fontWeight: 410,
                    fontSize: "28px",
                    lineHeight: "35px",
                    flexGrow: 1,
                  }}
                >
                  E-COMM
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "90%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "80px",
                gap: "20px",
                // flexWrap: "nowrap",
              }}
            >
              <Link to="/" className={classes.navBarTypo}>
                HOME
              </Link>
              <Link to="/electronics" className={classes.navBarTypo}>
                ELECTRONICS
              </Link>
              <Link to="/books" className={classes.navBarTypo}>
                BOOKS
              </Link>
              <Link to="/music" className={classes.navBarTypo}>
                MUSIC
              </Link>
              <Link to="/movies" className={classes.navBarTypo}>
                MOVIES
              </Link>
              <Link to="/clothing" className={classes.navBarTypo}>
                CLOTHING
              </Link>
              <Link to="/games" className={classes.navBarTypo}>
                GAMES
              </Link>
              <Link to="/more" className={classes.navBarTypo}>
                MORE
              </Link>

              <Autocomplete
                disablePortal
                //options={}
                fullWidth
                id=""
                sx={{
                  alignItems: "center",
                  width: { xs: "0", sm: "300px" },
                  //height: "20px",
                  padding: "12px, 0px, 12px, 0px",

                  backgroundColor: "transaprent",

                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline .MuiAutocompletePaper .MuiInputBase-input .MuiOutlinedInput-input":
                    {
                      border: "none",
                      //height: "20px",
                      // borderRadius: "20px",
                      // width: "300px",
                      // padding: "0px 10px",
                      // //color: "blue",

                      backgroundColor: "transparent",
                      padding: 0,
                    },

                  "& .MuiAutocomplete-inputRoot": {
                    height: "25px",
                  },

                  // "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline .MuiFocused ":
                  //   {
                  //     //height: "20px",
                  //     //borderWidth: "30px",
                  //     padding: "0px",
                  //   },

                  "& .MuiInputBase-input": {
                    height: "25px",
                    // lineHeight: "3px",
                    padding: 0,
                    lineHeight: "30px",
                    marginTop: "-8.5px",
                    overflow: "visible",
                    Top: "0px",
                  },

                  // "& .MuiInputBase-root .MuiAutocomplete-input .MuiOutlinedInput-notchedOutline":
                  //   {
                  //     border: "none",
                  //     borderBottom: "1px solid", // Set only bottom border
                  //     padding: "0px",
                  //   },

                  ".& MuiAutocomplete-endAdornment": {},
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    label=""
                    sx={{
                      width: 300,
                      // "& .MuiInputBase-root": {
                      //   height: "20px",
                      // },
                    }}
                    inputProps={{
                      style: {
                        border: "none",
                        width: "100%",
                        // height: "20px !important",
                        //padding: "20px",
                        color: "white",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        // height: "20px",
                      },
                    }}
                  />
                )}
              />

              {/* <Autocomplete
                disablePortal
                id=""
                //options={}
                sx={{
                  width: "200px",
                  "& .MuiInputBase-root": {
                    "&:before": {
                      border: "0px 0px 1px 0px",
                    },
                    "&:after": {
                      border: "0px 0px 1px 0px",
                    },
                  },

                  "& .MuiAutocomplete-inputRoot": {
                    "&:hover:not(.Mui-disabled):before": {
                      border: "0px 0px 1px 0px",
                    },
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#D4D4D4", // Customize the color of the outline when focused
                    },
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search something"
                    margin="normal"
                    variant="standard"
                    size="small"
                    sx={{
                      width: 300,
                      "& .MuiInputBase-root": {
                        height: "20px",
                      },
                    }}
                    // InputProps={{
                    //   ...(params.InputProps as InputProps),
                    //   endAdornment: null,
                    //   style: {
                    //     marginTop: "0px",
                    //     flexGrow: 1,
                    //     borderBottom: "none !important",
                    //     color: "none",
                    //   },
                    // }}
                    InputLabelProps={{
                      shrink: true,
                      style: {
                        color: "red", // Customize the color of the input label if needed
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                        {
                          borderBottom: "none !important",
                        },
                    }}
                  />
                )}
              />

              <TextField
                label=""
                size="small"
                sx={{
                  "& .MuiInputBase-root": {
                    height: "20px",
                  },
                }}
              /> */}
            </Box>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
