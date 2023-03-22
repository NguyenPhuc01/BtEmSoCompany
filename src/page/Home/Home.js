import React from "react";
import Carosel from "../../Component/Carosel";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { dataSong } from "../../ultil/dataSong";
import { dataPopular } from "../../ultil/dataPopular";
import Grid from "@mui/material/Grid";
import CardComponent from "../../Component/Card/CardComponent";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  bgHome: {
    minHeight: "120vh",
    paddingTop: "80px",
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
    height: "221px",
  },
});
export default function Home() {
  const classes = useStyles();
  return (
    <Box className={classes.bgHome}>
      <Grid container spacing={2}>
        <Grid item lg={1}>
          <Box>
            <Link to={"/"}>Home</Link>
            <br />
            <Link to={"/zingChart"}>Zingchart</Link>
            <br />
            <Link to={"/playList"}>playlist</Link>
          </Box>
        </Grid>
        <Grid item xs={11} sm={10} sx={{ margin: "0px auto" }}>
          <Box>
            <Carosel />
            <Box className={classes.Recently}>
              <Typography variant="h5" gutterBottom sx={{ marginTop: 3 }}>
                Gần đây
              </Typography>
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

            <Typography variant="h5" gutterBottom sx={{ marginTop: 3 }}>
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
