import styles from './Courses.module.css'
import classNames from 'classnames'
import AccordionItem from './AccordionItem'
import Line from '@ui/Line/Line'
import mathematics from '@icons/mathematics.svg'
import commerce from '@icons/commerce.svg'
import languages from '@icons/languages.svg'
import computerScience from '@icons/computer-science.svg'
import testPrep from '@icons/test-prep.svg'
import fineArts from '@icons/fine-arts.svg'
import personalDevelopment from '@icons/personal-development.svg'
import technology from '@icons/technology.svg'

const Courses = () => {
  return (
    <section className='breakout'>
      <article className={classNames(styles.accordion, "br-1")}>
        <div className='grid gap-2'>
            <AccordionItem  icon={mathematics} title="Mathematics" />
            <Line />
            <AccordionItem icon={commerce} title="Commerce" />
            <Line />
            <AccordionItem icon={languages} title="Languages" />
            <Line />
            <AccordionItem icon={computerScience} title="Computer Science" />
            <div className={styles.extraLine}>
                <Line />
            </div>
        </div>
        <div className='grid gap-2'>
            <AccordionItem icon={testPrep} title="Test Prep" />
            <Line />
            <AccordionItem icon={fineArts} title="Fine Arts" />
            <Line />
            <AccordionItem icon={personalDevelopment} title="Personal Development" />
            <Line />
            <AccordionItem icon={technology} title="Technology" />
        </div>
      </article>
    </section>
  );
}

export default Courses