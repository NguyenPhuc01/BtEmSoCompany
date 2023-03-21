import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import img1 from "../../src/ultil/images/taoanhdep-khung-nhac.jpeg";
import img2 from "../../src/ultil/images/97af5be3af7045692a67b0aba2e1f493.jpg";
import img3 from "../../src/ultil/images/Loi-Bai-Hat-Nang-Tho-Lyric-Nang-Tho.jpg";
import img4 from "../../src/ultil/images/Xanh-la-Hinh-anh-Hon-loan-Cong-nghe-Thuyet-trinh.jpg";
import img5 from "../../src/ultil/images/anh-chua-thuong-em-den-vay-day.jpg";
import img6 from "../../src/ultil/images/loi-bai-hat-pho-da-len-den-700.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  image: {
    width: "100%",
    height: "210px",
    borderRadius: "8px",
    objectFit: "cover",
  },
});
export default function Carosel() {
  const classes = useStyles();
  return (
    <Box>
      {" "}
      <Swiper
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          460: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={img1} alt="" className={classes.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className={classes.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className={classes.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className={classes.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" className={classes.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" className={classes.image} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
