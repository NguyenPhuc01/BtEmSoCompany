import React from "react";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import DiamondIcon from "@mui/icons-material/Diamond";
import Hidden from "@mui/material/Hidden";
const useStyles = makeStyles({
  headerLeft: {
    display: "flex",
    alignItems: "center",
  },
  headerBox: {
    height: "70px",
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "2px 10px",
    borderRadius: "20px",
    background: "#EFEFEF",
  },
});
export default function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.headerBox}>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Grid container spacing={2}>
            <Grid item xs={7} sm={5}>
              <Box className={classes.headerLeft}>
                <Box className={classes.headerLeft}>
                  <Hidden mdDown>
                    <ArrowBackIcon />
                    <ArrowForwardIcon
                      sx={{ color: "#CCCBCC", margin: "0px 12px" }}
                    />
                  </Hidden>
                </Box>
                <Box className={classes.searchInput}>
                  <SearchIcon />
                  <Input
                    disableUnderline
                    type="search"
                    placeholder="Tìm kiếm bài hát,Nghệ sĩ, lời bài hát"
                    fullWidth
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={0} sm={3}></Grid>
            <Grid item xs={5} sm={4}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="end"
                spacing={2}
              >
                <Chip label="Tải bản Windows" />
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Box>
  );
}
