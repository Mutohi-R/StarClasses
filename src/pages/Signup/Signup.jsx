import styles from "./Signup.module.css";
import Swiper from "swiper";
import 'swiper/css';
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import SignupForm from "./SignupForm";
import classNames from "classnames";

const Signup = () => {
  return (
    <>
      <Header />
      <main className={classNames("", styles.signupContainer)}>
        <section className={classNames(styles.signupHeading)}>
          <div className={classNames("grid gap-4 text-neutral-100 text-align-center", styles.tag)}>
            <h1 className="fs-800 ff-heading mx-auto">Join Star Classes to accelerate your learning</h1>
            <p className="fs-500 mx-auto">Log in to Star Classes to get started!</p>
            <p className="fs-300 mx-auto">
              By signing up for Star Classes, you agree to our{" "}
              <span className="text-underline">Term of service</span> and <span className="text-underline">Privacy Policy</span>
            </p>
          </div>
        </section>
        <section className={classNames("grid gap-3 align-content-center mx-auto", styles.signupContent)}>
          <h2 className="fs-700 ff-heading">Create your account</h2>
          <SignupForm />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Signup;
