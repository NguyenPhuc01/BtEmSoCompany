import {
  Box,
  Grid,
  Hidden,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React, { useState } from "react";
import { dataZingChart } from "../../ultil/dataZingChart";
import "../../App.css";
import MusicPlayerSlider from "../../Component/MusicPlayerSlider";

const useStyles = makeStyles((theme) => ({
  BoxPlayList: {
    padding: "75px 0px 150px 0px",
    background: "linear-gradient(#97BD9E, white)",
    width: "100%",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
  ListSong: {},
  listIcon: {
    margin: 15,
    display: "flex",
    alignItems: "center",
  },
  songImg: {
    display: "flex",
    alignItems: "center",
  },
}));
export default function PlayList() {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");
  const [audioIndex, setAudioIndex] = useState(0);

  return (
    <>
      <Box className={classes.BoxPlayList}>
        <Grid container spacing={2}>
          <Grid item md={1}></Grid>
          <Grid item xs={12} md={10}>
            <Box
              className={classes.header}
              sx={{
                flexDirection: matches ? "column" : "row",
              }}
            >
              <Box>
                <img
                  src="https://i1.sndcdn.com/artworks-000314434029-tr93rb-t500x500.jpg"
                  alt=""
                  style={{ width: 232, height: 232 }}
                />
              </Box>
              <Hidden smDown>
                <Box sx={{ marginLeft: 5 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    Playlist
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    Vũ. Radio
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <SportsBaseballIcon sx={{ color: "#1DD55F" }} />
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", marginLeft: 1 }}
                    >
                      Spotify .7.112 lượt thích .50 bài hát
                      <span style={{ fontWeight: 100 }}> khoảng 3 giờ</span>
                    </Typography>
                  </Box>
                </Box>
              </Hidden>
            </Box>
            <Box className={classes.ListSong}>
              <Box className={classes.listIcon}>
                <PauseCircleIcon sx={{ fontSize: 50, color: "#1ED760" }} />
                <FavoriteBorderIcon
                  sx={{ color: "#FFF", fontSize: 30, margin: "0px 15px" }}
                />
                <MoreHorizIcon sx={{ color: "#FFF", fontSize: 30 }} />
              </Box>

              <Box>
                <TableContainer
                  component={Paper}
                  sx={{ background: "rgba(0,0,0,0)", border: "none" }}
                >
                  <Table aria-label="simple table">
                    <TableBody>
                      {dataZingChart.map((row, i) => (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                          hover
                          onClick={() => {
                            setAudioIndex(i);
                          }}
                        >
                          <TableCell align="center">
                            <Typography variant="h6">{row.id}</Typography>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <Box className={classes.songImg}>
                              <Box sx={{ position: "relative" }}>
                                <img
                                  src={row.img}
                                  alt=""
                                  style={{
                                    width: 40,
                                    height: 40,
                                    marginRight: 10,
                                    borderRadius: 8,
                                  }}
                                />
                              </Box>

                              <Box>
                                <Typography
                                  variant="subtitle1"
                                  sx={{ fontWeight: 600 }}
                                >
                                  {row.name}
                                </Typography>
                                <span>{row.writer}</span>
                              </Box>
                            </Box>
                          </TableCell>
                          <Hidden smDown>
                            <TableCell align="left">{row.title}</TableCell>
                            <TableCell align="right">{row.time}</TableCell>
                          </Hidden>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
      </Box>
      <MusicPlayerSlider
        data={dataZingChart}
        audioIndex={audioIndex}
        setAudioIndex={setAudioIndex}
      />
    </>
  );
}
