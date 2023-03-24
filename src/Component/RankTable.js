import { Box, Button, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  rankTableBox: {
    background: "rgb(0,0,0,0.05)",
    borderRadius: 12,
    padding: "20px 10px",
  },

  songImg: {
    display: "flex",
    alignItems: "center",
  },
  boxSong: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  btnShowAll: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
  },
});
export default function RankTable(props) {
  const classes = useStyles();

  return (
    <Box className={classes.rankTableBox} boxShadow={3}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          padding: "0 0 10px 40px",
          color: "#8D22C3",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
        }}
      >
        {props.category}{" "}
        <PlayCircleIcon sx={{ fontSize: 35, marginLeft: "5px" }} />
      </Typography>
      {props.data &&
        props.data.slice(0, 5).map((e) => {
          return (
            <List style={{ padding: "0px" }} key={e.id}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Typography variant="h6">{e.id}</Typography>
                  </ListItemIcon>
                  <Box className={classes.boxSong}>
                    <Box className={classes.songImg}>
                      <img
                        src={e.img}
                        alt=""
                        style={{
                          width: 40,
                          height: 40,
                          marginRight: 10,
                          borderRadius: 8,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600 }}
                        >
                          {e.name}
                        </Typography>
                        <span>{e.writer}</span>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2">{e.time}</Typography>
                    </Box>
                  </Box>
                </ListItemButton>
              </ListItem>
            </List>
          );
        })}
      <Box className={classes.btnShowAll}>
        <Button
          sx={{
            borderRadius: 8,
            border: "1px solid #8D22C3",
            color: "#8D22C3",
            padding: "5px 10px",
          }}
        >
          {" "}
          Xem tất cả
        </Button>
      </Box>
    </Box>
  );
}
