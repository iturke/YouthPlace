import styles from './LandingTop.module.css';
import ButtonEvents from '../ButtonEvents';

function LanndingTop() {
  return (
    <>
    <div className={styles.TopText}> Знайди свою подію</div>
    
   <div className={styles.Back}><ButtonEvents text="Переглянути всі події"/></div>
   </>
  );
}

export default LanndingTop

