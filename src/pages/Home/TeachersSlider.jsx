import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import classNames from "classnames";
import styles from "./Home.module.css";
import teachers from '@data/teachersData.json';

const TeachersSlider = () => {
  return (
    <article className={classNames("br-1", styles.teachersSlider)}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className={styles.teachersSwiper}
      >
        {teachers.map((teacher, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div>
              <div className={styles.teacherImg}>
                <img src={teacher.image} alt="" />
              </div>
              <div className="grid gap-2 text-neutral-400">
                <div className="flow">
                  <p className="fw-semibold text-neutral-900">
                    {teacher.name}
                  </p>
                  <p>{teacher.subject}</p>
                  <p>{teacher.qualificationn}</p>
                  <p>{teacher.experience}</p>
                </div>
                <p className="italic">
                  &quot;{teacher.philosophy}&quot;
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default TeachersSlider;
