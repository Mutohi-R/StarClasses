import styles from './Home.module.css'
import classNames from 'classnames'
import anna from '@images/anna.png'

const Testimonials = () => {
  return (
    <section className={classNames("full-width", classNames(styles.testimonials))}>
        <article className='grid gap-8'>
            <p className='fs-700 ff-heading'>Star Classes not only helped me prepare for the SAT but also taught me time management and stress control. Their guidance played a huge role in my acceptance to my dream college.</p>
            <div className={classNames("flex align-items-center gap-2 justify-end", styles.student)}>
                <div>
                    <p className='fs-300'>ANNA</p>
                    <p className='fs-300 italic'>SAT Achiever (Score: 1560)</p>
                </div>
                <div className={styles.studentImg}>
                    <img src={anna} alt="" />
                </div>
            </div>
        </article>
    </section>
  )
}

export default Testimonials