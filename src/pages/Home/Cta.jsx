import styles from './Home.module.css'
import classNames from 'classnames'
import Button from '@ui/Button/Button'

const Cta = () => {
  return (
    <section className={classNames("breakout", "grid", "justify-items-center", "gap-4", styles.cta)}>
      <h2 className="fs-800 ff-heading fw-semibold text-align-center">Join Star Classes today</h2>
      <Button label="Sign up with us" type="primary" size="normal" />
    </section>
  );
}

export default Cta