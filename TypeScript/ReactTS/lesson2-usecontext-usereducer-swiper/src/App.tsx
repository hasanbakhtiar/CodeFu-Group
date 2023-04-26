import { useContext } from "react"
import { ProductContext } from "./context/ProductContext"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Pagination } from "swiper";

const App:React.FC = () => {
  const [productitem] = useContext(ProductContext);

  return (
    <>
          <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
       {productitem.map((item:any)=>{
        return  <SwiperSlide><img style={{"height":"700px"}} src={item.image} alt="" /></SwiperSlide>
      })}
       
      </Swiper>
      {productitem.map((item:any)=>{
        return <h1>{item.title}</h1>
      })}
    </>
  )
}

export default App