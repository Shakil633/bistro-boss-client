import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  const itemsPerPage = 6;
  const totalSlides = Math.ceil(items.length / itemsPerPage);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
        {[...Array(totalSlides)].map((_, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-3 gap-5 mt-20 mb-20">
              {items
                .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
                .map((item) => (
                  <FoodCard key={item._id} item={item}></FoodCard>
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
