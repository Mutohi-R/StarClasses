import classNames from 'classnames'
import styles from './Home.module.css'
import aboutData from '@data/aboutData.json'

const About = () => {
  return (
    <section className={classNames("partia", "grid", "gap-8", styles.about)}>
      <h2 className='ff-heading fw-semibold fs-800 text-align-center'>Why choose Star Classes?</h2>
      <div className={classNames("even-columns", "gap-6", styles.cardContainer)}>
        {
            aboutData.map((item, index) => {
                return (
                  <div className="grid gap-3 justify-items-center" key={index}>
                    <img src={item.imgSrc} alt={item.feature} />
                    <h3 className="ff-heading fs-600 text-align-center">{item.feature}</h3>
                    <p className={classNames("text-align-center", styles.cardDescription)}>
                      {item.description}
                    </p>
                  </div>
                );
            })
        }
      </div>
    </section>
  );
}

export default About