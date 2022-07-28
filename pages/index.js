import Dashboard from '../components/Dashboard'
import styles from '../components/dashboard.module.css'

function HomePage () {
    return(
        <div className={styles.maincontainer}>
            <Dashboard/>
        </div>
    );
}

export default HomePage;