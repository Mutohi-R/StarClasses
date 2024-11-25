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
            <AccordionItem  icon={mathematics} title="Mathematics" >
              <ul role='list'>
                <li>Algebra</li>
                <li>Calculus</li>
                <li>Geometry</li>
                <li>Trigonometry</li>
                <li>Statistics & probability</li>
                <li>Advanced mathematics (for college prep)</li>
              </ul>
            </AccordionItem>
            <Line />
            <AccordionItem icon={commerce} title="Commerce">
              <ul role='list'>
                <li>Accounting</li>
                <li>Financial management</li>
                <li>Marketing principles</li>
                <li>Business studies</li>
                <li>Entrepreneurship</li>
                <li>Economics</li>
              </ul>
            </AccordionItem>
            <Line />
            <AccordionItem icon={languages} title="Languages">
              <ul role='list'>
                <li>English language & literature</li>
                <li>Spanish</li>
                <li>French</li>
                <li>German</li>
                <li>Chinese</li>
                <li>Japanese</li>
                <li>Public speaking & communication skills</li>
                <li>Creative writing</li>
              </ul>
            </AccordionItem>
            <Line />
            <AccordionItem icon={computerScience} title="Computer Science">
              <ul role='list'>
                <li>Introduction to programming (Python)</li>
                <li>Web development basics (HTML, CSS, Javascript)</li>
                <li>Data science fundamentals</li>
                <li>Artificial intelligence for beginners</li>
                <li>Computer applications in business</li>
                <li>Data structures and algorithms</li>
                <li>Digital literacy skills</li>
                <li>Programming practices and techniques</li>
              </ul>
            </AccordionItem>
            <div className={styles.extraLine}>
                <Line />
            </div>
        </div>
        <div className='grid gap-2'>
            <AccordionItem icon={testPrep} title="Test Prep">
              <ul role='list'>
                <li>SAT preparation</li>
                <li>ACT preparation</li>
                <li>GRE quantitative</li>
                <li>GMAT verbal and quantitative</li>
                <li>AP exam prep</li>
                <li>IELTS/TOEFL english prep</li>
              </ul>
            </AccordionItem>
            <Line />
            <AccordionItem icon={fineArts} title="Fine Arts">
              <ul role='list'>
                <li>Visual arts</li>
                <li>Music theory</li>
                <li>Photography basics</li>
                <li>Dance and movement</li>
                <li>Graphic design fundamentals</li>
                <li>Theatre & performance arts</li>
              </ul>
            </AccordionItem>
            <Line />
            <AccordionItem icon={personalDevelopment} title="Personal Development">
              <ul role="list">
                <li>Time management</li>
                <li>Leadership skills</li>
                <li>Critical thinking and problem solving</li>
                <li>Emotional intelligence</li>
                <li>Career counselling & resume building</li>
                <li>Stress management for students</li>
              </ul>
            </AccordionItem>
            <Line />
            <AccordionItem icon={technology} title="Technology">
              <ul role='list'>
                <li>Introduction to cybersecurity</li>
                <li>Cloud computing basics</li>
                <li>Networking fundamentals</li>
                <li>Internet of things (IoT)</li>
                <li>Blockchain technology</li>
                <li>Quantum computing</li>
                <li>Augmented reality (AR) & virtual reality (VR)</li>
              </ul>
            </AccordionItem>
        </div>
      </article>
    </section>
  );
}

export default Courses