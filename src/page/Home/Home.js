import React from "react";
import Carosel from "../../Component/Carosel";
import styles from "../Home/Home.module.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { dataSong } from "../../ultil/dataSong";
import { dataPopular } from "../../ultil/dataPopular";

import Grid from "@mui/material/Grid";
import CardComponent from "../../Component/Card/CardComponent";

export default function Home() {
  return (
    <div className={styles.bgHome}>
      <Grid container spacing={2}>
        <Grid item lg={1}></Grid>
        <Grid item xs={12} lg={10}>
          <div className={styles.boxHome}>
            <Carosel />
            <div className={styles.Recently}>
              <h2>Gần đây</h2>
              <div className={styles.txtAll}>
                <span> Tất cả</span>
                <NavigateNextIcon />
              </div>
            </div>

            <div>
              <CardComponent data={dataSong} />
            </div>
            <h2>Thịnh Hành</h2>
            <div>
              <CardComponent data={dataSong} />
            </div>
          </div>
        </Grid>
        <Grid item lg={1}></Grid>
      </Grid>
    </div>
  );
}
