import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import { Grid, Hidden } from "@mui/material";
const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
}));
const CoverImage = styled("div")({
  width: 65,
  height: 65,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.6,
  fontWeight: 500,
  letterSpacing: 0.2,
});
export default function MusicPlayerSlider({ data, audioIndex, setAudioIndex }) {
  const audioRef = React.useRef();
  const theme = useTheme();
  const [duration, setDuration] = React.useState();
  const [volume, setVolume] = React.useState(30);
  const [paused, setPaused] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = Math.floor(value - minute * 60);
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

  const handlePausePlayClick = () => {
    if (paused) {
      audioRef?.current?.pause();
    } else {
      audioRef?.current?.play();
    }
    setPaused(!paused);
  };
  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    setCurrentTime(audioRef.current.currentTime);
    if (paused) audioRef.current.play();
  };
  const handleTimeSliderChange = (x) => {
    setCurrentTime(x);
    audioRef.current.currentTime = x;
    if (!paused) {
      setPaused(true);
      audioRef.current.play();
    }
  };
  const handleNextSong = () => {
    if (audioIndex === data.length - 1) {
      setAudioIndex(0);
    } else {
      setAudioIndex((prev) => prev + 1);
    }
  };
  const handlePrevSong = () => {
    if (audioIndex > 0) {
      setAudioIndex((prev) => prev - 1);
    }
  };
  const endedEvent = () => {
    if (audioIndex < data.length - 1) {
      setAudioIndex((prev) => prev + 1);
    } else if (audioIndex === data.length - 1) {
      setAudioIndex(0);
    }
  };
  //   console.log("audioIndex", audioIndex);
  //   console.log("audioIndex", data.length);
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        position: "fixed",
        bottom: 0,
        borderTop: "1px solid #F2F2F2",
        background: "#fff",
      }}
    >
      <Grid container>
        <Grid item sm={3} md={3}>
          <Hidden smDown>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                paddingLeft: 4,
              }}
            >
              <CoverImage>
                <img
                  alt="can't win - Chilling Sunday"
                  src={data[audioIndex].img}
                />
              </CoverImage>
              <Box sx={{ ml: 1.5, minWidth: 0 }}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  fontWeight={500}
                ></Typography>
                <Typography noWrap>
                  <b>{data[audioIndex].name}</b>
                </Typography>
                <Typography noWrap letterSpacing={-0.25}>
                  {data[audioIndex].writer}
                </Typography>
              </Box>
            </Box>
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Widget>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: -1,
              }}
            >
              <IconButton aria-label="previous song" onClick={handlePrevSong}>
                <FastRewindRounded
                  fontSize="large"
                  htmlColor={mainIconColor}
                  sx={{ color: audioIndex <= 0 ? "grey" : "" }}
                />
              </IconButton>
              <IconButton
                aria-label={paused ? "play" : "pause"}
                onClick={() => handlePausePlayClick()}
              >
                {paused ? (
                  <PauseRounded
                    sx={{ fontSize: "2.5rem" }}
                    htmlColor={mainIconColor}
                  />
                ) : (
                  <PlayArrowRounded
                    sx={{ fontSize: "2.5rem" }}
                    htmlColor={mainIconColor}
                  />
                )}
              </IconButton>
              <IconButton aria-label="next song" onClick={handleNextSong}>
                <FastForwardRounded
                  fontSize="large"
                  htmlColor={mainIconColor}
                />
              </IconButton>
            </Box>
            <Slider
              aria-label="time-indicator"
              size="small"
              value={currentTime}
              min={0}
              step={1}
              max={duration}
              onChange={(_, value) => {
                handleTimeSliderChange(value);
              }}
              sx={{
                color:
                  theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
                height: 4,
                "& .MuiSlider-thumb": {
                  width: 8,
                  height: 8,
                  transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                  "&:before": {
                    boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                  },
                  "&:hover, &.Mui-focusVisible": {
                    boxShadow: `0px 0px 0px 8px ${
                      theme.palette.mode === "dark"
                        ? "rgb(255 255 255 / 16%)"
                        : "rgb(0 0 0 / 16%)"
                    }`,
                  },
                  "&.Mui-active": {
                    width: 20,
                    height: 20,
                  },
                },
                "& .MuiSlider-rail": {
                  opacity: 0.28,
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: -2,
              }}
            >
              <TinyText>{formatDuration(currentTime)}</TinyText>

              <TinyText>-{formatDuration(duration - currentTime)}</TinyText>
            </Box>
          </Widget>
        </Grid>
        <Grid item sm={3} md={3} sx={{ margin: "auto" }}>
          <Hidden smDown>
            <Box>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1, px: 1, display: "flex" }}
                alignItems="center"
              >
                <VolumeDownRounded htmlColor={lightIconColor} />
                <Slider
                  aria-label="Volume"
                  value={volume}
                  onChange={(_, value) => {
                    audioRef.current.volume = value / 100;
                    setVolume(value);
                  }}
                  sx={{
                    color:
                      theme.palette.mode === "dark"
                        ? "#fff"
                        : "rgba(0,0,0,0.87)",
                    "& .MuiSlider-track": {
                      border: "none",
                    },
                    "& .MuiSlider-thumb": {
                      width: 24,
                      height: 24,
                      backgroundColor: "#fff",
                      "&:before": {
                        boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                      },
                      "&:hover, &.Mui-focusVisible, &.Mui-active": {
                        boxShadow: "none",
                      },
                    },
                  }}
                />
                <VolumeUpRounded htmlColor={lightIconColor} />
              </Stack>
            </Box>
          </Hidden>
        </Grid>
      </Grid>
      <Box>
        <audio
          ref={audioRef}
          src={data[audioIndex].src}
          onLoadedData={handleLoadedData}
          onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
          onEnded={endedEvent}
        />
      </Box>
    </Box>
  );
}
