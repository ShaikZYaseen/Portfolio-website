import styles from './HeroStyles.module.css';
import heroImg from '../../assets/image (1).png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterIcon from '../../assets/twitter-dark.svg';
import githubIcon from '../../assets/github-dark.svg';
import linkedinIcon from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import Resume from "./Resume.pdf"

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
 

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        
      </div>
      <div className={styles.info}>
        <h1>
          Shaik
          <br />
          Yaseen
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/ShaikZYaseen" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/shaikyaseenz/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className="descc">
         I love mutating states!
        </p>
        <a >
          <button className={styles.anchorButton}><a href={Resume} className={styles.anchor} target="_blank" > Resume </a></button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
