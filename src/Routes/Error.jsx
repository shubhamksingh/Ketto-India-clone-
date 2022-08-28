import { Box, Button, Center } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <Box h='4rem'></Box>
      <h1 style={{fontSize:'40px', fontWeight:'bold'}}>404</h1>
      <p style={{fontSize:'40px', fontWeight:'bold'}}>Page Not Found</p>
      <br />
      <br />  
      <Center>
        <Button colorScheme='purple' size='lg' onClick={()=> navigate('/')} >
          Go Back Home
        </Button>
      </Center>
      <Box h='4rem'></Box>
    </div>
  );
}
export default Error;
