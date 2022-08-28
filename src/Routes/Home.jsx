import { Box, Button, Container, Image, TableContainer } from '@chakra-ui/react';

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

      {/* <Container w='100%' minHeight='70vh' width='container.xl' centerContent> */}
        <Box w='50%' m='auto'>
          <Box as='h2' fontSize='40px' p='2rem' mt='1rem' fontWeight='bold'>Start a Fundraiser in three simple steps</Box>
          <Box display='flex' gap='4rem' flexDirection='row' w='100%' alignItems='center'>
            <Image src='https://ketto.gumlet.io/assets/images/homepage/sac-separator.png?w=100&dpr=1.1' h='20rem' />
            <Box display='flex' flexDirection='column' gap='3rem' align='flex-start' textAlign='start' mt='0.5rem'>
              <Box display='flex'  flexDirection='column' alignItems='flex-start' textAlign='start' > 
                <h3 style={{color:'teal', fontSize:'26px', fontWeight:'bold'}}>Start your fundraiser</h3>
                <p>It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.</p>
              </Box>
              <Box>
                <h3 style={{color:'teal', fontSize:'26px', fontWeight:'bold'}}>Share your fundraiser</h3>
                <p>All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.</p>
              </Box>
              <Box >
                <h3 style={{color:'teal', fontSize:'26px', fontWeight:'bold'}}>Withdraw Funds</h3>
                <p>The funds raised can be withdrawn without any hassle directly to your bank account.</p>
              </Box>
            </Box>
            <video style={{width:'200px', height:'500px', padding:'1rem'}} src='https://d1vdjc70h9nzd9.cloudfront.net/videos/screen_recording.mp4'/>
          </Box>
        </Box>
      {/* </Container> */}
    </div>
  )
};
