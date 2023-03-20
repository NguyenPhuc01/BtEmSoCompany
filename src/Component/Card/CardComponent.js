import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#170f23",
    fontWeight: "bold",
    fontSize: "16px",
  },
  bg: {
    backgroundColor: "#170f23",
    border: "none",
  },
  titleCustom: {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    color: "#fff",
  },
});
export default function CardComponent(props) {
  const classes = useStyles();

  return (
    <CardActionArea>
      <Card sx={{ height: 200 }} className={classes.bg}>
        <CardMedia sx={{ height: 140 }} image={props.img} />
        <CardContent className={classes.root}>
          <Typography
            gutterBottom
            variant="span"
            component="div"
            className={classes.titleCustom}
          >
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>

    // <div style={{ overflow: "hidden", height: 200 }}>
    //   <Grid container columns={24} justifyContent="space-between">
    //     {data.map((e, i) => {
    //       return (
    //         <Grid xs={12} sm={5} md={5} lg={3} item key={i}>
    //           <CardActionArea>
    //             <Card sx={{ height: 210 }} className={classes.bg}>
    //               <CardMedia sx={{ height: 140 }} image={e.img} />
    //               <CardContent className={classes.root}>
    //                 <Typography
    //                   gutterBottom
    //                   variant="span"
    //                   component="div"
    //                   className={classes.titleCustom}
    //                 >
    //                   {e.title}
    //                 </Typography>
    //               </CardContent>
    //             </Card>
    //           </CardActionArea>
    //         </Grid>
    //       );
    //     })}
    //   </Grid>
    // </div>
  );
}
