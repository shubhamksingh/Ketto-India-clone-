import { Button, Center } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404</h1>
      <p>Page Not Found</p>
      <br />
      <br />  
      <Center>
        <Button colorScheme='teal' size='lg' onClick={()=> navigate('/')} >
          Go Back Home
        </Button>
      </Center>
    </div>
  );
}
export default Error;
