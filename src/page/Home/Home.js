import React from "react";
import Carosel from "../../Component/Carosel";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { dataSong } from "../../ultil/dataSong";
import { dataPopular } from "../../ultil/dataPopular";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import CardComponent from "../../Component/Card/CardComponent";
import Box from "@mui/material/Box";
const useStyles = makeStyles({
  bgHome: {
    backgroundColor: "#170f23",
    minHeight: "100vh",
  },
  Recently: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtAll: {
    display: "flex",
    alignItems: "center",
    color: "#ffffff80",
  },
  hiddenBox: {
    overflow: "hidden",
    height: 195,
  },
});
export default function Home() {
  const classes = useStyles();
  return (
    <Box className={classes.bgHome}>
      <Grid container spacing={2}>
        <Grid item lg={1}></Grid>
        <Grid item xs={12} lg={10}>
          <Box>
            <Carosel />
            <Box className={classes.Recently}>
              <h2>Gần đây</h2>
              <Box className={classes.txtAll}>
                <span> Tất cả</span>
                <NavigateNextIcon />
              </Box>
            </Box>
            <Box className={classes.hiddenBox}>
              <Grid
                container
                columns={24}
                direction="row"
                justifyContent="space-between"
              >
                {dataSong.map((e, i) => {
                  return (
                    <Grid item xs={12} sm={5} md={5} lg={3} key={i}>
                      <CardComponent img={e.img} title={e.title} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>

            <Typography variant="h2" gutterBottom>
              Thịnh Hành
            </Typography>
            <Box className={classes.hiddenBox}>
              <Grid
                container
                columns={21}
                direction="row"
                justifyContent="space-between"
              >
                {dataPopular.map((e, i) => {
                  return (
                    <Grid item xs={10} sm={6} md={5} lg={4} key={i}>
                      <CardComponent img={e.img} title={e.title} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={1}></Grid>
      </Grid>
    </Box>
  );
}
