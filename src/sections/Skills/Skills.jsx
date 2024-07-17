import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
        <SkillList src={checkMarkIcon} skill="Kafka" />
        <SkillList src={checkMarkIcon} skill="Redis" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Kubernetes" />
        <SkillList src={checkMarkIcon} skill="Linux / Bash scripting" />
        <SkillList src={checkMarkIcon} skill="Docker" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
      <hr/>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Websockets, rtc" />
        <SkillList src={checkMarkIcon} skill="Testing" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="ORMs" />
        <SkillList src={checkMarkIcon} skill="Monorepos, Turborepo, lints" />
      </div>
      
    </section>
  );
}

export default Skills;
