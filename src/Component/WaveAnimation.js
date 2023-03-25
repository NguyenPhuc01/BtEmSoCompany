import { Box, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Wave from "react-wavify";
import React from "react";

const useStyles = makeStyles({
  wave: {
    position: "absolute",
    left: 0,
  },
});

export default function WaveAnimation() {
  const classes = useStyles();
  return (
    <Box classes={classes.wave}>
      <Wave
        fill="#f79902"
        paused={false}
        options={{
          height: 20,
          amplitude: 40,
          speed: 5,
          points: 10,
        }}
      />
    </Box>
  );
}
