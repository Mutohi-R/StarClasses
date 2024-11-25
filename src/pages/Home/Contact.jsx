import styles from './Home.module.css'
import classNames from 'classnames'
import mailIcon from '@icons/mail.svg'
import locationIcon from '@icons/location.svg'

const Contact = () => {
  return (
    <section className={classNames("breakout", styles.contact)}>
      <div className={classNames("even-columns", "gap-6", styles.details)}>
        <div className="flow">
          <h2 className="fs-800 ff-heading fw-semibold">
            We&apos;re here to help you succeed
          </h2>
          <p className={classNames("text-neutral-400", styles.description)}>
            Have questions about our courses, schedules, or anything else? Reach
            out to us using the details below, and we&apos;ll be happy to assist
            you.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="flow">
            <div className="flex gap-1 align-items-center">
              <img src={mailIcon} alt="mail icon" />
              <p className="fs-500 fw-bold">Contact</p>
            </div>
            <p className="text-neutral-500">info@starclasses.com</p>
            <p className="text-neutral-500">+91 98755 43210</p>
          </div>
          <div className="flow">
            <div className="flex gap-1 align-items-center">
              <img src={locationIcon} alt="location icon" />
              <p className="fs-500 fw-bold">Address</p>
            </div>
            <p className="text-neutral-500">
              Star Classes, 123 Academic Lane, Education City.
            </p>
          </div>
        </div>
      </div>
      <article className={classNames(styles.map)}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15852.947388016553!2d3.347061393411352!3d6.617470399857951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1732521004031!5m2!1sen!2sng"
          // width="600"
          // height="450"
          style={{"border":0}}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </article>
    </section>
  );
}

export default Contact