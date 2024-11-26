import styles from "./Home.module.css";
import classNames from "classnames";
import Button from "@ui/Button/Button";
import resourcesImage from "@images/resources-img.png";
import introToCybersecurity from "@syllabus/Introduction_to_Cybersecurity_Syllabus.pdf";
import priceList from "@syllabus/Star_Classes_Price_Listing.pdf";

const Resources = () => {
  return (
    <section
      id="resources"
      className={classNames(
        "partia",
        "even-columns",
        "align-items-center",
        "gap-9",
        styles.resources
      )}
    >
      <div className={classNames(styles.resourcesImg)}>
        <img src={resourcesImage} alt="" />
      </div>
      <div className="grid gap-4">
        <p className="fs-300 text-neutral-400">
          OUR RESOURCES AT YOUR FINGERTIPS
        </p>
        <h2 className="fs-800 ff-heading fw-semibold">
          Everything you need in one place
        </h2>
        <p>
          We believe learning is most effective when the right resources are at
          your fingertips. Download course materials, explore study guides, and
          access tools designed to enhance your academic journey.
        </p>
        <div
          className={classNames(styles.resourcesButtonContainer, "flex gap-3")}
        >
          <a href={introToCybersecurity} download={"course syllabus"}>
            <Button label="Course syllabus" type="primary" size="large" />
          </a>
          <a href={priceList} download={"price list"}>
            <Button label="Price list" type="primary" size="large" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;
