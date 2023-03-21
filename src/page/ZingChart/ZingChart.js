import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Chart from "../../Component/Chart";

const useStyles = makeStyles({
  chartBox: {
    padding: 75,
  },
});

export default function ZingChart() {
  const classes = useStyles();
  return (
    <Box className={classes.chartBox}>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}></Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Box>
        <Chart />
      </Box>
    </Box>
  );
}
