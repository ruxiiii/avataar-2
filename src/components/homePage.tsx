import { NavBar } from "./navBar";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Autocomplete,
  TextField,
  Box,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Carousel1, { carouselImages } from "./carousel1";

export const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Container
        sx={{
          "& .MuiContaine-root": { paddingLeft: 0, paddingRight: 0 },
          width: "1300px",
          height: "100vH",
          paddingTop: "123px",
          paddingBottom: "0px",
          //marginBottom: "0px
          //flexShrink: 0,
          justifyContent: "center",
          margin: "auto",
          "@media (min-width: 1200px)": {
            maxWidth: "1400px",
          },
        }}
      >
        <Box
          sx={{
            justifyContent: "top",
            display: "inline-flex",
            flexDirection: "column",
            marginTop: "0px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: "42px",
              letterSpacing: "0px",
              textAlign: "center",
            }}
          >
            Featured Products
          </Typography>
          <Box
            sx={{
              paddingTop: "32px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "24px",
                fontWeight: "400800",
                lineHeight: "32px",
                letterSpacing: "0px",
                textAlign: "Center",
              }}
            >
              Explore and discover a variety of products
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            // display: "flex",
            // flexDirection: "row",
            // height: "20px",
            width: { xs: "0", sm: "100%" },
            position: "",
            alignItems: "center",
            paddingTop: "20px",
            marginBottom: "5px",
          }}
        >
          <Carousel1 carouselImages={carouselImages} />
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
