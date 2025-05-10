import styles from './LandingBody.module.css';
import LandingTop from '../LandingTop/LandingTop';

function LandingBody(){
    return(
        <div className={styles.LandingBody}>
            <LandingTop/>
        </div>
    );
}

export default LandingBody