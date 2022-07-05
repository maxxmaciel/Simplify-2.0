import produtos from "../json/produtos.json";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SlideCaixas.css";

// import required modules
import { Pagination, Navigation } from "swiper";
function SlideCaixas() {
  return (
    <div className="caixas">
      <>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {produtos.map((p) => {
            return (
              <SwiperSlide key={`${p.id}`}>
                <Link
                  to={`/mercados-parceiros/${p.usuario}`}
                  key={`${p.id}`}
                  className="caixa"
                >
                  <div key={`${p.id}`} className="caixa">
                    <img src={`${p.imagem}`} alt="" />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
}

export default SlideCaixas;
