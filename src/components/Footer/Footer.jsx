import styles from "./Footer.module.css";
import classNames from "classnames";
import Button from "@ui/Button/Button";
import facebook from "@icons/facebook.svg";
import x from "@icons/x.svg";
import linkedin from "@icons/linkedin.svg";
import instagram from "@icons/instagram.svg";

const Footer = () => {
  return (
    <footer
      className={classNames(
        "content-grid text-neutral-100 bg-primary-900",
        styles.primaryFooter
      )}
    >
      <div
        className={classNames(
          "breakout",
          styles.footerContainer
        )}
      >
        <div className={classNames("grid gap-6", styles.footerSectionOne)}>
          <p className="fs-500 text-primary-300">
            To provide <span className="text-neutral-100">quality</span>{" "}
            education that empowers students to reach their{" "}
            <span className="text-neutral-100">full potential</span> and achieve
            their dreams
          </p>
          <div className="grid-flow">
            <p>Enter your email address to stay updated</p>
            <div className={classNames(styles.formGroup)}>
              <input className="" type="email" placeholder="name@gmail.com" />
              <Button label="Subscribe now" type="primary" size="normal" />
            </div>
          </div>
        </div>
        <div className={classNames("flex gap-10 fs-300", styles.footerSectionTwo)}>
          <div className="grid gap-2">
            <p className="text-primary-300">Quick links</p>
            <p>Home</p>
            <p>About</p>
            <p>Courses</p>
            <p>Faculty</p>
            <p>Success stories</p>
            <p>Contact us</p>
            <p>FAQs</p>
          </div>
          <div className="grid gap-2">
            <p className="text-primary-300">Courses</p>
            <p>Mathematics</p>
            <p>Commerce</p>
            <p>Languages</p>
            <p>Computer science</p>
            <p>Test prep</p>
            <p>Personal development</p>
            <p>Technology</p>
          </div>
        </div>
        <div className={classNames("flex gap-4 flex-wrap fs-300", styles.footerSectionThree)}>
          <p className="text-primary-300">&copy; Star Classes. All rights reserved.</p>
          <p>Terms of service</p>
          <p>Privacy policy</p>
          <p>Cookies settings</p>
        </div>
        <div className={classNames("flex gap-1 flex-wrap", styles.footerSectionFour)}>
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
          <img src={x} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
