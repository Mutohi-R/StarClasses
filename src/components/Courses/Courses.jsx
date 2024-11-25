import styles from "./Courses.module.css";
import classNames from "classnames";
import AccordionItem from "./AccordionItem";
import Line from "@ui/Line/Line";
import mathematics from "@icons/mathematics.svg";
import commerce from "@icons/commerce.svg";
import languages from "@icons/languages.svg";
import computerScience from "@icons/computer-science.svg";
import testPrep from "@icons/test-prep.svg";
import fineArts from "@icons/fine-arts.svg";
import personalDevelopment from "@icons/personal-development.svg";
import technology from "@icons/technology.svg";

import algebra from "@syllabus/Algebra_Syllabus.pdf";
import calculus from "@syllabus/Calculus_Syllabus.pdf";
import geometry from "@syllabus/Geometry_Syllabus.pdf";
import trigonometry from "@syllabus/Trigonometry_Syllabus.pdf";
import statistics from "@syllabus/Statistics_and_Probability_Syllabus.pdf";
import advancedMathematics from "@syllabus/Advanced_Mathematics_Syllabus.pdf";

import accounting from "@syllabus/Accounting_Syllabus.pdf";
import financialManagement from "@syllabus/Financial_Management_Syllabus.pdf";
import marketingPrinciples from "@syllabus/Marketing_Principles_Syllabus.pdf";
import businessStudies from "@syllabus/Business_Studies_Syllabus.pdf";
import entrepreneurship from "@syllabus/Entrepreneurship_Syllabus.pdf";

import englishLanguage from "@syllabus/English_Language_and_Literature_Syllabus.pdf";
import spanish from "@syllabus/Spanish_Syllabus.pdf";
import german from "@syllabus/German_Syllabus.pdf";
import chinese from "@syllabus/Chinese_Syllabus.pdf";
import japanese from "@syllabus/Japanese_Syllabus.pdf";
import publicSpeaking from "@syllabus/Public_Speaking_and_Communication_Skills_Syllabus.pdf";
import creativeWriting from "@syllabus/Creative_Writing_Syllabus.pdf";

import introToProgramming from "@syllabus/Introduction_to_Programming_(Python)_Syllabus.pdf";
import webDevelopmentBasics from "@syllabus/Web_Development_Basics_Syllabus.pdf";
import dataScienceFundamentals from "@syllabus/Data_Science_Fundamentals_Syllabus.pdf";
import aiForBeginners from "@syllabus/Artificial_Intelligence_for_Beginners_Syllabus.pdf";
import computerApplicationsInBusiness from "@syllabus/Computer_Applications_in_Business_Syllabus.pdf";
import dataStructuresAndAlgorithms from "@syllabus/Data_Structures_and_Algorithms_Syllabus.pdf";
import digitalLiteracySkills from "@syllabus/Digital_Literacy_Skills_Syllabus.pdf";
import programmingPracticesAndTechniques from "@syllabus/Programming_Practices_and_Techniques_Syllabus.pdf";

import introToCybersecurity from "@syllabus/Introduction_to_Cybersecurity_Syllabus.pdf";
import cloudComputingBasics from "@syllabus/Cloud_Computing_Basics_Syllabus.pdf";
import networkingFundamentals from "@syllabus/Networking_Fundamentals_Syllabus.pdf";
import internetOfThings from "@syllabus/Internet_of_Things_(IoT)_Syllabus.pdf";
import blockchainTechnology from "@syllabus/Blockchain_Technology_Syllabus.pdf";
import quantumComputing from "@syllabus/Quantum_Computing_Syllabus.pdf";
import augmentedReality from "@syllabus/Augmented_Reality_(AR)_&_Virtual_Reality_(VR)_Syllabus.pdf";

const Courses = () => {
  return (
    <section className="breakout">
      <article className={classNames(styles.accordion, "br-1")}>
        <div className="grid gap-2">
          <AccordionItem icon={mathematics} title="Mathematics">
            <ul role="list">
              <li>
                <a href={algebra} download={"algebra"}>
                  Algebra
                </a>
              </li>
              <li>
                <a href={calculus} download={"calculus"}>
                  Calculus
                </a>
              </li>
              <li>
                <a href={geometry} download={"geometry"}>
                  Geometry
                </a>
              </li>
              <li>
                <a href={trigonometry} download={"trigonometry"}>
                  Trigonometry
                </a>
              </li>
              <li>
                <a href={statistics} download={"statistics"}>
                  Statistics & probability
                </a>
              </li>
              <li>
                <a href={advancedMathematics} download={"advanced-mathematics"}>
                  Advanced mathematics
                </a>
              </li>
            </ul>
          </AccordionItem>
          <Line />
          <AccordionItem icon={commerce} title="Commerce">
            <ul role="list">
              <li>
                <a href={accounting} download={"accounting"}>
                  Accounting
                </a>
              </li>
              <li>
                <a href={financialManagement} download={"financial management"}>
                  Financial management
                </a>
              </li>
              <li>
                <a href={marketingPrinciples} download={"marketing principles"}>
                  Marketing principles
                </a>
              </li>
              <li>
                <a href={businessStudies} download={"business studies"}>
                  Business studies
                </a>
              </li>
              <li>
                <a href={entrepreneurship} download={"entrepreneurship"}>
                  Entrepreneurship
                </a>
              </li>
            </ul>
          </AccordionItem>
          <Line />
          <AccordionItem icon={languages} title="Languages">
            <ul role="list">
              <li>
                <a href={englishLanguage} download={"english language"}>
                  English language & literature
                </a>
              </li>
              <li>
                <a href={spanish} download={"spanish"}>
                  Spanish
                </a>
              </li>
              <li>
                <a href={german} download={"german"}>
                  German
                </a>
              </li>
              <li>
                <a href={chinese} download={"chinese"}>
                  Chinese
                </a>
              </li>
              <li>
                <a href={japanese} download={"japanese"}>
                  Japanese
                </a>
              </li>
              <li>
                <a href={publicSpeaking} download={"public speaking"}>
                  Public speaking & communication skills
                </a>
              </li>
              <li>
                <a href={creativeWriting} download={"creative writing"}>
                  Creative writing
                </a>
              </li>
            </ul>
          </AccordionItem>
          <Line />
          <AccordionItem icon={computerScience} title="Computer Science">
            <ul role="list">
              <li>
                <a href={introToProgramming} download={"intro to programming"}>
                  Introduction to programming (Python)
                </a>
              </li>
              <li>
                <a
                  href={webDevelopmentBasics}
                  download={"web development basics"}
                >
                  Web development basics
                </a>
              </li>
              <li>
                <a
                  href={dataScienceFundamentals}
                  download={"data science fundamentals"}
                >
                  Data science fundamentals
                </a>
              </li>
              <li>
                <a href={aiForBeginners} download={"ai for beginners"}>
                  Artificial intelligence for beginners
                </a>
              </li>
              <li>
                <a
                  href={computerApplicationsInBusiness}
                  download={"computer applications in business"}
                >
                  Computer applications in business
                </a>
              </li>
              <li>
                <a
                  href={dataStructuresAndAlgorithms}
                  download={"data structures and algorithms"}
                >
                  Data structures and algorithms
                </a>
              </li>
              <li>
                <a
                  href={digitalLiteracySkills}
                  download={"digital literacy skills"}
                >
                  Digital literacy skills
                </a>
              </li>
              <li>
                <a
                  href={programmingPracticesAndTechniques}
                  download={"programming practices and techniques"}
                >
                  Programming practices and techniques
                </a>
              </li>
            </ul>
          </AccordionItem>
          <div className={styles.extraLine}>
            <Line />
          </div>
        </div>
        <div className="grid gap-2">
          <AccordionItem icon={technology} title="Technology">
            <ul role="list">
              <li>
                <a
                  href={introToCybersecurity}
                  download={"intro to cybersecurity"}
                >
                  Introduction to cybersecurity
                </a>
              </li>
              <li>
                <a
                  href={cloudComputingBasics}
                  download={"cloud computing basics"}
                >
                  Cloud computing basics
                </a>
              </li>
              <li>
                <a
                  href={networkingFundamentals}
                  download={"networking fundamentals"}
                >
                  Networking fundamentals
                </a>
              </li>
              <li>
                <a href={internetOfThings} download={"internet of things"}>
                  Internet of things (IoT)
                </a>
              </li>
              <li>
                <a
                  href={blockchainTechnology}
                  download={"blockchain technology"}
                >
                  Blockchain technology
                </a>
              </li>
              <li>
                <a href={quantumComputing} download={"quantum computing"}>
                  Quantum computing
                </a>
              </li>
              <li>
                <a href={augmentedReality} download={"augmented reality"}>
                  Augmented reality (AR) & virtual reality (VR)
                </a>
              </li>
            </ul>
          </AccordionItem>
          <Line />
          <AccordionItem icon={testPrep} title="Test Prep">
            <ul role="list">
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
            <ul role="list">
              <li>Visual arts</li>
              <li>Music theory</li>
              <li>Photography basics</li>
              <li>Dance and movement</li>
              <li>Graphic design fundamentals</li>
              <li>Theatre & performance arts</li>
            </ul>
          </AccordionItem>
          <Line />
          <AccordionItem
            icon={personalDevelopment}
            title="Personal Development"
          >
            <ul role="list">
              <li>Time management</li>
              <li>Leadership skills</li>
              <li>Critical thinking and problem solving</li>
              <li>Emotional intelligence</li>
              <li>Career counselling & resume building</li>
              <li>Stress management for students</li>
            </ul>
          </AccordionItem>
        </div>
      </article>
    </section>
  );
};

export default Courses;
