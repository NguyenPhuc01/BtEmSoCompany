import React, { useState } from "react";
import Chart from "../../Component/Chart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { dataZingChart } from "../../ultil/dataZingChart";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RankTable from "../../Component/RankTable";
import { dataZingChartUsUK } from "../../ultil/dataZingChartUsUK";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    "& tbody tr:hover": {
      backgroundColor: "#eee",
    },
  },
  chartBox: {
    paddingTop: 75,
  },
  table: {
    marginTop: 30,
    // height: 400,
  },
  btnMore: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px",
  },
  songImg: {
    display: "flex",
    alignItems: "center",
  },
});

export default function ZingChart() {
  const [limit, setLimit] = useState(5);
  const [hidden, setHidden] = useState(false);
  const classes = useStyles();
  return (
    <Box className={classes.chartBox}>
      <Grid container>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={10}>
          <>
            <Box>
              <Chart />
            </Box>
            <Box className={classes.table}>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  aria-label="simple table"
                  className={classes.root}
                >
                  <TableBody>
                    {dataZingChart.slice(0, limit).map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">
                          <Typography variant="h6">{row.id}</Typography>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <Box className={classes.songImg}>
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
                            <Box>
                              <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 600 }}
                              >
                                {row.title}
                              </Typography>
                              <span>{row.singerName}</span>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell align="left">{row.title}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box className={classes.btnMore}>
                {hidden ? (
                  ""
                ) : (
                  <Button
                    variant="contained"
                    onClick={() => {
                      setLimit(dataZingChart.length);
                      setHidden(true);
                    }}
                  >
                    Xem Thêm
                  </Button>
                )}
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "#8D22C3",
                  fontWeight: "bold",
                }}
              >
                Bảng Xếp Hạng Tuần
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} lg={4}>
                  <RankTable category="Việt Nam" data={dataZingChart} />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <RankTable category="US-UK" data={dataZingChartUsUK} />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <RankTable category="K-Pop" data={dataZingChartUsUK} />
                </Grid>
              </Grid>
            </Box>
          </>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </Box>
  );
}
