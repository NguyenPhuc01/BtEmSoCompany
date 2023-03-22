import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  card: {
    border: "none",
    boxShadow: "none",
    height: "220px",
    marginBottom: "10px",
    "&:hover $image": {
      transform: "scale(1.04)",
    },
    "&:hover $cardIcon": {
      opacity: 1,
      transitionDelay: "0.2s",
    },
    "&:hover $test": {
      display: "block",
    },
  },
  titleCustom: {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
  image: {
    position: "relative",
    transition: "transform 0.4s ease-in-out",
  },

  test: {
    display: "none",
    position: "absolute",
    top: 0,
    background: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: 160,
  },
  cardIcon: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0,
    transition: "opacity 0.2s ease-in-out",
    color: "#fff",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
export default function CardComponent(props) {
  const classes = useStyles();

  return (
    <CardActionArea>
      <Card className={classes.card}>
        <CardMedia
          sx={{ height: 160 }}
          image={props.img}
          className={classes.image}
        />
        <Box className={classes.test}></Box>
        <Box className={classes.cardIcon}>
          <FavoriteBorderIcon fontSize="medium" />
          <PlayCircleOutlineIcon fontSize="large" />
          <MoreHorizIcon fontSize="medium" />
        </Box>
        <CardContent className={classes.root}>
          <Typography
            gutterBottom
            variant="span"
            component="div"
            className={classes.titleCustom}
          >
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
