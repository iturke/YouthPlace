import styles from './LandingBody.module.css';
import LandingTop from '../LandingTop';
import LanndingBottom from '../LandingBottom/LandingBottom';

function LandingBody(){
    return(
        <div className={styles.LandingBody}>
            <>
            <LandingTop/>
            <LanndingBottom/>
            </>
        </div>
    );
}

export default LandingBody

