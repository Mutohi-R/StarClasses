import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import styles from "./Home.module.css";
import classNames from "classnames";
import anna from "@images/anna.png";
import aman from "@images/aman.png"
import sofia from "@images/sofia.png"
import emma from "@images/emma.png"
import samaira from "@images/samaira.png"

const Testimonials = () => {
  return (
    <section
      className={classNames("full-width", classNames(styles.testimonials))}
    >
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <article className="grid gap-8">
              <p className="fs-700 ff-heading">
                Star Classes not only helped me prepare for the SAT but also
                taught me time management and stress control. Their guidance
                played a huge role in my acceptance to my dream college.
              </p>
              <div
                className={classNames(
                  "flex align-items-center gap-2 justify-end",
                  styles.student
                )}
              >
                <div>
                  <p className="fs-300">ANNA</p>
                  <p className="fs-300 italic">SAT Achiever (Score: 1560)</p>
                </div>
                <div className={styles.studentImg}>
                  <img src={anna} alt="" />
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="grid gap-8">
              <p className="fs-700 ff-heading">
                Learning Spanish at Star Classes was such a fun and rewarding
                experience! The interactive teaching style and real-world
                practice sessions helped me achieve fluency in just one year.
              </p>
              <div
                className={classNames(
                  "flex align-items-center gap-2 justify-end",
                  styles.student
                )}
              >
                <div>
                  <p className="fs-300">SAMAIRA</p>
                  <p className="fs-300 italic">Language enthusiast</p>
                </div>
                <div className={styles.studentImg}>
                  <img src={samaira} alt="" />
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="grid gap-8">
              <p className="fs-700 ff-heading">
                The in-depth discussions and practical examples at Star Classes
                made complex topics like accounting and business studies simple
                and engaging. I’m now pursuing my dream career in finance.
              </p>
              <div
                className={classNames(
                  "flex align-items-center gap-2 justify-end",
                  styles.student
                )}
              >
                <div>
                  <p className="fs-300">AMAN</p>
                  <p className="fs-300 italic">Commerce Stream (Rank 1)</p>
                </div>
                <div className={styles.studentImg}>
                  <img src={aman} alt="" />
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="grid gap-8">
              <p className="fs-700 ff-heading">
                Star Classes gave me the foundation I needed to crack one of the
                toughest exams in the country. The teachers were always
                available to clear doubts, and the mock tests made me
                exam-ready. I couldn’t have done it without their support!
              </p>
              <div
                className={classNames(
                  "flex align-items-center gap-2 justify-end",
                  styles.student
                )}
              >
                <div>
                  <p className="fs-300">SOFIA</p>
                  <p className="fs-300 italic">JEE Topper (AIR 45)</p>
                </div>
                <div className={styles.studentImg}>
                  <img src={sofia} alt="" />
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="grid gap-8">
              <p className="fs-700 ff-heading">
                Before joining Star Classes, I struggled with Physics. The
                personalized attention and detailed feedback from my teachers
                turned it into my strongest subject. Scoring 97% in my boards
                was a dream come true!
              </p>
              <div
                className={classNames(
                  "flex align-items-center gap-2 justify-end",
                  styles.student
                )}
              >
                <div>
                  <p className="fs-300">EMMA</p>
                  <p className="fs-300 italic">CBSE Board Topper (97%)</p>
                </div>
                <div className={styles.studentImg}>
                  <img src={emma} alt="" />
                </div>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
