import { Button } from '@chakra-ui/react';
import styles from './Home.module.css'
export const Home = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.inside_banner}>
          <h2>Need Funds to Pay For a Medical Emergency or Social Cause?</h2>
          <div className={styles.inside_banner1}>
            <div><h3>0%</h3> <span>PLATFORM FEE</span></div>
            <div><h3>55 Lakh+</h3> <span>DONORS</span></div>
            <div><h3>2 Lakh+</h3> <span>FUNDRAISERS</span></div>
          </div>

          <div className= {styles.inside_banner2}>
            <p>Ketto’s <b>0% Platform fees </b>ensures maximum funds for you</p>
            <Button variant='solid' colorScheme='teal' height='3.5rem' width='16rem'>Start a Fundraiser for FREE</Button>
            <p> नि: शुल्क फंडरेजर शुरू करें </p>
          </div>
      </div>
      </div>
    </div>
  )
};
