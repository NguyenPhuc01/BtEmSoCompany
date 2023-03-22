import { Box, Grid, Hidden, Slider, Tooltip, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ReplayIcon from "@mui/icons-material/Replay";
import React from "react";
import MusicVideoSharpIcon from "@mui/icons-material/MusicVideoSharp";
import MicNoneSharpIcon from "@mui/icons-material/MicNoneSharp";
import CastConnectedSharpIcon from "@mui/icons-material/CastConnectedSharp";
import { VolumeDown } from "@mui/icons-material";
import ListSharpIcon from "@mui/icons-material/ListSharp";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  boxPlayer: {
    position: "fixed",
    bottom: 0,
    height: "90px",
    width: "100%",
    borderTop: "1px solid #F2F2F2",
    background: "#fff",
    display: "flex",
    alignItems: "center",
  },
  songImg: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    marginLeft: 20,
  },
  iconLeftPlayer: {
    marginLeft: 20,
  },
  boxControl: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  iconControl: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    display: "flex",
    alignItems: "center",
  },
  iconVolume: {
    display: "flex",
    width: "100%",
    justifyContent: "end",
    height: 90,
    alignItems: "center",
  },
  hiddenName: {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
  },
});

export default function Player() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.boxPlayer}>
      <Grid container>
        <Grid item sm={3} md={3}>
          <Hidden smDown>
            <Box className={classes.songImg}>
              <img
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                alt=""
                style={{
                  width: 64,
                  height: 64,
                  marginRight: 10,
                  borderRadius: 8,
                }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, maxWidth: 110 }}
                  className={classes.hiddenName}
                >
                  Ngoài 30
                </Typography>
                <span className={classes.hiddenName}>Thái học</span>
              </Box>
              <Hidden mdDown>
                <Box className={classes.iconLeftPlayer}>
                  <FavoriteBorderIcon />
                  <Tooltip title="Add" placement="top" arrow>
                    <MoreHorizIcon sx={{ marginLeft: "15px" }} />
                  </Tooltip>
                </Box>
              </Hidden>
            </Box>
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box className={classes.boxControl}>
            <Box className={classes.iconControl}>
              <ShuffleIcon />
              <SkipPreviousIcon sx={{ marginLeft: "15px" }} />
              <PlayCircleOutlineIcon
                sx={{ fontSize: 45, margin: "0px 15px" }}
              />
              <SkipNextIcon sx={{ marginRight: "15px" }} />
              <ReplayIcon />
            </Box>
            <Box className={classes.time}>
              <span style={{ marginRight: "20px" }}>00:00</span>
              <Slider size="small" aria-label="Small" />
              <span style={{ marginLeft: "20px" }}>06:00</span>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={3} md={3}>
          <Hidden smDown>
            <Box className={classes.iconVolume}>
              <Hidden mdDown>
                <MusicVideoSharpIcon
                  sx={{ fontSize: 20, color: "#98989E", marginLeft: "15px" }}
                />
                <MicNoneSharpIcon
                  sx={{ margin: "0px 12px", fontSize: 20, color: "#98989E" }}
                />
                <CastConnectedSharpIcon
                  sx={{ marginRight: "12px", fontSize: 20, color: "#98989E" }}
                />
              </Hidden>

              <VolumeDown sx={{ color: "#98989E" }} />
              <Slider
                aria-label="Volume"
                value={value}
                onChange={handleChange}
                sx={{ width: 100, margin: "0px 12px" }}
              />
              <Hidden mdDown>
                <ListSharpIcon sx={{ fontSize: 20, color: "#98989E" }} />
              </Hidden>
            </Box>
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
}
